import { Client } from "@notionhq/client";
import { notion } from '../utilities/notion'

const notionClient = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_API });
const imoveisDB = "ef133fe3570444ffac0b6f940c77acde"
const cidadesDB = "2b7d03a9dc0a40e4a5c417253120becc"

interface Props {
  start_cursor?: string | undefined
  page_size?: number
  filter?: any
}

export const getImoveis = async ({ start_cursor = undefined, page_size = 12, filter }: Props) => {
  const obj: any[] = []
  const cidades: any[] = []

  const and = []

  if (filter.tipo) {
    and.push({
      "property": "Status",
      "select": {
        "equals": filter.tipo
      }
    },)
  }
  if (filter.cidade) {
    and.push({
      "property": "Cidade",
      "relation": {
        "contains": filter.cidade
      }
    },)
  }
  if (filter.categoria) {
    and.push({
      "property": "Tipo",
      "select": {
        "equals": filter.categoria
      }
    },)
  }
  if (filter.texto) {
    and.push({
      or: [{
        "property": "Descrição",
        "rich_text": {
          "contains": filter.texto
        }
      },
      {
        "property": "Name",
        "rich_text": {
          "contains": filter.texto
        }
      },
      {
        "property": "Endereço",
        "rich_text": {
          "contains": filter.texto
        }
      },
      ]
    })
  }

  let queryFilter = undefined

  if (and.length > 0) {
    queryFilter = { and: and }
  }

  const response = await notionClient.databases.query({
    database_id: imoveisDB,
    filter: queryFilter,
    page_size,
    start_cursor: start_cursor === '""' ? undefined : start_cursor,
  });

  const responseCidades = await notionClient.databases.query({
    database_id: cidadesDB,
  });

  responseCidades.results.forEach((n: any) => {
    cidades.push({
      id: notion.id(n),
      name: notion.title(n),
    })
  })

  response.results.forEach((n: any) => {
    obj.push({
      id: notion.id(n),
      codigo: notion.title(n),
      video: notion.url(n, "Video"),
      cidade: cidades.find((cidade: any) => cidade.id == notion.relation_id(n, "Cidade"))?.name || '',
      preco: notion.number(n, 'Preço'),
      para: notion.select(n, 'Status'),
      tipo: notion.select(n, 'Tipo'),
      quartos: notion.number(n, 'Quartos'),
      banheiros: notion.number(n, 'Banheiros'),
      garagem: notion.number(n, 'Garagens'),
      area: notion.number(n, 'Área'),
      imagens: notion.files(n, 'Imagens'),
      endereco: notion.text(n, 'Endereço'),
      descricao: notion.text(n, 'Descrição'),
    })
  })
  return {
    data: obj,
    meta: {
      next_cursor: response?.next_cursor,
      has_more: response?.has_more,
      type: response?.type,
      page: response?.page
    }
  }
}
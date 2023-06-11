import { Client } from "@notionhq/client";
import { notion } from '../utilities/notion'

const notionClient = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_API });
const imoveisDB = "ef133fe3570444ffac0b6f940c77acde"
const cidadesDB = "2b7d03a9dc0a40e4a5c417253120becc"

export const getImovel = async (codigo: string) => {
  const obj: any[] = []
  const cidades: any[] = []

  const responseCidades = await notionClient.databases.query({
    database_id: cidadesDB,
  });

  responseCidades.results.forEach((n: any) => {
    cidades.push({
      id: notion.id(n),
      name: notion.title(n),
    })
  })

  const response = await notionClient.databases.query({
    database_id: imoveisDB,
    filter: {
      and: [{
        "property": "Name",
        "rich_text": {
          "contains":codigo
        }
      },]
    },
    page_size:1, 
  });

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
    data: obj[0] || null,
    result: response.results
  }
}
import { Client } from "@notionhq/client";
import { notion } from '../utilities/notion'

const notionClient = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_API });
const cidadesDB = "2b7d03a9dc0a40e4a5c417253120becc"

export const getCidades = async () => {
  const responseCidades = await notionClient.databases.query({ database_id: cidadesDB });
  const cidades = responseCidades.results.map((n: any) => ({ id: notion.id(n), name: notion.title(n) }));
  return cidades;
}
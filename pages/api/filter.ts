import { getImoveis } from "../../utilities/getImoveis";

export default async function handler(req: any, res: any) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const posts = await getImoveis(req?.body);

  res.status(200).json(posts);
}


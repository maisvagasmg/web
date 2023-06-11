import { getCidades } from "../../utilities/getCidades";

export default async function handler(req: any, res: any) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=600'
  )
  const posts = await getCidades();

  res.status(200).json(posts);
}


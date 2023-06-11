function onlyLinks(images: any) {
  const links: any[] = []
  images.forEach((image: any) => {
    links.push(image?.external?.url || image?.file?.url)
  })
  return links
}

export const notion = {
  title: (item: any) => item?.properties.Name.title[0]?.text?.content,
  url: (item: any, fieldName: string) => item?.properties[fieldName]?.url,
  relation_id: (item: any, fieldName: string) => item?.properties[fieldName]?.relation[0]?.id,
  number: (item: any, fieldName: string) => item?.properties[fieldName]?.number,
  select: (item: any, fieldName: string) => item?.properties[fieldName].select?.name,
  files: (item: any, fieldName: string) => onlyLinks(item?.properties[fieldName].files),
  text: (item: any, fieldName: string) => item?.properties[fieldName]?.rich_text[0]?.plain_text,
  id: (item: any) => item?.id
}
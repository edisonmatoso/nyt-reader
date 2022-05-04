import { API_KEY } from '../../constants'

export const getArticle = async (
  documentType: string | undefined,
  id: string | undefined
) => {
  if (!id) {
    return
  }

  const query = `_id: "nyt://${documentType}/${id}"`
  const res = await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&fq=${query}`
  )

  return res.json()
}

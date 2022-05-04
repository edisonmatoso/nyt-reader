import { API_KEY } from '../../constants'

export const getArticles = async (page: number, term?: string) => {
  const res = await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&page=${page}&fq=${term}&fl=_id,web_url,pub_date,headline`
  )

  return res.json()
}

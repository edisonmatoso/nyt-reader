export const getArticles = async (page: number, term?: string) => {
  const API_KEY = process.env.REACT_APP_API_KEY
  const res = await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&page=${page}&fq=${term}`
  )

  return res.json()
}

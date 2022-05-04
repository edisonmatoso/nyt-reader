export type ArticlesFetch = {
  response: {
    docs: Array<Article>
  }
}

export type Article = {
  lead_paragraph: string
  pub_date: string
  document_type: string
  headline: {
    main: string
  }
  _id: string
}

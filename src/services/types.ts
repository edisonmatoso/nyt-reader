export type ArticlesFetch = {
  response?: {
    docs: Array<Article>
  }
  fault?: {
    faultstring: string
  }
}

export type Article = {
  lead_paragraph: string
  pub_date: string
  document_type: string
  headline: {
    main: string
  }
  web_url: string
  _id: string
}

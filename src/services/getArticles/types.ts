export type ArticlesFetch = {
  response: {
    docs: Array<Article>
  }
}

export type Article = {
  abstract: string
  headline: {
    main: string
  }
  pub_date: string
  _id: string
}

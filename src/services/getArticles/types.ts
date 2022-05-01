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
  _id: string
}

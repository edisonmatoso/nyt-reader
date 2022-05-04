import React from 'react'
import { Article } from '../services/types'

type Context = {
  currentArticle: Article | undefined
  setCurrentArticle: React.Dispatch<React.SetStateAction<Article | undefined>>
}

const ArticleContext = React.createContext<Context>({
  currentArticle: undefined,
  setCurrentArticle: () => {}
})

export default ArticleContext

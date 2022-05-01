import React, { useState } from 'react'
import { Article } from '../services/getArticles/types'
import ArticleContext from './ArticleContext'

const ArticleProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentArticle, setCurrentArticle] = useState<Article>()

  return (
    <ArticleContext.Provider value={{ currentArticle, setCurrentArticle }}>
      {children}
    </ArticleContext.Provider>
  )
}

export default ArticleProvider

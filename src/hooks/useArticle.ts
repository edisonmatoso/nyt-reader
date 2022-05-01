import { useContext } from 'react'
import ArticleContext from '../context/ArticleContext'
import { Article } from '../services/getArticles/types'

export const useArticle = () => {
  const { currentArticle, setCurrentArticle } = useContext(ArticleContext)

  const handleArticle = (article: Article) => setCurrentArticle(article)

  return {
    currentArticle,
    handleArticle
  }
}

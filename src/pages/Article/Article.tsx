import { useArticle } from '../../hooks'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { ArticlesFetch } from '../../services/types'
import { getArticle } from '../../services'
import { useEffect } from 'react'

type Params = {
  id: string
  documentType: string
}

export const Article = () => {
  const { currentArticle, handleArticle } = useArticle()
  const { id, documentType } = useParams<Params>()

  const { data, isLoading } = useQuery<ArticlesFetch>(['article', id], () =>
    getArticle(documentType, id)
  )

  useEffect(() => {
    if (data?.response?.docs) {
      handleArticle(data.response.docs[0])
    }
  }, [data])

  if (isLoading) {
    return <p>Loading...</p>
  }

  const formatPubDate = () => {
    const pubDate = new Date(currentArticle?.pub_date ?? '')
    const day = pubDate.getDay()
    const month = pubDate.getMonth()
    const year = pubDate.getFullYear()
    return `${day + 1}.${month + 1}.${year}`
  }

  const pubDate = formatPubDate()

  return (
    <div>
      <Link to="/">{'< Go to results page'}</Link>
      <h1>{currentArticle?.headline.main}</h1>
      <p>{pubDate}</p>
      <p>{currentArticle?.lead_paragraph}</p>

      <a target="_blank" href={currentArticle?.web_url} rel="noreferrer">
        Read the full article
      </a>
    </div>
  )
}

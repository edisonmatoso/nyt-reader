import { useArticle } from '../../hooks'
import { Link } from 'react-router-dom'

export const Article = () => {
  const { currentArticle } = useArticle()

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
      <Link to="/">Back to list</Link>
      <h1>{currentArticle?.headline.main}</h1>
      <p>{currentArticle?.abstract}</p>
      <p>{pubDate}</p>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Link, useSearchParams } from 'react-router-dom'
import { useArticle, useDebounce } from '../../hooks'
import { getArticles } from '../../services'
import { ArticlesFetch } from '../../services/getArticles/types'

export const Articles = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const initialPage = parseInt(searchParams.get('page') ?? '0')
  const initialTerm = searchParams.get('search') ?? ''

  const [page, setPage] = useState<number>(initialPage)
  const [term, setTerm] = useState(initialTerm)
  const { handleArticle } = useArticle()
  const debouncedTerm = useDebounce(term)

  const { data, isLoading } = useQuery<ArticlesFetch>(
    ['articles', page, debouncedTerm],
    () => getArticles(page, debouncedTerm),
    { keepPreviousData: true }
  )
  const docs = data?.response.docs

  const goPrevious = () => setPage((lastState) => lastState - 1)
  const goNext = () => setPage((lastState) => lastState + 1)
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTerm(event.target.value)

  useEffect(() => {
    setSearchParams({ page: page.toString(), search: term })
  }, [searchParams, page, term])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <input type="text" onChange={handleChangeInput} value={term} />
      <ul>
        {docs?.map((article) => (
          <li key={article._id}>
            <Link to="/article" onClick={() => handleArticle(article)}>
              {article.headline.main}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={goPrevious} disabled={page === 0}>
        previous
      </button>
      <button onClick={goNext}>next</button>
    </div>
  )
}

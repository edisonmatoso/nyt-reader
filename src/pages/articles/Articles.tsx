import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useDebounce } from '../../hooks'
import { getArticles } from '../../services'
import { ArticlesFetch } from '../../services/getArticles/types'

export function Articles() {
  const [page, setPage] = useState(0)
  const [term, setTerm] = useState('')
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

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <input type="text" onChange={handleChangeInput} value={term} />
      <ul>
        {docs?.map((article) => (
          <li key={article._id}>{article.headline.main}</li>
        ))}
      </ul>
      <button onClick={goPrevious} disabled={page === 0}>
        previous
      </button>
      <button onClick={goNext}>next</button>
    </div>
  )
}

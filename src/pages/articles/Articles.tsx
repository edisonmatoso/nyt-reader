import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Link, useSearchParams } from 'react-router-dom'
import { useArticle, useDebounce } from '../../hooks'
import { getArticles } from '../../services'
import { ArticlesFetch } from '../../services/types'
import {
  Input,
  Label,
  List,
  ListItem,
  ListLabel,
  NaviagationArea,
  NavigationButton,
  SearchArea
} from './Articles.styles'

export const Articles = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const initialPage = parseInt(searchParams.get('page') ?? '0')
  const initialTerm = searchParams.get('search') ?? ''

  const [page, setPage] = useState<number>(initialPage)
  const [term, setTerm] = useState(initialTerm)
  const { handleArticle } = useArticle()
  const debouncedTerm = useDebounce(term)

  const { data, isLoading, isFetching } = useQuery<ArticlesFetch>(
    ['articles', page, debouncedTerm],
    () => getArticles(page, debouncedTerm),
    {
      keepPreviousData: true
    }
  )
  const docs = data?.response?.docs

  const goPrevious = () => setPage((lastState) => lastState - 1)
  const goNext = () => setPage((lastState) => lastState + 1)
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTerm(event.target.value)

  const getArticleId = (fullId: string) => {
    const result = fullId.match(/([^/]+$)/i)
    return result ? result[0] : ''
  }

  useEffect(() => {
    setSearchParams({ page: page.toString(), search: term })
  }, [searchParams, page, term])

  if (data?.fault) {
    return (
      <>
        <p>Woops... Some error ocurred</p>
        <code>{data.fault.faultstring}</code>
      </>
    )
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <SearchArea>
        <Label htmlFor="termSearch">Type search query term here:</Label>
        <Input
          id="termSearch"
          type="text"
          onChange={handleChangeInput}
          value={term}
        />
      </SearchArea>
      <List>
        <ListLabel>Results:</ListLabel>
        {docs?.map((article) => (
          <ListItem key={article._id}>
            <Link
              to={`/${article.document_type}/${getArticleId(article._id)}`}
              onClick={() => handleArticle(article)}
            >
              {article.headline.main}
            </Link>
          </ListItem>
        ))}
      </List>
      <NaviagationArea>
        <NavigationButton
          onClick={goPrevious}
          disabled={page === 0 || isFetching}
        >
          {'< Prev page'}
        </NavigationButton>
        <NavigationButton onClick={goNext} disabled={isFetching}>
          {'Next page >'}
        </NavigationButton>
      </NaviagationArea>
    </div>
  )
}

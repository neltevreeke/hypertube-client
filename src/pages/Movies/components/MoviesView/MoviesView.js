import React, { useEffect } from 'react'
import styles from './MoviesView.scss'
import Page from '../../../../components/Page/Page'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from 'actions/movies.js'
import { getBrowseMovies, getBrowseMoviesIsLoading } from 'selectors/movie'
import PageSpinner from '../../../../components/PageSpinner/PageSpinner'
import MovieCards from '../MovieCards/MovieCards'

const MoviesView = () => {
  const dispatch = useDispatch()
  const browseMovies = useSelector(getBrowseMovies)
  const isLoading = useSelector(getBrowseMoviesIsLoading)

  useEffect(() => {
    dispatch(getMovies())
  }, [])

  if (isLoading || !browseMovies) {
    return <PageSpinner />
  }

  return (
    <Page>
      <div className={styles.component}>
        <MovieCards movies={browseMovies} />
      </div>
    </Page>
  )
}

export default MoviesView

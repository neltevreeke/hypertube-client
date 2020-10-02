import React, { useEffect } from 'react'
import styles from './MoviesView.scss'
import Page from '../../../../components/Page/Page'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from 'actions/movies.js'
import { getPopularMovies, getPopularMoviesIsLoading, getMovieSearchResult } from 'selectors/movie'
import PageSpinner from '../../../../components/PageSpinner/PageSpinner'
import MovieCards from '../MovieCards/MovieCards'

const MoviesView = () => {
  const dispatch = useDispatch()
  const popularMovies = useSelector(getPopularMovies)
  const searchMovies = useSelector(getMovieSearchResult)
  const isLoading = useSelector(getPopularMoviesIsLoading)

  useEffect(() => {
    dispatch(getMovies())
  }, [])

  if (isLoading || !popularMovies) {
    return <PageSpinner />
  }

  return (
    <Page>
      <div className={styles.component}>
        <MovieCards movies={searchMovies || popularMovies} />
      </div>
    </Page>
  )
}

export default MoviesView

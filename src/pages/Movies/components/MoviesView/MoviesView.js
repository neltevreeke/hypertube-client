import React, { useEffect } from 'react'
import styles from './MoviesView.scss'
import Page from '../../../../components/Page/Page'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from 'actions/movies.js'
import { getBrowseMovies, getBrowseMoviesIsLoading, getBrowseMoviesError } from 'selectors/movie'
import PageSpinner from '../../../../components/PageSpinner/PageSpinner'
import MovieCards from '../MovieCards/MovieCards'

const MoviesView = () => {
  const dispatch = useDispatch()
  const browseMovies = useSelector(getBrowseMovies)
  const browseMoviesError = useSelector(getBrowseMoviesError)
  const isLoading = useSelector(getBrowseMoviesIsLoading)

  useEffect(() => {
    if (!isLoading) {
      dispatch(getMovies())
    }
  }, [])

  if (isLoading) {
    return <PageSpinner />
  }

  return (
    <Page>
      <div className={styles.component}>
        {browseMoviesError ? (
          <p>No movies or users have been found...</p>
        ) : (
          <MovieCards movies={browseMovies} />
        )}
      </div>
    </Page>
  )
}

export default MoviesView

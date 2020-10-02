import React, { useEffect } from 'react'
import styles from './MovieDetails.scss'
import Page from 'components/Page/Page'
import { getParamQueryString } from 'selectors/router'
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../../../../utils/configureStore'
import * as Routes from 'constants/Routes'
import { getMovieDetails } from '../../../../actions/movies'
import PageSpinner from 'components/PageSpinner/PageSpinner'
import { getMovieDetailsIsLoading, getMovieDetailsDetails } from 'selectors/movie'
import MovieDetailsHeading from '../MovieDetailsHeading/MovieDetailsHeading'
import MovieInformation from '../MovieInformation/MovieInformation'
import MovieComments from '../MovieComments/MovieComments'

const MovieDetails = () => {
  const query = useSelector(getParamQueryString)
  const isLoading = useSelector(getMovieDetailsIsLoading)
  const movieDetails = useSelector(getMovieDetailsDetails)
  const dispatch = useDispatch()
  const comments = [{}]

  useEffect(() => {
    if (!query) {
      history.push(Routes.MOVIES)
    }

    dispatch(getMovieDetails(query.id))
  }, [])

  if (isLoading || !movieDetails) {
    return <PageSpinner />
  }

  return (
    <Page>
      <div className={styles.component}>
        <MovieDetailsHeading
          coverPoster={movieDetails.medium_cover_image}
          title={movieDetails.title_english}
          youtubeLink={movieDetails.yt_trailer_code}
        />
        <div className={styles.content}>
          <MovieInformation
            movieDetails={movieDetails}
          />
          <MovieComments
            comments={comments}
          />
        </div>
      </div>
    </Page>
  )
}

export default MovieDetails

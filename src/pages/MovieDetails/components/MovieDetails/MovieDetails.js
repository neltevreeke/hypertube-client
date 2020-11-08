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
import MovieComments from '../../../../components/MovieComments/MovieComments'
import { getMovieCommentsIsLoading, getMovieComments } from 'selectors/comment'

const MovieDetails = () => {
  const query = useSelector(getParamQueryString)
  const isMovieDetailsLoading = useSelector(getMovieDetailsIsLoading)
  const isMovieCommentsLoading = useSelector(getMovieCommentsIsLoading)
  const movieDetails = useSelector(getMovieDetailsDetails)
  const dispatch = useDispatch()
  const comments = useSelector(getMovieComments)

  useEffect(() => {
    if (!query) {
      history.push(Routes.MOVIES)
    }

    dispatch(getMovieDetails(query.id))
  }, [])

  if (isMovieDetailsLoading || isMovieCommentsLoading || !movieDetails) {
    return <PageSpinner />
  }

  return (
    <Page>
      <div className={styles.component}>
        <MovieDetailsHeading
          coverPoster={movieDetails.medium_cover_image}
          title={movieDetails.title_english}
          youtubeLink={movieDetails.yt_trailer_code}
          torrents={movieDetails.torrents}
          movieId={movieDetails.id}
        />
        <div className={styles.content}>
          <div className={styles.movieInformation}>
            <p className={styles.sectionTitle}>movie details</p>
            <MovieInformation
              movieDetails={movieDetails}
            />
          </div>
          <div className={styles.recentComments}>
            <p className={styles.sectionTitle}>recent comments</p>
            <MovieComments
              comments={comments}
              movieTitle={movieDetails.title_english}
              showNewCommentForm
            />
          </div>
        </div>
      </div>
    </Page>
  )
}

export default MovieDetails

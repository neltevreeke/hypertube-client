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
import Button from '../../../../components/Button/Button'

const MovieDetails = () => {
  const query = useSelector(getParamQueryString)
  const isLoading = useSelector(getMovieDetailsIsLoading)
  const movieDetails = useSelector(getMovieDetailsDetails)
  const dispatch = useDispatch()

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
        <div className={styles.heading}>
          <img
            src={movieDetails.medium_cover_image}
            className={styles.image}
          />
          <div className={styles.contentContainer}>
            <div className={styles.title}>
              {movieDetails.title_english}
            </div>
            <div>
              <Button variant={Button.VARIANT_DEFAULT}>
                watch trailer
              </Button>
              <Button
                className={styles.btn}
                variant={Button.VARIANT_DEFAULT}
              >
                watch movie
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default MovieDetails

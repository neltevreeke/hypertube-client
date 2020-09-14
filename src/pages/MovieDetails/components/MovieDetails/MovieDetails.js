import React, { useEffect } from 'react'
import styles from './MovieDetails.scss'
import Page from 'components/Page/Page'
import { getParamQueryString } from 'selectors/router'
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../../../../utils/configureStore'
import * as Routes from 'constants/Routes'
import { getMovieDetails } from '../../../../actions/movies'

const MovieDetails = () => {
  const query = useSelector(getParamQueryString)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!query) {
      history.push(Routes.MOVIES)
    }

    dispatch(getMovieDetails(query.id))
  }, [])

  return (
    <Page>
      <div className={styles.component}>
        {query.id}
      </div>
    </Page>
  )
}

export default MovieDetails

import React, { lazy } from 'react'
import MainRoute from 'components/MainRoute/MainRoute'
import * as Routes from 'constants/Routes'

const MovieDetails = lazy(() => import('./components/MovieDetails/MovieDetails'))

export default (
  <MainRoute
    path={Routes.MOVIE_DETAILS}
    component={MovieDetails}
    isProtected
  />
)

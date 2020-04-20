import React, { lazy } from 'react'
import MainRoute from 'components/MainRoute/MainRoute'
import * as Routes from 'constants/Routes'

const MoviesView = lazy(() => import('./components/MoviesView/MoviesView'))

export default (
  <MainRoute
    path={Routes.MOVIES}
    component={MoviesView}
    isProtected
  />
)

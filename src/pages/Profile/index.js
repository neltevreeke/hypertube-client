import React, { lazy } from 'react'
import MainRoute from 'components/MainRoute/MainRoute'
import * as Routes from 'constants/Routes'

const ProfileView = lazy(() => import('./components/ProfileView/ProfileView'))

export default (
  <MainRoute
    path={Routes.PROFILE}
    component={ProfileView}
    isProtected
  />
)

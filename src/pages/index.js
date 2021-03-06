import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ModalProvider } from 'react-modal-hook'
import { TransitionGroup } from 'react-transition-group'
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../utils/configureStore'

import Home from './Home'
import Movies from './Movies'
import MovieDetails from './MovieDetails'
import Profile from './Profile'
import ResetPassword from './ResetPassword'
import NewPassword from './NewPassword'
import PageSpinner from '../components/PageSpinner/PageSpinner'
import AuthCallback from './AuthCallback'

export default (
  <ConnectedRouter history={history}>
    <ModalProvider container={TransitionGroup}>
      <Suspense
        fallback={(
          <PageSpinner />
        )}
      >
        <Switch>
          {Home}
          {Movies}
          {Profile}
          {ResetPassword}
          {NewPassword}
          {MovieDetails}

          {/* Using component here instead of children gives you back the 'location' prop */}
          <Route
            path='/auth/:provider/callback'
            component={AuthCallback}
          />
        </Switch>
      </Suspense>
    </ModalProvider>
  </ConnectedRouter>
)

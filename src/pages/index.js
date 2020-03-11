import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom'
import { ModalProvider } from 'react-modal-hook'
import { TransitionGroup } from 'react-transition-group'
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../utils/configureStore'

import Home from './Home'
import PageSpinner from '../components/PageSpinner/PageSpinner'

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
        </Switch>
      </Suspense>
    </ModalProvider>
  </ConnectedRouter>
)

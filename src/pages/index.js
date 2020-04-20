import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../utils/configureStore'

import Home from './Home'
import Movies from './Movies'
import PageSpinner from '../components/PageSpinner/PageSpinner'

export default (
  <ConnectedRouter history={history}>
    <Suspense
      fallback={(
        <PageSpinner />
      )}
    >
      <Switch>
        {Home}
        {Movies}
      </Switch>
    </Suspense>
  </ConnectedRouter>
)

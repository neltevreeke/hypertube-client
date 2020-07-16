import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import user from './user'
import movie from './movie'

export default (history) => combineReducers({
  router: connectRouter(history),
  user,
  movie
})

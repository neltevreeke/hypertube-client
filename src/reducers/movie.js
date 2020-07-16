import { createReducer } from '../utils/redux'
import * as ActionType from 'constants/ActionType'

const initalState = {
  popularMovies: {
    isLoading: false,
    error: null,
    movies: null
  }
}

export default createReducer(initalState, {
  [ActionType.GET_POPULAR_MOVIES_START]: (state) => {
    return {
      ...state,
      popularMovies: {
        isLoading: true
      }
    }
  },
  [ActionType.GET_POPULAR_MOVIES_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      popularMovies: {
        isLoading: false,
        movies: payload,
        error: null
      }
    }
  },
  [ActionType.GET_POPULAR_MOVIES_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      popularMovies: {
        isLoading: false,
        error
      }
    }
  }
})

import { createReducer } from '../utils/redux'
import * as ActionType from 'constants/ActionType'

const initalState = {
  popularMovies: {
    isLoading: false,
    error: null,
    movies: null
  },
  movieDetails: {
    isLoading: false,
    error: null,
    movieDetails: null
  },
  movieSearch: {
    isLoading: false,
    error: null,
    searchResult: null
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
  },

  [ActionType.GET_MOVIE_DETAILS_START]: (state) => {
    return {
      ...state,
      movieDetails: {
        isLoading: true
      }
    }
  },
  [ActionType.GET_MOVIE_DETAILS_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      movieDetails: {
        isLoading: false,
        details: payload
      }
    }
  },
  [ActionType.GET_MOVIE_DETAILS_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      movieDetails: {
        isLoading: false,
        error
      }
    }
  },

  [ActionType.MOVIE_SEARCH_START]: (state) => {
    return {
      ...state,
      movieSearch: {
        isLoading: true
      }
    }
  },
  [ActionType.MOVIE_SEARCH_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      movieSearch: {
        isLoading: false,
        searchResult: payload
      }
    }
  },
  [ActionType.MOVIE_SEARCH_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      movieSearch: {
        isLoading: false,
        error
      }
    }
  }
})

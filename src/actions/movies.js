import * as moviesApi from 'api/movie.js'
import * as ActionTypes from 'constants/ActionType'
import { getMovieComments } from 'actions/comments'

export const getMovies = () => async dispatch => {
  dispatch({
    type: ActionTypes.GET_POPULAR_MOVIES_START
  })

  try {
    const { movies } = await moviesApi.getMovies()

    dispatch({
      type: ActionTypes.GET_POPULAR_MOVIES_SUCCESS,
      payload: movies
    })
  } catch (e) {
    dispatch({
      type: ActionTypes.GET_POPULAR_MOVIES_ERROR,
      payload: e
    })
  }
}

export const getMovieDetails = (id) => async dispatch => {
  dispatch({
    type: ActionTypes.GET_MOVIE_DETAILS_START
  })

  try {
    const { movieDetails } = await moviesApi.getMovieDetails(id)

    dispatch(getMovieComments(id))

    dispatch({
      type: ActionTypes.GET_MOVIE_DETAILS_SUCCESS,
      payload: movieDetails
    })
  } catch (e) {
    dispatch({
      type: ActionTypes.GET_MOVIE_DETAILS_ERROR,
      payload: e
    })
  }
}

export const searchMovie = (movieTitle) => async dispatch => {
  dispatch({
    type: ActionTypes.MOVIE_SEARCH_START
  })

  try {
    const { searchResults } = await moviesApi.getMovieSearch(movieTitle)

    dispatch({
      type: ActionTypes.MOVIE_SEARCH_SUCCESS,
      payload: searchResults
    })
  } catch (e) {
    dispatch({
      type: ActionTypes.MOVIE_SEARCH_ERROR,
      payload: e
    })
  }
}

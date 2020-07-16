import * as moviesApi from 'api/movie.js'
import * as ActionTypes from 'constants/ActionType'

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

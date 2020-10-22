import * as commentApi from 'api/comment'
import * as ActionType from 'constants/ActionType'

export const placeNewMovieComment = (comment) => async dispatch => {
  dispatch({
    type: ActionType.PLACE_NEW_COMMENT_START
  })

  try {
    const { comments } = await commentApi.postComment(comment)

    dispatch({
      type: ActionType.PLACE_NEW_COMMENT_SUCCESS,
      payload: comments
    })
  } catch (error) {
    dispatch({
      type: ActionType.PLACE_NEW_COMMENT_ERROR,
      payload: error
    })
  }
}

export const getMovieComments = (movieId) => async dispatch => {
  dispatch({
    type: ActionType.GET_COMMENT_START
  })

  try {
    const { comments } = await commentApi.getComments(movieId)

    dispatch({
      type: ActionType.GET_COMMENT_SUCCESS,
      payload: comments
    })
  } catch (error) {
    dispatch({
      type: ActionType.GET_COMMENT_ERROR,
      payload: error
    })
  }
}

export const deleteMovieComment = (deletedComment) => async dispatch => {
  dispatch({
    type: ActionType.DELETE_COMMENT_START
  })

  try {
    const { comments } = await commentApi.deleteComment(deletedComment)

    dispatch({
      type: ActionType.DELETE_COMMENT_SUCCESS,
      payload: comments
    })
  } catch (error) {
    dispatch({
      type: ActionType.DELETE_COMMENT_ERROR,
      payload: error
    })
  }
}

export const editMovieComment = (editedComment) => async dispatch => {
  dispatch({
    type: ActionType.EDIT_COMMENT_START
  })

  try {
    const { comments } = await commentApi.editComment(editedComment)

    dispatch({
      type: ActionType.EDIT_COMMENT_SUCCESS,
      payload: comments
    })
  } catch (error) {
    dispatch({
      type: ActionType.EDIT_COMMENT_ERROR,
      payload: error
    })
  }
}

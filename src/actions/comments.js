import * as commentApi from 'api/comment'
import * as ActionType from 'constants/ActionType'

export const placeNewMovieComment = (comment) => async dispatch => {
  dispatch({
    type: ActionType.PLACE_NEW_COMMENT_START
  })

  try {
    const { comments } = await commentApi.postComment(comment)

    // console.log(comments)

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

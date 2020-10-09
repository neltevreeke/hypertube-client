import { createReducer } from '../utils/redux'
import * as ActionType from 'constants/ActionType'

const initialState = {
  comments: {
    isLoading: false,
    comments: null,
    error: null
  }
}

export default createReducer(initialState, {
  [ActionType.PLACE_NEW_COMMENT_START]: (state) => {
    return {
      ...state,
      comments: {
        isLoading: true
      }
    }
  },
  [ActionType.PLACE_NEW_COMMENT_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      comments: {
        isLoading: false,
        comments: payload
      }
    }
  },
  [ActionType.PLACE_NEW_COMMENT_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      comments: {
        isLoading: false,
        error
      }
    }
  }
})

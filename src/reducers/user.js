import { createReducer } from '../utils/redux'
import * as ActionType from 'constants/ActionType'

const initialState = {
  user: null,
  login: {
    isLoading: false,
    error: null
  }
}

export default createReducer(initialState, {
  [ActionType.LOGIN_START]: (state) => {
    return {
      ...state,
      login: {
        isLoading: true
      }
    }
  },
  [ActionType.LOGIN_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      user: payload,
      login: {
        isLoading: false
      }
    }
  },
  [ActionType.LOGIN_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      login: {
        isLoading: false,
        error
      }
    }
  }
})

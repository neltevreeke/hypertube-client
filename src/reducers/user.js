import { createReducer } from '../utils/redux'
import * as ActionType from 'constants/ActionType'

const initialState = {
  user: null,
  me: {
    isLoading: false,
    error: null,
    isLoaded: false
  },
  login: {
    isLoading: false,
    error: null
  },
  signUp: {
    isLoading: false,
    error: null,
    status: false
  },
  update: {
    isLoading: false,
    error: null
  },
  resetPassword: {
    isLoading: false,
    error: null
  }
}

export default createReducer(initialState, {
  [ActionType.ME_START]: (state) => {
    return {
      ...state,
      me: {
        isLoading: true
      }
    }
  },
  [ActionType.ME_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      user: payload,
      me: {
        isLoading: false,
        isLoaded: true
      }
    }
  },
  [ActionType.ME_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      me: {
        isLoading: false,
        isLoaded: true,
        error
      }
    }
  },

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
  },

  [ActionType.SIGNUP_START]: (state) => {
    return {
      ...state,
      signUp: {
        isLoading: true
      }
    }
  },
  [ActionType.SIGNUP_SUCCESS]: (state) => {
    return {
      ...state,
      signUp: {
        isLoading: false,
        status: true
      }
    }
  },
  [ActionType.SIGNUP_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      signUp: {
        isLoading: false,
        error
      }
    }
  },

  [ActionType.LOGOUT]: (state) => {
    return {
      ...state,
      user: null
    }
  },

  [ActionType.UPDATE_START]: (state) => {
    return {
      ...state,
      update: {
        isLoading: true
      }
    }
  },
  [ActionType.UPDATE_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      user: payload,
      update: {
        isLoading: false
      }
    }
  },
  [ActionType.UPDATE_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      update: {
        isLoading: false,
        error
      }
    }
  },

  [ActionType.RESET_PASSWORD_START]: (state) => {
    return {
      ...state,
      resetPassword: {
        isLoading: true
      }
    }
  },
  [ActionType.RESET_PASSWORD_SUCCESS]: (state) => {
    return {
      ...state,
      resetPassword: {
        isLoading: false
      }
    }
  },
  [ActionType.RESET_PASSWORD_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      resetPassword: {
        isLoading: false,
        error
      }
    }
  }
})

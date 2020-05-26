import {
  clearToken,
  getToken,
  setToken
} from 'utils/token'

import * as ActionType from 'constants/ActionType'
import * as Routes from 'constants/Routes'
import * as usersApi from 'api/user'
import { history } from '../utils/configureStore'

export const me = () => async dispatch => {
  const tokenFromHeader = getToken()

  if (tokenFromHeader) {
    setToken(tokenFromHeader)
  }

  dispatch({
    type: ActionType.ME_START
  })

  try {
    const { user } = await usersApi.me()

    dispatch({
      type: ActionType.ME_SUCCESS,
      payload: user
    })

    history.push(Routes.MOVIES)
  } catch (error) {
    dispatch({
      type: ActionType.ME_ERROR,
      payload: error
    })
  }
}

export const login = ({
  email,
  password
}) => async dispatch => {
  dispatch({
    type: ActionType.LOGIN_START
  })

  try {
    const { user, token } = await usersApi.login({
      email,
      password
    })

    setToken(token)

    dispatch({
      type: ActionType.LOGIN_SUCCESS,
      payload: user
    })

    history.push(Routes.MOVIES)
  } catch (error) {
    dispatch({
      type: ActionType.LOGIN_ERROR,
      payload: error
    })
  }
}

export const signUp = (values) => async dispatch => {
  dispatch({
    type: ActionType.SIGNUP_START
  })

  try {
    const { status } = await usersApi.signUp(values)

    if (status === 200) {
      dispatch({
        type: ActionType.SIGNUP_SUCCESS
      })
    }
  } catch (error) {
    dispatch({
      type: ActionType.SIGNUP_ERROR,
      payload: error
    })
  }
}

export const logout = () => async dispatch => {
  clearToken()

  dispatch({
    type: ActionType.LOGOUT
  })

  history.push(Routes.HOME)
}

export const update = (values) => async dispatch => {
  dispatch({
    type: ActionType.UPDATE_START
  })

  try {
    const { user } = await usersApi.update(values)

    dispatch({
      type: ActionType.UPDATE_SUCCESS,
      payload: user
    })

    history.push(Routes.PROFILE)
  } catch (error) {
    dispatch({
      type: ActionType.UPDATE_ERROR,
      payload: error
    })
  }
}

export const resetPassword = (passwordResetEmail) => async dispatch => {
  dispatch({
    type: ActionType.RESET_PASSWORD_START
  })

  try {
    await usersApi.resetPassword(passwordResetEmail)

    dispatch({
      type: ActionType.RESET_PASSWORD_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: ActionType.RESET_PASSWORD_ERROR,
      payload: error
    })
  }
}

export const newPassword = (token, password) => async dispatch => {
  dispatch({
    type: ActionType.NEW_PASSWORD_START
  })

  try {
    await usersApi.newPassword({
      password,
      token
    })

    dispatch({
      type: ActionType.NEW_PASSWORD_SUCCESS
    })

    history.push(Routes.HOME)
  } catch (error) {
    dispatch({
      type: ActionType.NEW_PASSWORD_ERROR,
      payload: error
    })
  }
}

import {
  // getToken,
  setToken
  // clearToken
} from 'utils/token'

import * as ActionType from 'constants/ActionType'
import * as Routes from 'constants/Routes'
import * as usersApi from 'api/user'

export const me = () => async dispatch => {
  dispatch({
    type: ActionType.ME_START
  })

  try {
    const { user } = await usersApi.me()

    dispatch({
      type: ActionType.ME_SUCCESS,
      payload: user
    })
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

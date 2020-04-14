import {
  // getToken,
  setToken
  // clearToken
} from 'utils/token'

import * as ActionType from 'constants/ActionType'
import * as Routes from 'constants/Routes'
import * as usersApi from 'api/user'

export const facebookLogin = () => async dispatch => {
  dispatch({
    type: ActionType.LOGIN_START
  })

  try {
    // const user = usersApi.facebookLogin()

    // console.log(user)

  } catch (error) {
    dispatch({
      type: ActionType.LOGIN_ERROR,
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

    history.push(Routes.BROWSE)
  } catch (error) {
    dispatch({
      type: ActionType.LOGIN_ERROR,
      payload: error
    })
  }
}

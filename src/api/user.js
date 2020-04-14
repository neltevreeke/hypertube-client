import request from 'utils/request'

export const login = (loginValues) => {
  return request('login', {
    method: 'POST',
    body: loginValues
  })
}

export const facebookLogin = () => {
  return request('auth/facebook', {
    method: 'GET'
  })
}

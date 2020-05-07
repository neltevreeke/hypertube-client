import request from 'utils/request'
import qs from 'qs'

export const login = (loginValues) => {
  return request('login', {
    method: 'POST',
    body: loginValues
  })
}

export const me = () => {
  return request('me', {
    method: 'GET'
  })
}

export const signUp = (signUpValues) => {
  return request('signup', {
    method: 'POST',
    body: signUpValues
  })
}

export const update = (values) => {
  return request('update', {
    method: 'POST',
    body: values
  })
}

export const authCallback = (provider, params) => {
  return request(`auth/${provider}/callback?${qs.stringify(params)}`, {
    method: 'GET'
  })
}

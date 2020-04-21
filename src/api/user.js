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

export const authCallback = (provider, params) => {
  return request(`auth/${provider}/callback?${qs.stringify(params)}`, {
    method: 'get'
  })
}

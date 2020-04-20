import request from 'utils/request'

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

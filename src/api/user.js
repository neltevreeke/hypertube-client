import request from 'utils/request'

export const login = (loginValues) => {
  return request('/login', {
    method: 'POST',
    body: loginValues
  })
}

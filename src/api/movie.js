import request from 'utils/request'

export const getMovies = () => {
  return request('movies', {
    method: 'GET'
  })
}

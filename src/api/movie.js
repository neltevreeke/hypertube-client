import request from 'utils/request'

export const getMovies = () => {
  return request('movies', {
    method: 'GET'
  })
}

export const getMovieDetails = (id) => {
  return request(`movie-details/${id}`, {
    method: 'get'
  })
}

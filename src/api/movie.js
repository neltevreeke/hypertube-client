import request from 'utils/request'

export const getMovies = () => {
  return request('movies', {
    method: 'GET'
  })
}

export const getMovieDetails = (id) => {
  return request(`movie-details/${id}`, {
    method: 'GET'
  })
}

export const getMovieSearch = (movieTitle) => {
  return request(`search-movie/${movieTitle}`, {
    method: 'GET'
  })
}

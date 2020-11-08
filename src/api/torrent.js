import request from '../utils/request'

export const getTorrentStream = (hash, id) => {
  return request(`download/${hash}/${id}`, {
    method: 'GET'
  })
}

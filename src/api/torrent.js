import request from '../utils/request'

export const getTorrentStream = (hash) => {
  return request(`download/${hash}`, {
    method: 'GET'
  })
}

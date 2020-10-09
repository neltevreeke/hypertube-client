import request from 'utils/request'

export const postComment = (comment) => {
  return request('comment', {
    method: 'POST',
    body: comment
  })
}

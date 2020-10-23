import request from 'utils/request'

export const getUserComments = (userId) => {
  return request(`comment/user/${userId}`, {
    method: 'GET'
  })
}

export const postComment = (comment) => {
  return request('comment', {
    method: 'POST',
    body: comment
  })
}

export const getComments = (movieId) => {
  return request(`comment/${movieId}`, {
    method: 'GET'
  })
}

export const deleteComment = (deletedComment) => {
  const {
    movieId,
    commentId
  } = deletedComment

  return request('comment', {
    method: 'DELETE',
    body: {
      movieId,
      commentId
    }
  })
}

export const editComment = (editedComment) => {
  const {
    commentId,
    commentContent,
    movieId
  } = editedComment

  return request(`comment/${commentId}`, {
    method: 'PUT',
    body: {
      movieId,
      commentContent
    }
  })
}

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
  let url

  const {
    movieId,
    commentId,
    userId
  } = deletedComment

  if (!userId) {
    url = `comment/${commentId}`
  } else {
    url = `comment/${commentId}/${userId}`
  }

  return request(url, {
    method: 'DELETE',
    body: {
      movieId,
      commentId
    }
  })
}

export const editComment = (editedComment) => {
  let url

  const {
    commentId,
    commentContent,
    movieId,
    userId
  } = editedComment

  if (!userId) {
    url = `comment/${commentId}`
  } else {
    url = `comment/${commentId}/${userId}`
  }

  return request(url, {
    method: 'PUT',
    body: {
      movieId,
      commentContent
    }
  })
}

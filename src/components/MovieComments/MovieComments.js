import React, { useState } from 'react'
import styles from './MovieComments.scss'
import NewCommentForm from '../../pages/MovieDetails/components/NewCommentForm/NewCommentForm'
import { useDispatch, useSelector } from 'react-redux'
import { getParamQueryString, getRoute } from 'selectors/router'
import { getMovieCommentsIsLoading } from 'selectors/comment'
import { deleteMovieComment, editMovieComment, placeNewMovieComment } from 'actions/comments'
import CommentBubble from '../CommentBubble/CommentBubble'
import { getUser } from '../../selectors/user'
import * as Routes from 'constants/Routes'

const MovieComments = ({
  comments,
  movieTitle,
  showNewCommentForm = false
}) => {
  const dispatch = useDispatch()
  const query = useSelector(getParamQueryString)
  const isCommentsLoading = useSelector(getMovieCommentsIsLoading)
  const [isEditing, setIsEditing] = useState(null)
  const user = useSelector(getUser)
  const route = useSelector(getRoute)

  const handleNewCommentFormSubmit = ({ commentContent }) => {
    dispatch(placeNewMovieComment({
      movieId: query.id,
      content: commentContent,
      movieTitle
    }))
  }

  const handleDeleteClick = (comment) => () => {
    dispatch(deleteMovieComment({
      commentId: comment._id,
      movieId: comment.movieId
    }))
  }

  const handleEditOnClick = (commentId) => () => {
    if (!isEditing) {
      setIsEditing(commentId)
    } else {
      setIsEditing(null)
    }
  }

  const handleEditCommentFormSubmit = (comment) => ({ commentContent }) => {
    const editedComment = {
      commentId: comment._id,
      movieId: comment.movieId,
      commentContent: commentContent
    }

    if (route === Routes.PROFILE) {
      editedComment.userId = user._id
    }

    dispatch(editMovieComment(editedComment))
  }

  return (
    <div className={styles.component}>
      {comments && comments.length > 0 ? comments.map((comment, index) => {
        return <CommentBubble
          key={index}
          comment={comment}
          onEdit={handleEditOnClick(comment._id)}
          isEditing={isEditing}
          onDelete={handleDeleteClick(comment)}
          handleEditFormSubmit={handleEditCommentFormSubmit(comment)}
        />
      }) : (
        <p>This movie does not have any comments yet...</p>
      )}
      {showNewCommentForm &&
        <NewCommentForm
          onSubmit={handleNewCommentFormSubmit}
          isSubmitting={isCommentsLoading}
        />}
    </div>
  )
}

export default MovieComments

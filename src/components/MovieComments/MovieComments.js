import React, { useState } from 'react'
import styles from './MovieComments.scss'
import NewCommentForm from '../../pages/MovieDetails/components/NewCommentForm/NewCommentForm'
import { useDispatch, useSelector } from 'react-redux'
import { getParamQueryString } from 'selectors/router'
import { getMovieCommentsIsLoading } from 'selectors/comment'
import { deleteMovieComment, editMovieComment, placeNewMovieComment } from 'actions/comments'
import CommentBubble from '../CommentBubble/CommentBubble'

const MovieComments = ({
  comments,
  movieTitle
}) => {
  const dispatch = useDispatch()
  const query = useSelector(getParamQueryString)
  const isCommentsLoading = useSelector(getMovieCommentsIsLoading)
  const [isEditing, setIsEditing] = useState(null)

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
    dispatch(editMovieComment({
      commentId: comment._id,
      movieId: comment.movieId,
      commentContent: commentContent
    }))
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
      <NewCommentForm
        onSubmit={handleNewCommentFormSubmit}
        isSubmitting={isCommentsLoading}
      />
    </div>
  )
}

export default MovieComments

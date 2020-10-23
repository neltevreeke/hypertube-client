import React, { useState } from 'react'
import styles from './MovieComments.scss'
import NewCommentForm from '../../pages/MovieDetails/components/NewCommentForm/NewCommentForm'
import { useDispatch, useSelector } from 'react-redux'
import { getParamQueryString } from 'selectors/router'
import { getMovieCommentsIsLoading } from 'selectors/comment'
import { deleteMovieComment, placeNewMovieComment } from 'actions/comments'
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

  const handleEditClick = (commentId) => () => {
    if (!isEditing) {
      setIsEditing(commentId)
    } else {
      setIsEditing(null)
    }
  }

  return (
    <div className={styles.component}>
      <div className={styles.sectionTitle}>
        comments
      </div>
      {comments && comments.length > 0 ? comments.map((comment, index) => {
        return <CommentBubble
          key={index}
          comment={comment}
          onEdit={handleEditClick(comment._id)}
          isEditing={isEditing}
          onDelete={handleDeleteClick(comment)}
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

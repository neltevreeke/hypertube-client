import React from 'react'
import styles from './MovieComments.scss'
import NewCommentForm from '../NewCommentForm/NewCommentForm'
import { useDispatch, useSelector } from 'react-redux'
import { getParamQueryString } from 'selectors/router'
import { getMovieCommentsIsLoading } from 'selectors/comment'
import { placeNewMovieComment } from 'actions/comments'
import CommentBubble from '../CommentBubble/CommentBubble'

const MovieComments = ({
  comments
}) => {
  const dispatch = useDispatch()
  const query = useSelector(getParamQueryString)
  const isCommentsLoading = useSelector(getMovieCommentsIsLoading)

  const handleNewCommentFormSubmit = ({ commentContent }) => {
    dispatch(placeNewMovieComment({
      movieId: query.id,
      content: commentContent
    }))
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

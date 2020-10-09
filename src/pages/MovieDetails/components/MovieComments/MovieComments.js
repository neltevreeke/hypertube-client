import React from 'react'
import styles from './MovieComments.scss'
import NewCommentForm from '../NewCommentForm/NewCommentForm'
import { useDispatch, useSelector } from 'react-redux'
import { getParamQueryString } from 'selectors/router'
import { placeNewMovieComment } from 'actions/comments'

const MovieComments = ({
  comments
}) => {
  const dispatch = useDispatch()
  const query = useSelector(getParamQueryString)

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
      <NewCommentForm
        onSubmit={handleNewCommentFormSubmit}
        // isSubmitting={true}
      />
    </div>
  )
}

export default MovieComments

import React from 'react'
import styles from './MovieComments.scss'
import NewCommentForm from '../NewCommentForm/NewCommentForm'
import { useDispatch, useSelector } from 'react-redux'
import { getParamQueryString } from 'selectors/router'
import { getCommentsIsLoading } from 'selectors/comment'
import { placeNewMovieComment } from 'actions/comments'
import Avatar from '../../../../components/Avatar/Avatar'
import moment from 'moment'

const MovieComments = ({
  comments
}) => {
  const mDate = moment.utc(comments.createdOn)
  const dispatch = useDispatch()
  const query = useSelector(getParamQueryString)
  const isCommentsLoading = useSelector(getCommentsIsLoading)

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
      {comments && comments.map((comment, index) => {
        return (
          <div
            className={styles.wrapper}
            key={index}
          >
            <div className={styles.heading}>
              <Avatar
                className={styles.avatar}
                user={comment.userId}
                size={Avatar.SIZE_S}
              />
              <p>{comment.userId.displayName}</p>
              <p className={styles.date}>{mDate.format('dddd, MMMM Do YYYY')}</p>
            </div>
            <div className={styles.content}>
              {comment.content}
            </div>
          </div>
        )
      })}
      <NewCommentForm
        onSubmit={handleNewCommentFormSubmit}
        isSubmitting={isCommentsLoading}
      />
    </div>
  )
}

export default MovieComments

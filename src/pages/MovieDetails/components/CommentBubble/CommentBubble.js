import React from 'react'
import styles from './CommentBubble.scss'
import Avatar from '../../../../components/Avatar/Avatar'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../../../selectors/user'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { deleteMovieComment } from 'actions/comments'

const CommentBubble = ({
  comment
}) => {
  const user = useSelector(getUser)
  const mDate = moment.utc(comment.createdOn)
  const isOwner = comment.userId._id === user._id
  const dispatch = useDispatch()

  const handleDeleteClick = (commentId, movieId) => () => {
    dispatch(deleteMovieComment({
      commentId,
      movieId
    }))
  }

  return (
    <div className={styles.component}>
      <div className={styles.heading}>
        <Avatar
          className={styles.avatar}
          user={comment.userId}
          size={Avatar.SIZE_S}
        />
        <p>{comment.userId.displayName}</p>
        <p className={styles.date}>
          {mDate.format('dddd, MMMM Do YYYY')}
        </p>
        {isOwner && (
          <div>
            <FontAwesomeIcon
              className={styles.controlIcon}
              icon='pen'
            />
            <FontAwesomeIcon
              className={styles.controlIcon}
              icon='times-circle'
              onClick={handleDeleteClick(comment._id, comment.movieId)}
            />
          </div>
        )}
      </div>
      <div className={styles.content}>
        {comment.content}
      </div>
    </div>
  )
}

export default CommentBubble

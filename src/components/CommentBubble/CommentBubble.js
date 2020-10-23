import React from 'react'
import styles from './CommentBubble.scss'
import Avatar from '../Avatar/Avatar'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../selectors/user'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { editMovieComment } from 'actions/comments'
import EditCommentForm from '../EditCommentForm/EditCommentForm'

const getInitialValuesFromComment = (comment) => {
  return {
    commentContent: comment.content
  }
}

const CommentBubble = ({
  comment,
  onDelete,
  onEdit,
  isEditing
}) => {
  const user = useSelector(getUser)
  const mDate = moment.utc(comment.createdOn)
  const isOwner = comment.userId._id === user._id
  const dispatch = useDispatch()
  const initialValues = getInitialValuesFromComment(comment)

  const handleEditCommentFormSubmit = ({ commentContent }) => {
    dispatch(editMovieComment({
      commentId: comment._id,
      movieId: comment.movieId,
      commentContent: commentContent
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
              onClick={onEdit}
            />
            <FontAwesomeIcon
              className={styles.controlIcon}
              icon='times-circle'
              onClick={onDelete}
            />
          </div>
        )}
      </div>
      <div className={styles.content}>
        {isEditing === comment._id ? (
          <EditCommentForm
            onSubmit={handleEditCommentFormSubmit}
            initialValues={initialValues}
          />
        ) : (
          <div>
            {comment.content}
          </div>
        )}
      </div>
    </div>
  )
}

export default CommentBubble

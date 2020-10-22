import React, { useState } from 'react'
import styles from './CommentBubble.scss'
import Avatar from '../../../../components/Avatar/Avatar'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../../../selectors/user'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { deleteMovieComment, editMovieComment } from 'actions/comments'
import EditCommentForm from '../EditCommentForm/EditCommentForm'

const CommentBubble = ({
  comment
}) => {
  const user = useSelector(getUser)
  const mDate = moment.utc(comment.createdOn)
  const isOwner = comment.userId._id === user._id
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)

  const handleDeleteClick = (movieId) => () => {
    dispatch(deleteMovieComment({
      commentId: comment._id,
      movieId
    }))
  }

  const handleEditClick = () => {
    if (!isEditing) {
      setIsEditing(true)
    } else {
      setIsEditing(false)
    }
  }

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
              onClick={handleEditClick}
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
        {isEditing ? (
          <EditCommentForm
            onSubmit={handleEditCommentFormSubmit}
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

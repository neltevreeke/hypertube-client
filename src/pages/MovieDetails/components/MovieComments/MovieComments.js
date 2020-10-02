import React from 'react'
import styles from './MovieComments.scss'

const MovieComments = ({
  comments
}) => {
  return (
    <div className={styles.component}>
      <div className={styles.sectionTitle}>
        comments
      </div>
      {comments.length > 0 ? (
        <div>meerdere comments</div>
      ) : (
        <div>this movie has no comments yet</div>
      )}
    </div>
  )
}

export default MovieComments

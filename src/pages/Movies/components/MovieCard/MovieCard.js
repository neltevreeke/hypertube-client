import React from 'react'
import styles from './MovieCard.scss'

const MovieCard = ({
  movie
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${movie.medium_cover_image})` }}
      className={styles.component}
    >
      {movie.title}
    </div>
  )
}

export default MovieCard

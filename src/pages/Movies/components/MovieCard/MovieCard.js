import React from 'react'
import styles from './MovieCard.scss'
import Button from 'components/Button/Button'

const MovieCard = ({
  movie
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${movie.medium_cover_image})` }}
      className={styles.component}
    >
      <div className={styles.content}>
        <div className={styles.title}>
          {movie.title}
        </div>
        <div className={styles.year}>
          {movie.year}
        </div>
        <div className={styles.rating}>
          <p>rating</p>
          {movie.rating}/10
        </div>
        <Button
          variant={Button.VARIANT_DEFAULT}
          className={styles.btn}
        >
          movie details
        </Button>
      </div>
    </div>
  )
}

export default MovieCard

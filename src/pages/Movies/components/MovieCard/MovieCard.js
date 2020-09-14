import React from 'react'
import styles from './MovieCard.scss'
import Button from 'components/Button/Button'
import { history } from 'utils/configureStore'
import * as Routes from 'constants/Routes'

const MovieCard = ({
  movie
}) => {
  const handleMovieDetailsBtnOnClick = id => () => {
    history.push({
      pathname: Routes.MOVIE_DETAILS,
      search: `?id=${id}`
    })
  }

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
          onClick={handleMovieDetailsBtnOnClick(movie.id)}
        >
          movie details
        </Button>
      </div>
    </div>
  )
}

export default MovieCard

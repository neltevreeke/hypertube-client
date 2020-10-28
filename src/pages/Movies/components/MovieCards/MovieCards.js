import React from 'react'
import styles from './MovieCards.scss'
import MovieCard from '../MovieCard/MovieCard'

const MovieCards = ({
  movies
}) => {
  return (
    <div className={styles.component}>
      {movies && movies.map((movie, index) => {
        return <MovieCard
          movie={movie}
          key={index}
        />
      })}
    </div>
  )
}

export default MovieCards

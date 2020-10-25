import React from 'react'
import styles from './MovieInformation.scss'

const MovieInformation = ({
  movieDetails
}) => {
  const timeConvert = (number) => {
    const hours = (number / 60)
    const rhours = Math.floor(hours)
    const minutes = (hours - rhours) * 60
    const rminutes = Math.round(minutes)

    return rhours + ' hour(s) and ' + rminutes + ' minute(s)'
  }

  return (
    <div className={styles.component}>
      <div className={styles.information}>
        <div className={styles.listBlock}>
          <p className={styles.listTitle}>genre:</p>
          {movieDetails.genres.map((genre, index) => {
            return (
              <p
                className={styles.listItem}
                key={index}
              >{genre}
              </p>
            )
          })}
        </div>
        <div className={styles.listBlock}>
          <p className={styles.listTitle}>runtime:</p>
          {timeConvert(movieDetails.runtime)}
        </div>
        <div className={styles.listBlock}>
          <p className={styles.listTitle}>stars:</p>
          {movieDetails.cast && movieDetails.cast.map((member, index) => {
            return (
              <p
                className={styles.listItem}
                key={index}
              >{member.name}
              </p>
            )
          })}
        </div>
        <div className={styles.listBlock}>
          <p className={styles.listTitle}>release year:</p>
          <p className={styles.listItem}>{movieDetails.year}</p>
        </div>
        <div className={styles.listBlock}>
          <p className={styles.listTitle}>IMDB rating:</p>
          <p className={styles.listItem}>{movieDetails.rating}</p>
        </div>
        <div className={styles.listBlock}>
          <p className={styles.listTitle}>synopsis:</p>
          <p className={styles.listItem}>{movieDetails.description_full}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieInformation

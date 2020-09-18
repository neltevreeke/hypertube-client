import React from 'react'
import styles from './MovieDetailsHeading.scss'
import Button from '../../../../components/Button/Button'

const MovieDetailsHeading = ({
  coverPoster,
  title,
  youtubeLink
}) => {
  const handleTrailerOnClick = link => () => {
    window.open(`https://youtube.com/watch?v=${link}`, '_blank')
  }

  return (
    <div className={styles.component}>
      <img
        src={coverPoster}
        className={styles.image}
      />
      <div className={styles.contentContainer}>
        <div className={styles.title}>
          {title}
        </div>
        <div>
          <Button
            variant={Button.VARIANT_DEFAULT}
            onClick={handleTrailerOnClick(youtubeLink)}
          >
            watch trailer
          </Button>
          <Button
            className={styles.btn}
            variant={Button.VARIANT_DEFAULT}
          >
            watch movie
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsHeading

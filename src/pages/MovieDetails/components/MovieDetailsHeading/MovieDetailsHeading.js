import React from 'react'
import styles from './MovieDetailsHeading.scss'
import Button from 'components/Button/Button'
import { useModal } from 'react-modal-hook'
import ModalDownloadMovie from 'components/ModalDownloadMovie/ModalDownloadMovie'

const MovieDetailsHeading = ({
  coverPoster,
  title,
  youtubeLink,
  torrents
}) => {
  const handleTrailerOnClick = link => () => {
    window.open(`https://youtube.com/watch?v=${link}`, '_blank')
  }

  const [showModalMovieDownload, hideModalMovieDownload] = useModal(({
    in: isOpen,
    onExited
  }) => {
    return (
      <ModalDownloadMovie
        isOpen={isOpen}
        onExited={onExited}
        hideModal={hideModalMovieDownload}
        list={torrents}
      />
    )
  })

  const handleWatchMovieOnClick = () => {
    showModalMovieDownload()
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
            onClick={handleWatchMovieOnClick}
          >
            watch movie
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsHeading

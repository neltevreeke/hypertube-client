import React from 'react'
import styles from './SocialMedia.scss'
import Button from 'components/Button/Button'

const SocialMedia = ({
  handleFacebookOnClick,
  handleLinkedInOnClick,
  handle42OnClick
}) => {
  return (
    <div className={styles.component}>
      <Button
        className={styles.facebook}
        onClick={handleFacebookOnClick}
      >
        facebook
      </Button>
      <Button
        className={styles.linkedin}
        onClick={handleLinkedInOnClick}
      >
        LinkedIn
      </Button>
      <Button
        className={styles.fortytwo}
        onClick={handle42OnClick}
      >
        42
      </Button>
    </div>
  )
}

export default SocialMedia

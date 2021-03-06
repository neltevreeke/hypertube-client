import React from 'react'
import styles from './SocialMedia.scss'
import Button from 'components/Button/Button'

const SocialMedia = () => {
  return (
    <div className={styles.component}>
      <a href='http://localhost:4000/auth/facebook'>
        <Button className={styles.facebook}>
          facebook
        </Button>
      </a>
      <a href='http://localhost:4000/auth/linkedin'>
        <Button className={styles.linkedin}>
          linkedin
        </Button>
      </a>
      <a href='http://localhost:4000/auth/fortytwo'>
        <Button className={styles.fortytwo}>
          42
        </Button>
      </a>
    </div>
  )
}

export default SocialMedia

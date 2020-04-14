import React from 'react'
import styles from './SocialMedia.scss'
import Button from 'components/Button/Button'
// import {Link} from "react-router-dom";

const SocialMedia = ({
  // handleFacebookOnClick,
  handleLinkedInOnClick,
  handle42OnClick
}) => {
  return (
    <div className={styles.component}>
      <a href='http://localhost:4000/auth/facebook'>
        <Button
          className={styles.facebook}
          // onClick={handleFacebookOnClick}
        >
          facebook
        </Button>
      </a>
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

import React from 'react'
import styles from './Seperator.scss'

const Seperator = () => {
  return (
    <div className={styles.component}>
      <div className={styles.left}>
        <hr noshade='true' />
      </div>
      <p>or</p>
      <div className={styles.right}>
        <hr noshade='true' />
      </div>
    </div>
  )
}

export default Seperator

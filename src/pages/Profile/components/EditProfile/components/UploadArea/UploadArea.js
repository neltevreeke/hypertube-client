import React from 'react'
import styles from './UploadArea.scss'
import shortid from 'shortid'

const UploadArea = ({ onChange, children }) => {
  const id = shortid.generate()

  const handleOnChange = (event) => {
    onChange(event)

    event.target.value = null
  }

  return (
    <div className={styles.component}>
      <input
        onChange={handleOnChange}
        className={styles.input}
        type='file'
        accept='image/*'
        id={id}
      />
      <label
        className={styles.label}
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  )
}

export default UploadArea

import React from 'react'
import styles from './MoviesView.scss'
import Page from '../../../../components/Page/Page'

const MoviesView = () => {
  return (
    <Page>
      <div className={styles.component}>
        Movies page, protected.
      </div>
    </Page>
  )
}

export default MoviesView

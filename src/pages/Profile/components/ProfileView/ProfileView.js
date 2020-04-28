import React from 'react'
import styles from './ProfileView.scss'
import Page from '../../../../components/Page/Page'

const ProfileView = () => {
  return (
    <Page>
      <div className={styles.component}>
        Profile page, protected.
      </div>
    </Page>
  )
}

export default ProfileView

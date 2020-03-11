import React from 'react'
import styles from './HomeView.scss'
import Page from 'components/Page/Page'
import LoginForm from './components/LoginForm/LoginForm'

const HomeView = () => {
  return (
    <Page>
      <div className={styles.component}>
        <LoginForm />
      </div>
    </Page>
  )
}

export default HomeView

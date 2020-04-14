import React from 'react'
import styles from './HomeView.scss'

import Page from 'components/Page/Page'
import LoginForm from './components/LoginForm/LoginForm'
import Seperator from 'components/Seperator/Seperator'
import SocialMedia from './components/SocialMedia/SocialMedia'

import {
  useDispatch,
  useSelector
} from 'react-redux'

import {
  getIsLogInFormLoading
} from 'selectors/user'

import {
  login
  // facebookLogin
} from 'actions/user'

const HomeView = () => {
  const dispatch = useDispatch()
  const isLogInFormLoading = useSelector(getIsLogInFormLoading)

  // const handleFacebx

  const handleLinkedInOnClick = () => {
    // eslint-disable-next-line no-console
    console.log('LinkedIn clicked')
  }

  const handle42OnClick = () => {
    // eslint-disable-next-line no-console
    console.log('42 clicked')
  }

  const handleLogInFormSubmit = (values) => {
    dispatch(login(values))
  }

  return (
    <Page>
      <div className={styles.component}>
        <div className={styles.centerContent}>
          <LoginForm
            onSubmit={handleLogInFormSubmit}
            isSubmitting={isLogInFormLoading}
          />
          <Seperator />
          <SocialMedia
            // handleFacebookOnClick={handleFacebookOnClick}
            handleLinkedInOnClick={handleLinkedInOnClick}
            handle42OnClick={handle42OnClick}
          />
        </div>
      </div>
    </Page>
  )
}

export default HomeView

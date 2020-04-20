import React from 'react'
import styles from './HomeView.scss'

import Page from 'components/Page/Page'
import LoginForm from './components/LoginForm/LoginForm'
import Seperator from 'components/Seperator/Seperator'
import SocialMedia from './components/SocialMedia/SocialMedia'
import { Redirect } from 'react-router-dom'
import * as Routes from 'constants/Routes'

import {
  useDispatch,
  useSelector
} from 'react-redux'

import { getIsLogInFormLoading, getIsLoggedIn } from 'selectors/user'
import { login } from 'actions/user'

const HomeView = () => {
  const dispatch = useDispatch()
  const isLogInFormLoading = useSelector(getIsLogInFormLoading)
  const isLoggedIn = useSelector(getIsLoggedIn)

  if (isLoggedIn) {
    return (
      <Redirect
        to={Routes.MOVIES}
      />
    )
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
          <SocialMedia />
        </div>
      </div>
    </Page>
  )
}

export default HomeView

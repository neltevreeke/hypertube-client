import React, { useState } from 'react'
import styles from './HomeView.scss'

import Page from 'components/Page/Page'
import LoginForm from './components/LoginForm/LoginForm'
import SignUpForm from './components/SignUpForm/SignUpForm'
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
  const [showSignInForm, setShowSignInForm] = useState(true)
  const isLogInFormLoading = useSelector(getIsLogInFormLoading)
  const isSignUpFormLoading = useSelector(getIsLogInFormLoading)
  const isLoggedIn = useSelector(getIsLoggedIn)

  if (isLoggedIn) {
    return (
      <Redirect
        to={Routes.MOVIES}
      />
    )
  }

  const handleBtnSignInClick = () => {
    if (!showSignInForm) {
      setShowSignInForm(true)
    }
  }

  const handleBtnSignUpClick = () => {
    if (showSignInForm) {
      setShowSignInForm(false)
    }
  }

  const handleLogInFormSubmit = (values) => {
    dispatch(login(values))
  }

  const handleSignUpFormSubmit = (values) => {
    values.displayName = values.firstName + ' ' + values.lastName

    delete values.firstName
    delete values.lastName

    // dispatch(signup(values))
  }

  return (
    <Page>
      <div className={styles.component}>
        <div className={styles.centerContent}>
          <div className={styles.formControls}>
            <div
              className={styles.menuBtn}
              onClick={handleBtnSignInClick}
            >
              sign in
            </div>
            <div
              className={styles.menuBtn}
              onClick={handleBtnSignUpClick}
            >
              sign up
            </div>
          </div>
          {showSignInForm
            ? <LoginForm
              onSubmit={handleLogInFormSubmit}
              isSubmitting={isLogInFormLoading}
            />
            : <SignUpForm
              onSubmit={handleSignUpFormSubmit}
              isSubmitting={isSignUpFormLoading}
            />}
          <Seperator />
          <SocialMedia />
        </div>
      </div>
    </Page>
  )
}

export default HomeView

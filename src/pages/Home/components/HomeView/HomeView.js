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

import {
  getIsLogInFormLoading,
  getIsLoggedIn,
  getIsSignUpFormLoading,
  getSignUpError,
  getLogInError
} from 'selectors/user'

import { login, signUp } from 'actions/user'
import Button from '../../../../components/Button/Button'
import { history } from '../../../../utils/configureStore'

const getSignUpErrorMessage = (statusCode) => {
  if (statusCode === 409) {
    return 'Email already exists'
  }
}

const getLogInErrorMessage = (statusCode) => {
  if (statusCode === 404) {
    return 'Wrong user credentials'
  }
}

const HomeView = () => {
  const dispatch = useDispatch()
  const [showSignInForm, setShowSignInForm] = useState(true)
  const isLogInFormLoading = useSelector(getIsLogInFormLoading)
  const isSignUpFormLoading = useSelector(getIsSignUpFormLoading)
  const isLoggedIn = useSelector(getIsLoggedIn)
  const signUpError = useSelector(getSignUpError)
  const loginError = useSelector(getLogInError)

  if (isLoggedIn) {
    return (
      <Redirect
        to={Routes.MOVIES}
      />
    )
  }

  if (signUpError) {
    signUpError.message = getSignUpErrorMessage(signUpError.statusCode)
  }

  if (loginError) {
    loginError.message = getLogInErrorMessage(loginError.statusCode)
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

    dispatch(signUp({
      username: values.username,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.emailSignUp,
      password: values.passwordSignUp,
      displayName: values.displayName
    }))
  }

  const resetPasswordBtnOnClick = () => {
    history.push(Routes.RESET_PASSWORD)
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
              error={loginError}
            />
            : <SignUpForm
              onSubmit={handleSignUpFormSubmit}
              isSubmitting={isSignUpFormLoading}
              error={signUpError}
            />}
          <Seperator />
          <SocialMedia />
          <Seperator />
          <Button
            variant={Button.VARIANT_DEFAULT}
            onClick={resetPasswordBtnOnClick}
            className={styles.resetPasswordBtn}
          >
            reset password
          </Button>
        </div>
      </div>
    </Page>
  )
}

export default HomeView

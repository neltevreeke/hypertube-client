import React from 'react'
import styles from './ResetPasswordView.scss'
import Page from 'components/Page/Page'
import FormResetPassword from '../FormResetPassword/FormResetPassword'
import { useDispatch } from 'react-redux'
import { resetPassword } from 'actions/user'

const ResetPasswordView = () => {
  const dispatch = useDispatch()

  const handleResetPasswordFormSubmit = ({ passwordResetEmail }, { resetForm }) => {
    dispatch(resetPassword(passwordResetEmail))

    resetForm()
  }

  return (
    <Page>
      <div className={styles.component}>
        <FormResetPassword
          onSubmit={handleResetPasswordFormSubmit}
        />
      </div>
    </Page>
  )
}

export default ResetPasswordView

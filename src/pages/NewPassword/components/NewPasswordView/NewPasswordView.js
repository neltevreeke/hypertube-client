import React, { useEffect } from 'react'
import styles from './NewPasswordView.scss'
import Page from 'components/Page/Page'
import { useDispatch, useSelector } from 'react-redux'
import { getParamQueryString } from 'selectors/router'
import { history } from '../../../../utils/configureStore'
import * as Routes from 'constants/Routes'
import NewPasswordForm from '../NewPasswordForm/NewPasswordForm'
import { newPassword } from 'actions/user'

const NewPasswordView = () => {
  const dispatch = useDispatch()
  const paramQueryString = useSelector(getParamQueryString)

  useEffect(() => {
    if (!paramQueryString.token) {
      history.push(Routes.HOME)
    }
  }, [])

  const handleNewPasswordFormSubmit = ({ password }) => {
    dispatch(newPassword(paramQueryString.token, password))
  }

  return (
    <Page>
      <div className={styles.component}>
        <NewPasswordForm
          onSubmit={handleNewPasswordFormSubmit}
        />
      </div>
    </Page>
  )
}

export default NewPasswordView

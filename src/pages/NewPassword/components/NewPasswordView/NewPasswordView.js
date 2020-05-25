import React, { useEffect } from 'react'
import styles from './NewPasswordView.scss'
import Page from 'components/Page/Page'
import { useSelector } from 'react-redux'
import { getParamQueryString } from 'selectors/router'
import { history } from '../../../../utils/configureStore'
import * as Routes from 'constants/Routes'
import NewPasswordForm from '../NewPasswordForm/NewPasswordForm'

const NewPasswordView = () => {
  // const dispatch = useDispatch()
  const paramQueryString = useSelector(getParamQueryString)

  useEffect(() => {
    if (!paramQueryString.token) {
      history.push(Routes.HOME)
    }
  }, [])

  const handleNewPasswordFormSubmit = ({ password }) => {
    // todo: dispatch action to post password to route including getParamQueryString.token
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

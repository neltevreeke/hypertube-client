import React from 'react'
import styles from './ProfileView.scss'
import Page from '../../../../components/Page/Page'
import * as Routes from 'constants/Routes'
import EditProfile from '../EditProfile/EditProfile'
import { Switch, Route } from 'react-router-dom'
import UserProfile from '../UserProfile/UserProfile'

const ProfileView = () => {
  return (
    <Page>
      <div className={styles.component}>
        <div>
          <Switch>
            <Route
              path={Routes.PROFILE}
              exact
              component={UserProfile}
            />
            <Route
              path={Routes.PROFILE_EDIT}
              component={EditProfile}
            />
          </Switch>
        </div>
      </div>
    </Page>
  )
}

export default ProfileView

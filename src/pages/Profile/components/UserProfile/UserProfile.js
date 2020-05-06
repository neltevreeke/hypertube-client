import React from 'react'
import styles from './UserProfile.scss'
import Avatar from '../../../../components/Avatar/Avatar'
import * as Routes from 'constants/Routes'
import { useSelector } from 'react-redux'
import { getUser } from 'selectors/user'
import { history } from 'utils/configureStore'
import Button from 'components/Button/Button'

const UserProfile = () => {
  const user = useSelector(getUser)

  const editProfileBtnOnClick = () => {
    history.push(Routes.PROFILE_EDIT)
  }

  return (
    <div className={styles.pageHeader}>
      <Avatar
        size={Avatar.SIZE_M}
        user={user}
      />
      <div className={styles.pageTitle}>
        {user.username}
      </div>
      <div className={styles.pageControls}>
        <Button
          variant={Button.VARIANT_DEFAULT}
          onClick={editProfileBtnOnClick}
        >
          edit profile
        </Button>
      </div>
    </div>
  )
}

export default UserProfile

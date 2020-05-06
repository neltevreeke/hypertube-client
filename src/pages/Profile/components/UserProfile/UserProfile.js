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
  const recentlyWatchedMovies = null
  const recentComments = null

  const editProfileBtnOnClick = () => {
    history.push(Routes.PROFILE_EDIT)
  }

  return (
    <div className={styles.component}>
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
      <div className={styles.content}>
        <div className={styles.recentlyWatchedMovies}>
          <p className={styles.sectionTitle}>recently watched</p>
          {recentlyWatchedMovies ? (
            { recentlyWatchedMovies }
          ) : (
            <div className={styles.empty}>
              <p>This user has yet to watch any movies...</p>
            </div>
          )}
        </div>
        <div className={styles.recentComments}>
          <p className={styles.sectionTitle}>recent comments</p>
          {recentComments ? (
            { recentComments }
          ) : (
            <div className={styles.empty}>
              <p>This user has yet to comment on any movies...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserProfile

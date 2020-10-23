import React, { useEffect } from 'react'
import styles from './UserProfile.scss'
import Avatar from '../../../../components/Avatar/Avatar'
import * as Routes from 'constants/Routes'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from 'selectors/user'
import { getMovieComments, getMovieCommentsIsLoading } from 'selectors/comment'
import { history } from 'utils/configureStore'
import Button from 'components/Button/Button'
import { getUserComments } from 'actions/comments'
import PageSpinner from 'components/PageSpinner/PageSpinner'
import MovieComments from 'components/MovieComments/MovieComments'

const UserProfile = () => {
  const user = useSelector(getUser)
  // const recentlyWatchedMovies = null
  const recentComments = useSelector(getMovieComments)
  const isMovieCommentsLoading = useSelector(getMovieCommentsIsLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserComments(user._id))
  }, [])

  if (isMovieCommentsLoading) {
    return <PageSpinner />
  }

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
        </div>
        <div className={styles.recentComments}>
          <p className={styles.sectionTitle}>recent comments</p>
          <MovieComments
            comments={recentComments}
          />
        </div>
      </div>
    </div>
  )
}

export default UserProfile

import React from 'react'
import styles from './Avatar.scss'
import cx from 'classnames'
import { getCloudinaryUrlFromPublicId } from '../../utils/cloudinary'

const SIZE_S = 'size-s'
const SIZE_M = 'size-m'

const getDimensionsFromSize = size => {
  if (size === SIZE_M) {
    return [200, 200]
  } else if (size === SIZE_S) {
    return [40, 40]
  }

  throw new Error('Invalid size specified: ' + size)
}

const getInitials = user => {
  return `${user.firstName[0]}${user.lastName[0]}`
}

const getProfilePicture = (profilePicture, cloudinaryPublicId, width, height) => {
  if (profilePicture) {
    return profilePicture
  }

  return getCloudinaryUrlFromPublicId(cloudinaryPublicId, [
    `w_${width}`,
    `h_${height}`,
    'c_thumb',
    'g_face',
    'f_auto',
    'q_100'
  ])
}

const Avatar = ({
  user,
  size,
  className,
  isRounded = true,
  backgroundClassName,
  ...props
}) => {
  const profilePicture = user?.profilePicture?.value
  const cloudinaryPublicId = user?.profilePicture?.cloudinaryPublicId

  if (!profilePicture && !cloudinaryPublicId) {
    return (
      <div
        className={cx(styles.component, styles.empty, {
          [className]: className,
          [styles.isRounded]: isRounded,
          [styles[size]]: size
        })}
        {...props}
      >
        <div className={styles.initials}>
          {getInitials(user)}
        </div>
      </div>
    )
  }

  const [width, height] = getDimensionsFromSize(size)

  return (
    <div
      className={cx(styles.component, {
        [className]: className,
        [styles.isRounded]: isRounded,
        [styles[size]]: size
      })}
      {...props}
    >
      <div
        className={cx(styles.background, {
          [backgroundClassName]: backgroundClassName
        })}
        style={{
          backgroundImage: `url(${getProfilePicture(profilePicture, cloudinaryPublicId, width, height)})`,
          width,
          height
        }}
      />
    </div>
  )
}

Avatar.SIZE_S = SIZE_S
Avatar.SIZE_M = SIZE_M

export default Avatar

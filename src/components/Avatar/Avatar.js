import React from 'react'
import styles from './Avatar.scss'
import cx from 'classnames'

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

const Avatar = ({
  user,
  size,
  className,
  isRounded = true,
  backgroundClassName,
  ...props
}) => {
  const profilePicture = user?.profilePicture?.value

  if (!profilePicture) {
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
          backgroundImage: `url(${profilePicture})`,
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

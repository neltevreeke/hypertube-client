import React from 'react'
import styles from './Header.scss'
import { Link } from 'react-router-dom'
import * as Routes from 'constants/Routes'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from 'selectors/user'
import Button from '../Button/Button'
import { logout } from 'actions/user'
import { history } from 'utils/configureStore'

const Header = () => {
  const user = useSelector(getUser)
  const dispatch = useDispatch()
  const isLoggedIn = !!user

  const handleBtnLogOutClick = () => {
    dispatch(logout())
  }

  const handleBtnProfileClick = () => {
    history.push(Routes.PROFILE)
  }

  return (
    <div className={styles.component}>
      <Link
        to={Routes.HOME}
        className={styles.logo}
      >
        hypertube
      </Link>

      {isLoggedIn && (
        <div className={styles.menuControls}>
          <Button
            onClick={handleBtnProfileClick}
            variant={Button.VARIANT_TRANSPARENT_WHITE}
          >
            profile
          </Button>
          <Button
            onClick={handleBtnLogOutClick}
            variant={Button.VARIANT_TRANSPARENT_WHITE}
          >
            log out
          </Button>
        </div>
      )}
    </div>
  )
}

export default Header

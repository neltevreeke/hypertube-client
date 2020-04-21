import React, { useEffect } from 'react'
import wrapRoute from 'utils/wrapRoute'
import { useDispatch, useSelector } from 'react-redux'
import { me } from 'actions/user'
import PageSpinner from '../PageSpinner/PageSpinner'
import * as Routes from 'constants/Routes'
import { Redirect } from 'react-router-dom'
import { getIsLoggedIn, getMeIsLoaded } from 'selectors/user'

const MainRoute = ({
  matchProps,
  component: Component,
  isProtected
}) => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(getIsLoggedIn)
  const isMeLoaded = useSelector(getMeIsLoaded)

  useEffect(() => {
    dispatch(me())
  }, [])

  if (!isMeLoaded) {
    return (
      <PageSpinner />
    )
  }

  if (isProtected && !isLoggedIn) {
    return (
      <Redirect
        to={Routes.HOME}
        exact
      />
    )
  }

  return (
    <Component {...matchProps} />
  )
}

export default wrapRoute(MainRoute)

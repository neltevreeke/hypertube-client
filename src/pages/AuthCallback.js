import React, { useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import qs from 'qs'
import { authCallback } from '../api/user'
import { setToken } from 'utils/token'
import { useDispatch } from 'react-redux'
import { me } from 'actions/user'
import PageSpinner from '../components/PageSpinner/PageSpinner'

/**
 * Callback page for authentication to back-end
 */
export default ({ location }) => {
  const router = useRouteMatch()
  const dispatch = useDispatch()

  const provider = router.params.provider

  const params = qs.parse(location.search, {
    ignoreQueryPrefix: true // removes the ? from the location.search (the url paramters after the ?, eg. ?code=werwerwer)
  })

  useEffect(() => {
    authCallback(provider, params)
      .then(({ user, token }) => {
        setToken(token)

        dispatch(me())
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err)
      })
  }, [])

  return (
    <PageSpinner />
  )
}

import React, { useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import qs from 'qs'
import { authCallback } from '../api/user'

/**
 * Callback page for authentication to back-end
 */
export default ({ location }) => {
  const router = useRouteMatch()

  const provider = router.params.provider

  const params = qs.parse(location.search, {
    ignoreQueryPrefix: true // removes the ? from the location.search (the url paramters after the ?, eg. ?code=werwerwer)
  })

  console.log('router', params)

  useEffect(() => {
    console.log('Trying authentication...')
    console.log('Data:', provider, params)

    authCallback(provider, params)
      .then((data) => {
        console.log('DATA')
      })
      .catch((err) => console.error(err))
      .finally(() => console.log('DONE'))
  }, [])
  return (
    <h1>Hello... {provider}!</h1>
  )
}

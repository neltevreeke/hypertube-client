import React from 'react'
import wrapRoute from 'utils/wrapRoute'

const MainRoute = ({
  matchProps,
  component: Component,
  isProtected
}) => {
  return (
    <Component {...matchProps} />
  )
}

export default wrapRoute(MainRoute)

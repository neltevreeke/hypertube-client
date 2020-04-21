export const getIsLogInFormLoading = state => state.user.login.isLoading
export const getMeIsLoaded = state => state.user.me.isLoaded

export const getUser = state => state.user.user

export const getIsLoggedIn = (state) => {
  const isMeLoaded = getMeIsLoaded(state)
  return isMeLoaded && !!state.user.user
}

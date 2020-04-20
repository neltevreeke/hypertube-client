export const getIsLogInFormLoading = state => state.user.login.isLoading
export const getMeIsLoaded = state => state.user.me.isLoaded

export const getIsLoggedIn = (state) => {
  const isMeLoaded = getMeIsLoaded(state)
  return isMeLoaded && !!state.user.user
}

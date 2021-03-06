// Log in
export const getIsLogInFormLoading = state => state.user.login.isLoading
export const getLogInError = state => state.user.login.error

// Sign up
export const getIsSignUpFormLoading = state => state.user.signUp.isLoading
export const getSignUpError = state => state.user.signUp.error

// User
export const getMeIsLoaded = state => state.user.me.isLoaded
export const getUser = state => state.user.user

// Update
export const getUpdateIsLoading = state => state.user.update.isLoading

export const getIsLoggedIn = (state) => {
  const isMeLoaded = getMeIsLoaded(state)
  return isMeLoaded && !!state.user.user
}

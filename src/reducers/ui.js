export function ui(state = {isLoading: false}, action) {
  switch (action.type) {
    case 'LOADING_STARTED':
      return {
        isLoading: true
      }
      break
    case 'LOADING_ENDED':
      return {
        isLoading: false
      }
      break
  }
  return state
}

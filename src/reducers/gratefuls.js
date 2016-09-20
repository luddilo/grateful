import _ from 'lodash'

export function gratefuls(state = [], action) {
  let index
  switch (action.type) {
    case 'PURGE_GRATEFULS':
      const startToday = new Date().setHours(0,0,0,0,0)
      const todays = state.filter((grateful) => { return grateful.date >= startToday })
      return [ ...todays ]
    case 'ADD_GRATEFUL':
      index = state.map((grateful) => grateful.id).indexOf(action.payload.id)
      if (index != -1) {
        return [
            ...state.slice(0, index), // before the one we are updating
            action.payload, // updated grateful
            ...state.slice(index + 1) // after the one we are updating
        ]
      }
      else {
        return [
          ...state,
          action.payload
        ]
      }
      break
    case 'REMOVE_GRATEFUL':
      index = state.map((grateful) => grateful.id).indexOf(action.payload.id)
      if (index != -1) {
        state.splice(index, 1) // remove the index
      }
      return [
        ...state
      ]
      break
    case 'FETCHED_GRATEFULS':
      return _.each(action.payload, (grateful) => {
        return {
          text: grateful.text,
          date: grateful.date
        }
      })
      break
  }
  return state
}

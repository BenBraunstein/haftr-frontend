import defaultState from "./defaultState"

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_ALUMNI":
      return { ...state, allAlumni: action.payload }
    case "UPDATE_SEARCH_TEXT":
      return { ...state, searchBarText: action.payload }
    case "OPEN_NEW_ALUM_MODAL":
      return { ...state, newAlumModal: true }
    case "CLOSE_NEW_ALUM_MODAL":
      return { ...state, newAlumModal: false }
    default:
      return state
  }
}

export default rootReducer

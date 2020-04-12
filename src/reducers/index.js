import defaultState from "./defaultState"

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_ALUMNI":
      return { ...state, allAlumni: action.payload }
    case "UPDATE_SEARCH_TEXT":
      return { ...state, searchBarText: action.payload }
    default:
      return state
  }
}

export default rootReducer

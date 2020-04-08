import defaultState from "./defaultState"

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_ALUMNI":
      return { ...state, allAlumni: action.payload }
    default:
      return state
  }
}

export default rootReducer

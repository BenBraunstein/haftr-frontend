import defaultState from "./defaultState"

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_ALUMNI":
      return { ...state, allAlumni: action.payload }
    case "UPDATE_SEARCH_TEXT":
      return { ...state, searchBarText: action.payload }
    case "ADD_NEW_ALUM":
      return { ...state, allAlumni: [...state.allAlumni, action.payload] }
    case "EDIT_ALUM":
      return { ...state, alumEditing: action.payload, editModalOpen: true }
    case "STOP_EDIT_ALUM":
      return { ...state, alumEditing: {}, editModalOpen: false }
    // prettier-ignore
    case "DELETE_ALUM":
      const newAlumniList = state.allAlumni.filter(alum => alum.alum.id !== action.payload.id)
      return {...state, allAlumni: newAlumniList}
    // prettier-ignore
    case "ADJUST_ALUM":
      const theOneAlum = state.allAlumni.find(alum => alum.alum.id === action.payload.alum.id)
      const index = state.allAlumni.indexOf(theOneAlum)
      const newAllAlumni = state.allAlumni.filter(alum => alum.alum.id !== action.payload.alum.id)
      newAllAlumni.splice(index, 0, action.payload)
      return {...state, allAlumni: newAllAlumni }
    case "ADJUST_LOADING":
      return { ...state, loadingPercent: action.payload }
    case "LOGIN_USER":
      return { ...state, currentUser: action.payload }
    case "LOGOUT_USER":
      return { ...state, currentUser: {} }
    case "SET_HISTORY":
      return { ...state, history: action.payload }
    default:
      return state
  }
}

export default rootReducer

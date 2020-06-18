const fetchAlumni = (alumniResponse) => {
  return {
    type: "FETCH_ALUMNI",
    payload: alumniResponse,
  }
}

const updateSearchText = (newSearchText) => {
  return {
    type: "UPDATE_SEARCH_TEXT",
    payload: newSearchText,
  }
}

const addAlum = (newAlum) => {
  return {
    type: "ADD_NEW_ALUM",
    payload: newAlum,
  }
}

const editAlum = (alum) => {
  return {
    type: "EDIT_ALUM",
    payload: alum,
  }
}

const stopEditAlum = () => {
  return {
    type: "STOP_EDIT_ALUM",
  }
}

const deleteAlum = (alum) => {
  return {
    type: "DELETE_ALUM",
    payload: alum,
  }
}

const adjustAlum = (alum) => {
  return {
    type: "ADJUST_ALUM",
    payload: alum,
  }
}

const adjustLoading = (percent) => {
  return {
    type: "ADJUST_LOADING",
    payload: percent,
  }
}

const loginUser = (user) => {
  return {
    type: "LOGIN_USER",
    payload: user,
  }
}

const logoutUser = () => {
  return {
    type: "LOGOUT_USER",
  }
}

const setHistory = (hist) => {
  return {
    type: "SET_HISTORY",
    payload: hist,
  }
}

export {
  fetchAlumni,
  updateSearchText,
  addAlum,
  editAlum,
  stopEditAlum,
  deleteAlum,
  adjustAlum,
  adjustLoading,
  loginUser,
  logoutUser,
  setHistory,
}

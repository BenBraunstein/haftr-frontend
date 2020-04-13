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

export { fetchAlumni, updateSearchText, addAlum }

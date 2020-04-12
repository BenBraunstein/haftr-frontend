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

export { fetchAlumni, updateSearchText }

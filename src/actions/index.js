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

const openNewAlumniModal = () => {
  return {
    type: "OPEN_NEW_ALUM_MODAL",
  }
}

const closeNewAlumniModal = () => {
  return {
    type: "CLOSE_NEW_ALUM_MODAL",
  }
}

export {
  fetchAlumni,
  updateSearchText,
  openNewAlumniModal,
  closeNewAlumniModal,
}

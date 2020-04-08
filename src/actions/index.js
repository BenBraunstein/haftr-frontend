const fetchAlumni = (alumniResponse) => {
  return {
    type: "FETCH_ALUMNI",
    payload: alumniResponse,
  }
}

export { fetchAlumni }

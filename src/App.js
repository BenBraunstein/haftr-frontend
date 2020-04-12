import React, { useEffect } from "react"
import "./App.css"
import { useSelector, useDispatch } from "react-redux"
import { fetchAlumni } from "./actions"
import AlumniTable from "./AlumniTable"
import NavBar from "./NavBar"

function App() {
  let state = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`${state.fetchUrl}/alumnis`)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(fetchAlumni(data))
        console.log(data)
      })
  }, [state.fetchUrl, dispatch])

  return (
    <div className="App">
      <NavBar />
      <br />
      <br />
      <AlumniTable />
      {/* {<AlumniTable />} */}
    </div>
  )
}

export default App

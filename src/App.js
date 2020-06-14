import React, { useEffect } from "react"
import "./App.css"
import { useSelector, useDispatch } from "react-redux"
import { fetchAlumni, adjustLoading } from "./actions"
import AlumniTable from "./AlumniTable"
import NavBar from "./NavBar"
import EditAlumniModal from "./EditAlumniModal"
import Signup from "./Signup"
import Login from "./Login"
var Spinner = require("react-spinkit")

function App() {
  let state = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`${state.fetchUrl}/alumnis`)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(fetchAlumni(data))
        dispatch(adjustLoading(100))
      })
  }, [state.fetchUrl, dispatch])

  return (
    <div>
      {/* {state.loadingPercent < 100 ? (
        <Spinner name="wandering-cubes" className="loading" />
      ) : (
        <div className="App">
          <NavBar />
          {state.editModalOpen ? <EditAlumniModal /> : null}
          <br />
          <br />
          <AlumniTable />
          </div>
        )} */}
      <NavBar />
      {state.editModalOpen ? <EditAlumniModal /> : null}
      <br />
      <br />
      <Signup />
    </div>
  )
}

export default App

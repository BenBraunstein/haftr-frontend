import React, { useEffect } from "react"
import "./App.css"
import { useSelector, useDispatch } from "react-redux"
import { fetchAlumni, adjustLoading, loginUser, setHistory } from "./actions"
import { Route, Switch, withRouter, useHistory } from "react-router-dom"
import AlumniTable from "./AlumniTable"
import NavBar from "./NavBar"
import EditAlumniModal from "./EditAlumniModal"
import Signup from "./Signup"
import Login from "./Login"
import alertify from "alertifyjs"
var Spinner = require("react-spinkit")

function App() {
  let state = useSelector((state) => state)
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setHistory(history))
    // Autologin
    const token = localStorage.getItem("token")
    if (token) {
      fetch(`${state.fetchUrl}/autologin`, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer: ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          dispatch(loginUser(data.user))
          // alertify.success(`Welcome ${data.user.info.email}!`)
        })
    }

    // Fetch all alums
    fetch(`${state.fetchUrl}/alumnis`)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(fetchAlumni(data))
        dispatch(adjustLoading(100))
      })
  }, [state.fetchUrl, dispatch, history])

  return (
    <div>
      {state.loadingPercent < 100 ? (
        <Spinner name="wandering-cubes" className="loading" />
      ) : (
        <div className="App">
          <NavBar />
          {state.editModalOpen ? <EditAlumniModal /> : null}
          <br />
          <br />
          <Switch>
            <Route path="/login" render={() => <Login />} />
            <Route path="/signup" render={() => <Signup />} />
            <Route path="/alumni" render={() => <AlumniTable />} />
          </Switch>
        </div>
      )}
    </div>
  )
}

export default withRouter(App)

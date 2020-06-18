import React from "react"
import { Menu, Input } from "semantic-ui-react"
import { useDispatch, useSelector } from "react-redux"
import { updateSearchText, logoutUser } from "./actions"
import NewAlumniModal from "./NewAlumniModal"
import haftrLogo from "./haftr-logo.jpg"
import hiliLogo from "./hili-logo.jpg"
import hillelLogo from "./hillel-logo.jpg"

function NavBar() {
  let state = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <div>
      <Menu fixed="top">
        <Menu.Menu>
          <Menu.Item name="home" onClick={() => state.history.push("/")}>
            <img src={hiliLogo} alt="haftr-logo" style={{ height: "30px" }} />
          </Menu.Item>
          <Menu.Item name="home" onClick={() => state.history.push("/")}>
            <img src={haftrLogo} alt="haftr-logo" style={{ width: "80px" }} />
          </Menu.Item>
          <Menu.Item name="home" onClick={() => state.history.push("/")}>
            <img src={hillelLogo} alt="haftr-logo" style={{ height: "30px" }} />
          </Menu.Item>
          {Object.keys(state.currentUser).length === 0 ? null : (
            <Menu.Item name="profile">Your Profile</Menu.Item>
          )}
        </Menu.Menu>
        {/* Will appear as Nav Button */}
        {/* {<NewAlumniModal fromNav />} */}
        {Object.keys(state.currentUser).length === 0 ? (
          <Menu.Menu position="right">
            <Menu.Item
              name="login"
              onClick={() => state.history.push("/login")}
            >
              Log In
            </Menu.Item>
            <Menu.Item
              name="signup"
              onClick={() => state.history.push("/signup")}
            >
              Sign Up
            </Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right">
            <Menu.Item name="logout" onClick={() => dispatch(logoutUser())}>
              Log out
            </Menu.Item>
            <Menu.Item>
              <Input
                icon="search"
                placeholder="Search..."
                onChange={(e) => dispatch(updateSearchText(e.target.value))}
              />
            </Menu.Item>
          </Menu.Menu>
        )}
      </Menu>
      NavBar
    </div>
  )
}

export default NavBar

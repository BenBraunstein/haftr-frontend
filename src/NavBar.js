import React from "react"
import { Menu, Input } from "semantic-ui-react"
import { useDispatch } from "react-redux"
import { updateSearchText } from "./actions"
import NewAlumniModal from "./NewAlumniModal"
import haftrLogo from "./haftr-logo.jpg"
import hiliLogo from "./hili-logo.jpg"
import hillelLogo from "./hillel-logo.jpg"

function NavBar() {
  const dispatch = useDispatch()

  return (
    <div>
      <Menu fixed="top">
        <Menu.Item name="home">
          <img src={hiliLogo} alt="haftr-logo" style={{ height: "30px" }} />
        </Menu.Item>
        <Menu.Item name="home">
          <img src={haftrLogo} alt="haftr-logo" style={{ width: "80px" }} />
        </Menu.Item>
        <Menu.Item name="home">
          <img src={hillelLogo} alt="haftr-logo" style={{ height: "30px" }} />
        </Menu.Item>
        {/* Will appear as Nav Button */}
        {<NewAlumniModal fromNav />}
        <Menu.Menu position="right">
          <Menu.Item>
            <Input
              icon="search"
              placeholder="Search..."
              onChange={(e) => dispatch(updateSearchText(e.target.value))}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      NavBar
    </div>
  )
}

export default NavBar

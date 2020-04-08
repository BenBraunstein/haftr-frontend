import React from "react"
import { Menu, Input } from "semantic-ui-react"
import haftrLogo from "./school-logo-dark.png"

function NavBar() {
  return (
    <div>
      <Menu fixed="top">
        <Menu.Item name="home">
          <img src={haftrLogo} alt="haftr-logo" style={{ width: "10vmin" }} />
        </Menu.Item>
        <Menu.Item name="all_alumni">All Alumni</Menu.Item>
        <Menu.Item name="new_alum">New Alumni</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      NavBar
    </div>
  )
}

export default NavBar

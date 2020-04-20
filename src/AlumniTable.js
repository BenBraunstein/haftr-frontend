import React, { useState } from "react"
import { Table, Header, Button, Icon } from "semantic-ui-react"
import TableRow from "./TableRow"
import { useSelector } from "react-redux"
import NewAlumniModal from "./NewAlumniModal"
const sortBy = require("sort-by")

function AlumniTable() {
  let state = useSelector((state) => state)
  const [nameSort, changeNameDirection] = useState("none")

  const downloadCsv = () => {
    let csv = "Name,Email Address,Cell Phone,HILLEL,HILI,HAFTR,Age\n"
    csvData.forEach(function (row) {
      csv += row.join(",")
      csv += "\n"
    })
    const hiddenElement = document.createElement("a")
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv)
    hiddenElement.target = "_blank"
    hiddenElement.download = "alumni.csv"
    hiddenElement.click()
  }

  const sortByName = (e) => {
    if (Array.from(e.target.classList).includes("dont")) {
      Array.from(e.target.parentElement.children).forEach((icon) =>
        icon.classList.remove("active-name-icon")
      )
      changeNameDirection("none")
    } else if (Array.from(e.target.classList).includes("down")) {
      Array.from(e.target.parentElement.children).forEach((icon) =>
        icon.classList.remove("active-name-icon")
      )
      e.target.classList.add("active-name-icon")
      changeNameDirection("asc")
    } else if (Array.from(e.target.classList).includes("up")) {
      Array.from(e.target.parentElement.children).forEach((icon) =>
        icon.classList.remove("active-name-icon")
      )
      e.target.classList.add("active-name-icon")
      changeNameDirection("desc")
    }
  }

  const matchingAlum = state.allAlumni.filter((alum) =>
    `${alum.alum.firstName} ${alum.alum.middleName} ${alum.alum.lastName}`
      .toLowerCase()
      .includes(state.searchBarText.toLowerCase())
  )

  let sortedAlum
  if (nameSort === "asc") {
    sortedAlum = matchingAlum.sort(sortBy("alum.lastName", "alum.firstName"))
  } else if (nameSort === "desc") {
    sortedAlum = matchingAlum.sort(sortBy("-alum.lastName", "-alum.firstName"))
  } else {
    sortedAlum = matchingAlum
  }

  const csvData = sortedAlum.map((alum) => [
    `${alum.alum.firstName} ${alum.alum.lastName}`,
    alum.alum.emailAddress,
    alum.alum.cellPhone,
    alum.alum.hillel,
    alum.alum.hili,
    alum.alum.haftr,
    alum.alum.birthday
      ? `${(new Date() - new Date(alum.alum.birthday)) / 31554600000}`.split(
          "."
        )[0]
      : "No Birthday",
  ])

  const matchingAlumniRows = sortedAlum.map((alum) => (
    <TableRow key={`alum${alum.alum.id}`} alumInfo={alum.alum} />
  ))

  return (
    <div>
      <Header as="h2">Alumni Table</Header>
      <Table id="alumni-table" celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              Name
              <span class="name-sort-icons" onClick={sortByName}>
                <Icon name="sort alphabet down" />
                <Icon name="sort alphabet up" />
                <Icon name="dont" />
              </span>
            </Table.HeaderCell>
            <Table.HeaderCell>Email Address</Table.HeaderCell>
            <Table.HeaderCell>Cell Phone Number</Table.HeaderCell>
            <Table.HeaderCell>HILLEL</Table.HeaderCell>
            <Table.HeaderCell>HILI</Table.HeaderCell>
            <Table.HeaderCell>HAFTR</Table.HeaderCell>
            <Table.HeaderCell>Age</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{matchingAlumniRows}</Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="7">
              <Button
                floated="left"
                icon
                labelPosition="left"
                primary
                size="small"
                onClick={downloadCsv}
              >
                <Icon name="download" /> Export to CSV
              </Button>{" "}
              {/* Will Show as Button with Icon */}
              <NewAlumniModal />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}

export default AlumniTable

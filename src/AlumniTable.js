import React from "react"
import { Table, Header } from "semantic-ui-react"
import TableRow from "./TableRow"
import { useSelector } from "react-redux"
import NewAlumniModal from "./NewAlumniModal"

function AlumniTable() {
  let state = useSelector((state) => state)

  const matchingAlum = state.allAlumni.filter((alum) =>
    `${alum.firstName} ${alum.middleName} ${alum.lastName}`
      .toLowerCase()
      .includes(state.searchBarText.toLowerCase())
  )

  const matchingAlumniRows = matchingAlum.map((alum) => (
    <TableRow key={`alum${alum.id}`} alumInfo={alum} />
  ))

  return (
    <div>
      <Header as="h2">Alumni Table</Header>
      <Table id="alumni-table" celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email Address</Table.HeaderCell>
            <Table.HeaderCell>Cell Phone Number</Table.HeaderCell>
            <Table.HeaderCell>HILLEL</Table.HeaderCell>
            <Table.HeaderCell>HILI</Table.HeaderCell>
            <Table.HeaderCell>HAFTR</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{matchingAlumniRows}</Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
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

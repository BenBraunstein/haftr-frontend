import React from "react"
import { Table } from "semantic-ui-react"
import TableRow from "./TableRow"
import { useSelector } from "react-redux"

function AlumniTable() {
  let state = useSelector((state) => state)

  const allAlumniRows = state.allAlumni.map((alum) => (
    <TableRow
      name={`${alum.firstName} ${alum.lastName}`}
      email={alum.emailAddress}
      cellPhone={alum.cellPhone}
    />
  ))

  return (
    <div>
      <Table id="alumni-table" celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email Address</Table.HeaderCell>
            <Table.HeaderCell>Cell Phone Number</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {/* <Table.Row>
            <Table.Cell>Ben</Table.Cell>
            <Table.Cell>Ben Email</Table.Cell>
            <Table.Cell>Ben Cell</Table.Cell>
          </Table.Row> */}
          {allAlumniRows}
        </Table.Body>
      </Table>
    </div>
  )
}

export default AlumniTable

import React from "react"
import { Table, Button, Icon } from "semantic-ui-react"
import TableRow from "./TableRow"
import { useSelector } from "react-redux"

function AlumniTable() {
  let state = useSelector((state) => state)

  const allAlumniRows = state.allAlumni.map((alum) => (
    <TableRow
      key={`alum${alum.id}`}
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

        <Table.Body>{allAlumniRows}</Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Button
                floated="right"
                icon
                labelPosition="left"
                primary
                size="small"
              >
                <Icon name="user" /> Add Alumni
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}

export default AlumniTable

import React from "react"
import { Table } from "semantic-ui-react"

function TableRow(props) {
  return (
    <Table.Row>
      <Table.Cell>{props.name}</Table.Cell>
      <Table.Cell>{props.email}</Table.Cell>
      <Table.Cell>{props.cellPhone}</Table.Cell>
    </Table.Row>
  )
}

export default TableRow

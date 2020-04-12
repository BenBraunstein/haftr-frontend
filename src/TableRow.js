import React from "react"
import { Table } from "semantic-ui-react"

function TableRow(props) {
  const fullName = props.alumInfo.middleName
    ? `${props.alumInfo.firstName} ${props.alumInfo.middleName} ${props.alumInfo.lastName}`
    : `${props.alumInfo.firstName} ${props.alumInfo.lastName}`
  return (
    <Table.Row>
      <Table.Cell>{fullName}</Table.Cell>
      <Table.Cell>{props.alumInfo.emailAddress}</Table.Cell>
      <Table.Cell>{props.alumInfo.cellPhone}</Table.Cell>
    </Table.Row>
  )
}

export default TableRow

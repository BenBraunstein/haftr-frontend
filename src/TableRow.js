import React from "react"
import { Table, Checkbox } from "semantic-ui-react"

function TableRow(props) {
  function formatPhoneNumber(phoneNumberString) {
    const cleaned = ("" + phoneNumberString).replace(/\D/g, "")
    const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      const intlCode = match[1] ? "+1 " : ""
      return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("")
    }
    return null
  }

  const fullName = props.alumInfo.middleName
    ? `${props.alumInfo.firstName} ${props.alumInfo.middleName} ${props.alumInfo.lastName}`
    : `${props.alumInfo.firstName} ${props.alumInfo.lastName}`

  return (
    <Table.Row>
      <Table.Cell>{fullName}</Table.Cell>
      <Table.Cell>{props.alumInfo.emailAddress}</Table.Cell>
      <Table.Cell>{formatPhoneNumber(props.alumInfo.cellPhone)}</Table.Cell>
      <Table.Cell>
        {props.alumInfo.hillel ? (
          <Checkbox defaultChecked readOnly />
        ) : (
          <Checkbox readOnly />
        )}
      </Table.Cell>
      <Table.Cell>
        {props.alumInfo.hili ? (
          <Checkbox defaultChecked readOnly />
        ) : (
          <Checkbox readOnly />
        )}
      </Table.Cell>
      <Table.Cell>
        {props.alumInfo.haftr ? (
          <Checkbox defaultChecked readOnly />
        ) : (
          <Checkbox readOnly />
        )}
      </Table.Cell>
    </Table.Row>
  )
}

export default TableRow

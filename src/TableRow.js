import React from "react"
import { Table, Icon } from "semantic-ui-react"

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

  const doubleClickedRow = (alum) => {
    console.log(alum)
  }

  const calculateAge = (birthday) => {
    return birthday
      ? `${(new Date() - new Date(birthday)) / 31554600000}`.split(".")[0]
      : "No Birthday"
  }

  const fullName = props.alumInfo.middleName
    ? `${props.alumInfo.firstName} ${props.alumInfo.middleName} ${props.alumInfo.lastName}`
    : `${props.alumInfo.firstName} ${props.alumInfo.lastName}`

  return (
    <Table.Row onDoubleClick={() => doubleClickedRow(props.alumInfo)}>
      <Table.Cell>{fullName}</Table.Cell>
      <Table.Cell>{props.alumInfo.emailAddress}</Table.Cell>
      <Table.Cell>{formatPhoneNumber(props.alumInfo.cellPhone)}</Table.Cell>
      <Table.Cell textAlign="center">
        {props.alumInfo.hillel ? (
          <Icon name="checkmark" />
        ) : (
          <Icon name="close" />
        )}
      </Table.Cell>
      <Table.Cell textAlign="center">
        {props.alumInfo.hili ? (
          <Icon name="checkmark" />
        ) : (
          <Icon name="close" />
        )}
      </Table.Cell>
      <Table.Cell textAlign="center">
        {props.alumInfo.haftr ? (
          <Icon name="checkmark" />
        ) : (
          <Icon name="close" />
        )}
      </Table.Cell>
      <Table.Cell>{calculateAge(props.alumInfo.birthday)} </Table.Cell>
    </Table.Row>
  )
}

export default TableRow

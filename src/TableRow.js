import React from "react"
import { useDispatch } from "react-redux"
import { Table, Icon } from "semantic-ui-react"
import { editAlum } from "./actions"

function TableRow(props) {
  const dispatch = useDispatch()

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
    dispatch(editAlum(alum))
  }

  const calculateAge = (birthday) => {
    return birthday
      ? `${(new Date() - new Date(birthday)) / 31554600000}`.split(".")[0]
      : "No Birthday"
  }

  const fullName = props.alumInfo.alum.middleName
    ? `${props.alumInfo.alum.firstName} ${props.alumInfo.alum.middleName} ${props.alumInfo.alum.lastName}`
    : `${props.alumInfo.alum.firstName} ${props.alumInfo.alum.lastName}`

  return (
    <Table.Row onDoubleClick={() => doubleClickedRow(props.alumInfo)}>
      <Table.Cell>{fullName}</Table.Cell>
      <Table.Cell>{props.alumInfo.alum.emailAddress}</Table.Cell>
      <Table.Cell>
        {formatPhoneNumber(props.alumInfo.alum.cellPhone)}
      </Table.Cell>
      <Table.Cell textAlign="center">
        {props.alumInfo.alum.hillel ? (
          <Icon name="checkmark" />
        ) : (
          <Icon name="close" />
        )}
      </Table.Cell>
      <Table.Cell textAlign="center">
        {props.alumInfo.alum.hili ? (
          <Icon name="checkmark" />
        ) : (
          <Icon name="close" />
        )}
      </Table.Cell>
      <Table.Cell textAlign="center">
        {props.alumInfo.alum.haftr ? (
          <Icon name="checkmark" />
        ) : (
          <Icon name="close" />
        )}
      </Table.Cell>
      <Table.Cell>{calculateAge(props.alumInfo.alum.birthday)} </Table.Cell>
    </Table.Row>
  )
}

export default TableRow

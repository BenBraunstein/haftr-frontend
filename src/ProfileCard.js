import React from "react"
import { Card, Image, Button } from "semantic-ui-react"
import stockProfile from "./stock-profile.png"
import { useSelector, useDispatch } from "react-redux"
import NewAlumniModal from "./NewAlumniModal"
import { editAlum } from "./actions"

export default function ProfileCard(props) {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  console.log(state.currentUser)
  if (Object.keys(state.currentUser).length === 0) {
    state.history.push("/login")
  }

  const alumInfo = state.currentUser.alum

  const calculateAge = (birthday) => {
    return birthday
      ? `${(new Date() - new Date(birthday)) / 31554600000}`.split(".")[0]
      : ""
  }
  let fullName = ""
  let age = 0
  let phoneEmail = ""
  let programs = ""
  if (alumInfo) {
    fullName = alumInfo.middleName
      ? `${alumInfo.firstName} ${alumInfo.middleName} ${alumInfo.lastName}`
      : `${alumInfo.firstName} ${alumInfo.lastName}`
    age = calculateAge(alumInfo.birthday)
    phoneEmail = `${alumInfo.cellphone} ${alumInfo.emailAddress}`
    programs = `${alumInfo.haftr ? "HAFTR" : null} ${
      alumInfo.hili ? "HILI" : null
    } ${alumInfo.hillel ? "HILLEL" : null}`
  }

  return (
    <div>
      <Card centered>
        <Image src={stockProfile} />
        <Card.Content>
          <Card.Header>{fullName === "" ? "Your Name" : fullName}</Card.Header>
          <Card.Meta>{age === 0 ? "Your Age" : `${age} Years Old`} </Card.Meta>
          <Card.Description>
            {phoneEmail === "" ? "Your Number\nYour Email Address" : phoneEmail}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {programs === "" ? "Your Programs" : programs}{" "}
        </Card.Content>
      </Card>
      {alumInfo === null ? (
        <NewAlumniModal fromNewProfile />
      ) : (
        <Button onClick={() => dispatch(editAlum(alumInfo))}>
          Edit your profile
        </Button>
      )}
    </div>
  )
}

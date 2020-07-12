import React from "react"
import { Card, Image, Button } from "semantic-ui-react"
import stockProfile from "./stock-profile.png"
import { useSelector, useDispatch } from "react-redux"
import NewAlumniModal from "./NewAlumniModal"
import { editAlum } from "./actions"

export default function ProfileCard(props) {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
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
    phoneEmail = `${alumInfo.cellPhone} ${alumInfo.emailAddress}`
    programs = `${alumInfo.haftr ? "HAFTR" : ""} ${
      alumInfo.hili ? "HILI" : ""
    } ${alumInfo.hillel ? "HILLEL" : ""}`
  }

  return (
    <div>
      <Card centered>
        {state.currentUser.photo ? (
          <Image src={state.currentUser.photo} />
        ) : (
          <Image src={stockProfile} />
        )}
        <Card.Content>
          <Card.Header>{fullName === "" ? "Your Name" : fullName}</Card.Header>
          <Card.Meta>{age === 0 ? "Your Age" : `${age} Years Old`} </Card.Meta>
          <Card.Description>
            {phoneEmail === "" ? "Your Number\nYour Email Address" : phoneEmail}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {programs.length < 4 ? "Your Programs" : programs}{" "}
        </Card.Content>
      </Card>
      {alumInfo === null ? (
        <NewAlumniModal fromNewProfile />
      ) : (
        <Button onClick={() => dispatch(editAlum(state.currentUser))}>
          Edit your profile
        </Button>
      )}
    </div>
  )
}

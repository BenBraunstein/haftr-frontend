import React, { useState } from "react"
import { Modal, Menu, Button, Form, Checkbox, Header } from "semantic-ui-react"
import SemanticDatepicker from "react-semantic-ui-datepickers"
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css"
import { useDispatch, useSelector } from "react-redux"
import { addAlum } from "./actions"

function NewAlumniModal() {
  let state = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleNewAlumSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const newAlumInfo = {
      hillel: form.hillel.checked,
      hili: form.hili.checked,
      haftr: form.haftr.checked,
      birthday: currentDate,
      firstName: form.firstName.value,
      middleName: form.middleName.value,
      lastName: form.lastName.value,
      marriedName: form.marriedName.value,
      motherName: form.motherName.value,
      fatherName: form.fatherName.value,
      currentAddress: form.currentAddress.value,
      homePhone: form.homePhone.value,
      cellPhone: form.cellPhone.value,
      workPhone: form.workPhone.value,
      emailAddress: form.emailAddress.value,
      clubs: form.clubs.value,
      awards: form.awards.value,
      hillelDayAttended: form.hillelDayAttended.checked,
      hillelSleepAttended: form.hillelSleepAttended.checked,
      hillelDayYears: form.hillelDayYears.value,
      hillelSleepYears: form.hillelSleepYears.value,
      hillelDayCamper: form.hillelDayCamper.checked,
      hillelSleepCamper: form.hillelSleepCamper.checked,
      hillelDayCounselor: form.hillelDayCounselor.checked,
      hillelSleepCounselor: form.hillelSleepCounselor.checked,
      hillelDaySpecialty: form.hillelDaySpecialty.value,
      hillelSleepSpecialty: form.hillelSleepSpecialty.value,
      classParent: form.classParent.checked,
      boardTrustee: form.boardTrustee.checked,
      boardEducation: form.boardEducation.checked,
      committees: form.committees.value,
      alumniNewsletters: form.alumniNewsletters.checked,
      commsOutreach: form.commsOutreach.checked,
      classReunions: form.classReunions.checked,
      alumniEvents: form.alumniEvents.checked,
      fundraisingNetworking: form.fundraisingNetworking.checked,
      databaseReasearch: form.databaseReasearch.checked,
      alumniChoir: form.alumniChoir.checked,
    }
    fetch(`${state.fetchUrl}/alumnis`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAlumInfo),
    })
      .then((resp) => resp.json())
      .then((newAlumResponse) => {
        dispatch(addAlum(newAlumResponse))
        changeModalOpen(false)
      })
  }

  const [modalOpen, changeModalOpen] = useState(false)
  const [currentDate, setNewDate] = useState(null)
  const onDatePickerChange = (event, data) => setNewDate(data.value)

  return (
    <Modal
      open={modalOpen}
      trigger={
        <Menu.Item name="new_alum" onClick={() => changeModalOpen(true)}>
          New Alumni
        </Menu.Item>
      }
    >
      <Modal.Header>Add a New Alum</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleNewAlumSubmit}>
          <Form.Group className="school-attended-checkbox" widths="equal">
            <label>Schools Attended</label>
            <Checkbox
              className="semantic-checkbox"
              label="HILLEL"
              name="hillel"
            />
            <Checkbox className="semantic-checkbox" label="HILI" name="hili" />
            <Checkbox
              className="semantic-checkbox"
              label="HAFTR"
              name="haftr"
            />
            <Form.Field style={{ paddingLeft: "150px" }}>
              <label>Birthday</label>
              <SemanticDatepicker onChange={onDatePickerChange} />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="First Name"
              placeholder="First Name"
              name="firstName"
            />
            <Form.Input
              label="Middle Name"
              placeholder="Middle Name"
              name="middleName"
            />
            <Form.Input
              label="Last Name"
              placeholder="Last Name"
              name="lastName"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Married Name"
              placeholder="Married Name"
              name="marriedName"
            />
            <Form.Input
              label="Mother's Name"
              placeholder="Mother's Name"
              name="motherName"
            />
            <Form.Input
              label="Father's Name"
              placeholder="Father's Name"
              name="fatherName"
            />
          </Form.Group>
          <Header as="h3">Contact Info</Header>
          <Form.Input
            label="Current Address"
            placeholder="Current Address"
            name="currentAddress"
          />
          <Form.Group widths="equal">
            <Form.Input
              label="Home Phone"
              placeholder="Home Phone"
              name="homePhone"
              type="tel"
            />
            <Form.Input
              label="Cell Phone"
              placeholder="Cell Phone"
              name="cellPhone"
              type="tel"
            />
            <Form.Input
              label="Work Phone"
              placeholder="Work Phone"
              name="workPhone"
              type="tel"
            />
          </Form.Group>
          <Form.Input
            label="Email Address"
            placeholder="Email Address"
            name="emailAddress"
            type="email"
          />
          <Form.Input
            label="Old Addresses"
            placeholder="Old Addresses... COME BACK TO THIS"
            name="oldAddresses"
            style={{ backgroundColor: "red" }}
          />
          <Header as="h3">Clubs</Header>
          <Form.Input
            label="Please list all clubs you were in, separated by commas"
            placeholder="Clubs"
            name="clubs"
          />
          <Form.Input
            label="Please list all awards you (or your team) received, separated by commas"
            placeholder="Awards"
            name="awards"
          />
          <Header as="h3">Schools and Profession</Header>
          <Form.Group widths="equal">
            <Form.Input
              label="School in Israel Attended"
              placeholder="Israel School"
              name="israelSchool"
            />
            <Form.Input
              label="College/University Attended"
              placeholder="College"
              name="collegeAttended"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Graduate School Attended"
              placeholder="Graduate School"
              name="gradSchool"
            />
            <Form.Input
              label="Profession"
              placeholder="Profession"
              name="profession"
            />
          </Form.Group>
          <Header as="h3">Did you ever attend</Header>
          <Form.Group>
            <Checkbox
              className="semantic-checkbox"
              label="Hillel Day Camp"
              name="hillelDayAttended"
            />
            <Form.Input
              label="Years"
              placeholder="Years"
              name="hillelDayYears"
            />
            <Checkbox
              className="semantic-checkbox"
              label="Camper"
              name="hillelDayCamper"
            />
            <Checkbox
              className="semantic-checkbox"
              label="Counselor"
              name="hillelDayCounselor"
            />
            <Form.Input
              label="Specialty"
              placeholder="Specialty"
              name="hillelDaySpecialty"
            />
          </Form.Group>
          <Form.Group>
            <Checkbox
              className="semantic-checkbox"
              label="Hillel Sleep Away"
              name="hillelSleepAttended"
            />
            <Form.Input
              label="Years"
              placeholder="Years"
              name="hillelSleepYears"
            />
            <Checkbox
              className="semantic-checkbox"
              label="Camper"
              name="hillelSleepCamper"
            />
            <Checkbox
              className="semantic-checkbox"
              label="Counselor"
              name="hillelSleepCounselor"
            />
            <Form.Input
              label="Specialty"
              placeholder="Specialty"
              name="hillelSleepSpecialty"
            />
          </Form.Group>
          <Header as="h3">Past or Current?</Header>
          <Form.Group>
            <Checkbox
              className="semantic-checkbox"
              label="Class Parent"
              name="classParent"
            />
            <Checkbox
              className="semantic-checkbox"
              label="Board of Trustees"
              name="boardTrustee"
            />
            <Checkbox
              className="semantic-checkbox"
              label="Board of Education"
              name="boardEducation"
            />
            <Form.Input
              label="Enter any committees, separated by commas"
              placeholder="Committees"
              name="committees"
            />
          </Form.Group>
          <Header as="h3">Willing to work on:</Header>
          <Form.Group widths="equal">
            <Checkbox
              className="semantic-checkbox"
              label="Alumni Newsletters"
              name="alumniNewsletters"
            />
            <Checkbox
              className="semantic-checkbox"
              label="Communications and Outreach"
              name="commsOutreach"
            />
            <Checkbox
              className="semantic-checkbox"
              label="Class Reunions"
              name="classReunions"
            />
            <Checkbox
              className="semantic-checkbox"
              label="Coordinating and or Hosting Alumni Events"
              name="alumniEvents"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Checkbox
              className="semantic-checkbox"
              label="Fundraising and Networking Initiatives"
              name="fundraisingNetworking"
            />
            <Checkbox
              className="semantic-checkbox"
              label="Database Research"
              name="databaseReasearch"
            />
            <Checkbox
              className="semantic-checkbox"
              label="Alumni Choir"
              name="alumniChoir"
            />
          </Form.Group>
          <Button type="submit" positive>
            Save
          </Button>
          <Button negative onClick={() => changeModalOpen(false)}>
            Cancel
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  )
}

export default NewAlumniModal

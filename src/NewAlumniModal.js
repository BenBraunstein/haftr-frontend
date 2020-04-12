import React, { useState } from "react"
import { Modal, Menu, Button, Form, Checkbox, Header } from "semantic-ui-react"
import SemanticDatepicker from "react-semantic-ui-datepickers"
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css"

function NewAlumniModal() {
  const handleNewAlumSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

  const [currentDate, setNewDate] = useState(null)
  const onDatePickerChange = (event, data) => setNewDate(data.value)

  return (
    <Modal trigger={<Menu.Item name="new_alum">New Alumni</Menu.Item>}>
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
              label="Coordinating and or Hosting Alumni Events"
              name="alumniEvents"
            />
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
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button.Group>
          <Button positive>Save</Button>
          <Button.Or />
          <Button negative>Cancel</Button>
        </Button.Group>
      </Modal.Actions>
    </Modal>
  )
}

export default NewAlumniModal

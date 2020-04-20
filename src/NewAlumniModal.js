import React, { useState } from "react"
import {
  Modal,
  Menu,
  Button,
  Form,
  Checkbox,
  Header,
  Icon,
} from "semantic-ui-react"
import SemanticDatepicker from "react-semantic-ui-datepickers"
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css"
import { useDispatch, useSelector } from "react-redux"
import { addAlum } from "./actions"
import NewSibling from "./NewSibling"
import NewChild from "./NewChild"
import alertify from "alertifyjs"

function NewAlumniModal(props) {
  let state = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleNewAlumSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    // Grab all siblings and their info
    let siblingInfo = []
    let childrenInfo = []
    for (let i = 1; i <= siblingCount.length; i++) {
      if (form[`sibling${i}Name`].value !== "") {
        siblingInfo.push({
          name: form[`sibling${i}Name`].value,
          yearFinished: form[`sibling${i}Year`].value,
          school: form[`sibling${i}School`].value,
        })
      }
    }

    for (let i = 1; i <= childCount.length; i++) {
      if (form[`child${i}Name`].value !== "") {
        childrenInfo.push({
          name: form[`child${i}Name`].value,
          currentGradeOrYearGraduated:
            form[`child${i}currentGradeOrYearGraduated`].value,
        })
      }
    }

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
      oldAddresses: form.oldAddresses.value,
      homePhone: form.homePhone.value,
      cellPhone: form.cellPhone.value,
      workPhone: form.workPhone.value,
      emailAddress: form.emailAddress.value,
      clubs: form.clubs.value,
      awards: form.awards.value,
      hillelDayAttended: form.hillelDayAttended.checked,
      hillelSleepAttended: form.hillelSleepAttended.checked,
      hiliDayAttended: form.hiliDayAttended.checked,
      hiliWhiteAttended: form.hiliWhiteAttended.checked,
      hiliInternationalAttended: form.hiliInternationalAttended.checked,
      hillelDayYears: form.hillelDayYears.value,
      hillelSleepYears: form.hillelSleepYears.value,
      hiliDayYears: form.hiliDayYears.value,
      hiliWhiteYears: form.hiliWhiteYears.value,
      hiliInternationalYears: form.hiliInternationalYears.value,
      hillelDayCamper: form.hillelDayCamper.checked,
      hillelSleepCamper: form.hillelSleepCamper.checked,
      hiliDayCamper: form.hiliDayCamper.checked,
      hiliWhiteCamper: form.hiliWhiteCamper.checked,
      hiliInternationalCamper: form.hiliInternationalCamper.checked,
      hillelDayCounselor: form.hillelDayCounselor.checked,
      hillelSleepCounselor: form.hillelSleepCounselor.checked,
      hiliDayCounselor: form.hiliDayCounselor.checked,
      hiliWhiteCounselor: form.hiliWhiteCounselor.checked,
      hiliInternationalCounselor: form.hiliInternationalCounselor.checked,
      hillelDaySpecialty: form.hillelDaySpecialty.value,
      hillelSleepSpecialty: form.hillelSleepSpecialty.value,
      hiliDaySpecialty: form.hiliDaySpecialty.value,
      hiliWhiteSpecialty: form.hiliWhiteSpecialty.value,
      hiliInternationalSpecialty: form.hiliInternationalSpecialty.value,
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
      siblings: siblingInfo,
      children: childrenInfo,
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
        changeChildCount([])
        changeSiblingCount([])
        changeModalOpen(false)
        alertify.set("notifier", "position", "bottom-left")
        alertify.success(
          `You've added ${newAlumResponse.firstName} ${newAlumResponse.lastName}!`
        )
      })
  }

  const handleEnterClick = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
    }
  }

  const [siblingCount, changeSiblingCount] = useState([])
  const [childCount, changeChildCount] = useState([])
  const [modalOpen, changeModalOpen] = useState(false)
  const [currentDate, setNewDate] = useState(null)
  const onDatePickerChange = (event, data) => setNewDate(data.value)

  return (
    <Modal
      open={modalOpen}
      trigger={
        props.fromNav ? (
          <Menu.Item name="new_alum" onClick={() => changeModalOpen(true)}>
            New Alumni
          </Menu.Item>
        ) : (
          <Button
            floated="right"
            icon
            labelPosition="left"
            primary
            size="small"
            onClick={() => changeModalOpen(true)}
          >
            <Icon name="user" /> Add Alumni
          </Button>
        )
      }
    >
      <Modal.Header>Add a New Alum</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleNewAlumSubmit} onKeyDown={handleEnterClick}>
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
            <Form.Field style={{ paddingLeft: "20px" }}>
              <label>Birthday</label>
              <SemanticDatepicker onChange={onDatePickerChange} />
            </Form.Field>
            <div className="profile-image-div">Profile Image</div>
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
            label="Please list previous addresses, separated by forward slashes (/)"
            placeholder="Old Addresses"
            name="oldAddresses"
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
          <Header as="h3">Siblings</Header>
          <Button
            type="button"
            onClick={() =>
              changeSiblingCount([
                ...siblingCount,
                <NewSibling count={siblingCount.length + 1} />,
              ])
            }
          >
            Add Sibling
          </Button>
          {siblingCount.length > 0 ? (
            <Button
              type="button"
              onClick={() =>
                changeSiblingCount(
                  siblingCount.slice(0, siblingCount.length - 1)
                )
              }
            >
              Remove Sibling
            </Button>
          ) : null}
          {siblingCount}
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
          <Form.Group>
            <Checkbox
              className="semantic-checkbox"
              label="HILI Day Camp"
              name="hiliDayAttended"
            />
            <Form.Input label="Years" placeholder="Years" name="hiliDayYears" />
            <Checkbox
              className="semantic-checkbox"
              label="Camper"
              name="hiliDayCamper"
            />
            <Checkbox
              className="semantic-checkbox"
              label="Counselor"
              name="hiliDayCounselor"
            />
            <Form.Input
              label="Specialty"
              placeholder="Specialty"
              name="hiliDaySpecialty"
            />
          </Form.Group>
          <Form.Group>
            <Checkbox
              className="semantic-checkbox"
              label="HILI White Lake"
              name="hiliWhiteAttended"
            />
            <Form.Input
              label="Years"
              placeholder="Years"
              name="hiliWhiteYears"
            />
            <Checkbox
              className="semantic-checkbox"
              label="Camper"
              name="hiliWhiteCamper"
            />
            <Checkbox
              className="semantic-checkbox"
              label="Counselor"
              name="hiliWhiteCounselor"
            />
            <Form.Input
              label="Specialty"
              placeholder="Specialty"
              name="hiliWhiteSpecialty"
            />
          </Form.Group>
          <Form.Group>
            <Checkbox
              className="semantic-checkbox"
              label="HILI International"
              name="hiliInternationalAttended"
            />
            <Form.Input
              label="Years"
              placeholder="Years"
              name="hiliInternationalYears"
            />
            <Checkbox
              className="semantic-checkbox"
              label="Camper"
              name="hiliInternationalCamper"
            />
            <Checkbox
              className="semantic-checkbox"
              label="Counselor"
              name="hiliInternationalCounselor"
            />
            <Form.Input
              label="Specialty"
              placeholder="Specialty"
              name="hiliInternationalSpecialty"
            />
          </Form.Group>
          <Header as="h3">Children</Header>
          <Button
            type="button"
            onClick={() =>
              changeChildCount([
                ...childCount,
                <NewChild count={childCount.length + 1} />,
              ])
            }
          >
            Add Child
          </Button>
          {childCount.length > 0 ? (
            <Button
              type="button"
              onClick={() =>
                changeChildCount(childCount.slice(0, childCount.length - 1))
              }
            >
              Remove Child
            </Button>
          ) : null}
          {childCount}
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

import React, { useState } from "react"
import { Modal, Button, Form, Checkbox, Header } from "semantic-ui-react"
import SemanticDatepicker from "react-semantic-ui-datepickers"
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css"
import { useDispatch, useSelector } from "react-redux"
import { addAlum, stopEditAlum, deleteAlum } from "./actions"
import NewSibling from "./NewSibling"
import NewChild from "./NewChild"
import alertify from "alertifyjs"
import haftrLogo from "./haftr-logo.jpg"
import hiliLogo from "./hili-logo.jpg"
import hillelLogo from "./hillel-logo.jpg"

function EditAlumniModal() {
  let state = useSelector((state) => state)
  const dispatch = useDispatch()
  const alum = state.alumEditing

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.onloadend = () => {
      changePhotoUrl(fileReader.result)
      changeProfilePhoto(file)
    }
    if (file) {
      fileReader.readAsDataURL(file)
    }
  }

  const modalClose = (e) => {
    dispatch(stopEditAlum())
  }

  const handleEditAlumSubmit = (e) => {
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

    const siblingsChildren = {
      siblings: siblingInfo,
      children: childrenInfo,
    }

    let formData = new FormData()
    formData.append("alumni[hillel]", form.hillel.checked)
    formData.append("alumni[hili]", form.hili.checked)
    formData.append("alumni[haftr]", form.haftr.checked)
    formData.append("alumni[birthday]", currentDate)
    formData.append("alumni[firstName]", form.firstName.value)
    formData.append("alumni[middleName]", form.middleName.value)
    formData.append("alumni[lastName]", form.lastName.value)
    formData.append("alumni[marriedName]", form.marriedName.value)
    formData.append("alumni[motherName]", form.motherName.value)
    formData.append("alumni[fatherName]", form.fatherName.value)
    formData.append("alumni[currentAddress]", form.currentAddress.value)
    formData.append("alumni[oldAddresses]", form.oldAddresses.value)
    formData.append("alumni[homePhone]", form.homePhone.value)
    formData.append("alumni[cellPhone]", form.cellPhone.value)
    formData.append("alumni[workPhone]", form.workPhone.value)
    formData.append("alumni[emailAddress]", form.emailAddress.value)
    formData.append("alumni[clubs]", form.clubs.value)
    formData.append("alumni[awards]", form.awards.value)
    formData.append("alumni[hillelDayAttended]", form.hillelDayAttended.checked)
    formData.append(
      "alumni[hillelSleepAttended]",
      form.hillelSleepAttended.checked
    )
    formData.append("alumni[hiliDayAttended]", form.hiliDayAttended.checked)
    formData.append("alumni[hiliWhiteAttended]", form.hiliWhiteAttended.checked)
    formData.append(
      "alumni[hiliInternationalAttended]",
      form.hiliInternationalAttended.checked
    )
    formData.append("alumni[hillelDayYears]", form.hillelDayYears.value)
    formData.append("alumni[hillelSleepYears]", form.hillelSleepYears.value)
    formData.append("alumni[hiliDayYears]", form.hiliDayYears.value)
    formData.append("alumni[hiliWhiteYears]", form.hiliWhiteYears.value)
    formData.append(
      "alumni[hiliInternationalYears]",
      form.hiliInternationalYears.value
    )
    formData.append("alumni[hillelDayCamper]", form.hillelDayCamper.checked)
    formData.append("alumni[hillelSleepCamper]", form.hillelSleepCamper.checked)
    formData.append("alumni[hiliDayCamper]", form.hiliDayCamper.checked)
    formData.append("alumni[hiliWhiteCamper]", form.hiliWhiteCamper.checked)
    formData.append(
      "alumni[hiliInternationalCamper]",
      form.hiliInternationalCamper.checked
    )
    formData.append(
      "alumni[hillelDayCounselor]",
      form.hillelDayCounselor.checked
    )
    formData.append(
      "alumni[hillelSleepCounselor]",
      form.hillelSleepCounselor.checked
    )
    formData.append("alumni[hiliDayCounselor]", form.hiliDayCounselor.checked)
    formData.append(
      "alumni[hiliWhiteCounselor]",
      form.hiliWhiteCounselor.checked
    )
    formData.append(
      "alumni[hiliInternationalCounselor]",
      form.hiliInternationalCounselor.checked
    )
    formData.append("alumni[hillelDaySpecialty]", form.hillelDaySpecialty.value)
    formData.append(
      "alumni[hillelSleepSpecialty]",
      form.hillelSleepSpecialty.value
    )
    formData.append("alumni[hiliDaySpecialty]", form.hiliDaySpecialty.value)
    formData.append("alumni[hiliWhiteSpecialty]", form.hiliWhiteSpecialty.value)
    formData.append(
      "alumni[hiliInternationalSpecialty]",
      form.hiliInternationalSpecialty.value
    )
    formData.append("alumni[classParent]", form.classParent.checked)
    formData.append("alumni[boardTrustee]", form.boardTrustee.checked)
    formData.append("alumni[boardEducation]", form.boardEducation.checked)
    formData.append("alumni[committees]", form.committees.value)
    formData.append("alumni[alumniNewsletters]", form.alumniNewsletters.checked)
    formData.append("alumni[commsOutreach]", form.commsOutreach.checked)
    formData.append("alumni[classReunions]", form.classReunions.checked)
    formData.append("alumni[alumniEvents]", form.alumniEvents.checked)
    formData.append(
      "alumni[fundraisingNetworking]",
      form.fundraisingNetworking.checked
    )
    formData.append("alumni[databaseResearch]", form.databaseReasearch.checked)
    formData.append("alumni[alumniChoir]", form.alumniChoir.checked)
    if (profilePhoto) {
      formData.append("alumni[photo]", profilePhoto)
    }

    fetch(`${state.fetchUrl}/alumnis`, {
      method: "POST",
      body: formData,
    })
      .then((resp) => resp.json())
      .then((newAlumResponse) => {
        fetch(`${state.fetchUrl}/alumnis/addsibsnkids/${newAlumResponse.id}`, {
          method: "PATCH",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(siblingsChildren),
        })
          .then((resp) => resp.json())
          .then((alumUpdate) => {
            dispatch(addAlum(alumUpdate))
            modalClose()
            alertify.set("notifier", "position", "bottom-left")
            alertify.success(
              `You've added ${alumUpdate.alum.firstName} ${alumUpdate.alum.lastName}!`
            )
          })
      })
  }

  const confirmDeleteAlum = () => {
    fetch(`${state.fetchUrl}/alumnis/${alumInfo.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((deletedAlum) => {
        dispatch(stopEditAlum())
        dispatch(deleteAlum(deletedAlum))
      })
  }

  const handleEnterClick = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
    }
  }

  const handleAlumChange = (e) => {
    if (e.target.type === "text") {
      changeAlumInfo({ ...alumInfo, [e.target.name]: e.target.value })
    } else if (e.target.previousSibling.type === "checkbox") {
      changeAlumInfo({ ...alumInfo, [e.target.name]: !e.target.checked })
    }
  }
  const [alumInfo, changeAlumInfo] = useState(alum.alum)
  const date = new Date(alumInfo.birthday)
  date.setDate(date.getDate() + 1)
  const [photoUrl, changePhotoUrl] = useState(alum.photo)
  const [profilePhoto, changeProfilePhoto] = useState(null)
  const [siblingCount, changeSiblingCount] = useState([])
  changeSiblingCount(
    alum.siblings.map((sibling) => (
      <NewSibling siblingInfo={sibling} count={siblingCount.length + 1} />
    ))
  )
  const [childCount, changeChildCount] = useState([])
  const [currentDate, setNewDate] = useState(date)
  const onDatePickerChange = (event, data) => setNewDate(data.value)

  return (
    <Modal open={state.editModalOpen}>
      <Modal.Header>
        Edit{" "}
        {alum.alum.middleName
          ? `${alum.alum.firstName} ${alum.alum.middleName} ${alum.alum.lastName}`
          : `${alum.alum.firstName} ${alum.alum.lastName}`}
      </Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleEditAlumSubmit} onKeyDown={handleEnterClick}>
          <Form.Group className="all-logos-group" widths="equal">
            <img className="all-logos" src={hiliLogo} alt="hili-logo" />
            <img className="all-logos" src={haftrLogo} alt="haftr-logo" />
            <img className="all-logos" src={hillelLogo} alt="hillel-logo" />
          </Form.Group>

          <Form.Group className="school-attended-checkbox" widths="equal">
            <label>Schools Attended</label>
            <Checkbox
              className="semantic-checkbox"
              label="HILLEL"
              name="hillel"
              onChange={handleAlumChange}
            />
            <Checkbox
              className="semantic-checkbox"
              label="HILI"
              name="hili"
              onChange={handleAlumChange}
            />
            <Checkbox
              className="semantic-checkbox"
              label="HAFTR"
              name="haftr"
              onChange={handleAlumChange}
            />
            <Form.Field style={{ paddingLeft: "40px" }}>
              <label>Birthday</label>
              <SemanticDatepicker
                onChange={onDatePickerChange}
                value={currentDate}
              />
            </Form.Field>
            {photoUrl ? (
              <div className="profile-image-div">
                <img src={photoUrl} alt="preview" className="profile-image" />
              </div>
            ) : null}
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="First Name"
              placeholder="First Name"
              name="firstName"
              value={alumInfo.firstName}
              onChange={handleAlumChange}
            />
            <Form.Input
              label="Middle Name"
              placeholder="Middle Name"
              name="middleName"
              value={alumInfo.middleName}
              onChange={handleAlumChange}
            />
            <Form.Input
              label="Last Name"
              placeholder="Last Name"
              name="lastName"
              value={alumInfo.lastName}
              onChange={handleAlumChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Married Name"
              placeholder="Married Name"
              name="marriedName"
              value={alumInfo.marriedName}
              onChange={handleAlumChange}
            />
            <Form.Input
              label="Mother's Name"
              placeholder="Mother's Name"
              name="motherName"
              value={alumInfo.motherName}
              onChange={handleAlumChange}
            />
            <Form.Input
              label="Father's Name"
              placeholder="Father's Name"
              name="fatherName"
              value={alumInfo.fatherName}
              onChange={handleAlumChange}
            />
          </Form.Group>
          <Header as="h3">Contact Info</Header>
          <Form.Input
            label="Current Address"
            placeholder="Current Address"
            name="currentAddress"
            value={alumInfo.currentAddress}
            onChange={handleAlumChange}
          />
          <Form.Group widths="equal">
            <Form.Input
              label="Home Phone"
              placeholder="Home Phone"
              name="homePhone"
              value={alumInfo.homePhone}
              onChange={handleAlumChange}
              type="tel"
            />
            <Form.Input
              label="Cell Phone"
              placeholder="Cell Phone"
              name="cellPhone"
              value={alumInfo.cellPhone}
              onChange={handleAlumChange}
              type="tel"
            />
            <Form.Input
              label="Work Phone"
              placeholder="Work Phone"
              name="workPhone"
              value={alumInfo.workPhone}
              onChange={handleAlumChange}
              type="tel"
            />
          </Form.Group>
          <Form.Input
            label="Email Address"
            placeholder="Email Address"
            name="emailAddress"
            type="email"
            value={alumInfo.emailAddress}
            onChange={handleAlumChange}
          />
          <Form.Input
            label="Please list previous addresses, separated by forward slashes (/)"
            placeholder="Old Addresses"
            name="oldAddresses"
            value={alumInfo.oldAddresses}
            onChange={handleAlumChange}
          />
          <Header as="h3">Clubs</Header>
          <Form.Input
            label="Please list all clubs you were in, separated by commas"
            placeholder="Clubs"
            name="clubs"
            value={alumInfo.clubs}
            onChange={handleAlumChange}
          />
          <Form.Input
            label="Please list all awards you (or your team) received, separated by commas"
            placeholder="Awards"
            name="awards"
            value={alumInfo.awards}
            onChange={handleAlumChange}
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
              value={alumInfo.israelSchool}
              onChange={handleAlumChange}
            />
            <Form.Input
              label="College/University Attended"
              placeholder="College"
              name="collegeAttended"
              value={alumInfo.collegeAttended}
              onChange={handleAlumChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Graduate School Attended"
              placeholder="Graduate School"
              name="gradSchool"
              value={alumInfo.gradSchool}
              onChange={handleAlumChange}
            />
            <Form.Input
              label="Profession"
              placeholder="Profession"
              name="profession"
              value={alumInfo.profession}
              onChange={handleAlumChange}
            />
          </Form.Group>
          <Header as="h3">Did you ever attend</Header>
          <Form.Group>
            <Checkbox
              className="semantic-checkbox"
              label="Hillel Day Camp"
              name="hillelDayAttended"
              onChange={handleAlumChange}
            />
            <Form.Input
              label="Years"
              placeholder="Years"
              name="hillelDayYears"
              value={alumInfo.hillelDayYears}
              onChange={handleAlumChange}
            />
            <Checkbox
              className="semantic-checkbox"
              label="Camper"
              name="hillelDayCamper"
              onChange={handleAlumChange}
            />
            <Checkbox
              className="semantic-checkbox"
              label="Counselor"
              name="hillelDayCounselor"
              onChange={handleAlumChange}
            />
            <Form.Input
              label="Specialty"
              placeholder="Specialty"
              name="hillelDaySpecialty"
              value={alumInfo.hillelDaySpecialty}
              onChange={handleAlumChange}
            />
          </Form.Group>
          <Form.Group>
            <Checkbox
              className="semantic-checkbox"
              label="Hillel Sleep Away"
              name="hillelSleepAttended"
              onChange={handleAlumChange}
            />
            <Form.Input
              label="Years"
              placeholder="Years"
              name="hillelSleepYears"
              value={alumInfo.hillelSleepYears}
              onChange={handleAlumChange}
            />
            <Checkbox
              className="semantic-checkbox"
              label="Camper"
              name="hillelSleepCamper"
              onChange={handleAlumChange}
            />
            <Checkbox
              className="semantic-checkbox"
              label="Counselor"
              name="hillelSleepCounselor"
              onChange={handleAlumChange}
            />
            <Form.Input
              label="Specialty"
              placeholder="Specialty"
              name="hillelSleepSpecialty"
              value={alumInfo.hillelSleepSpecialty}
              onChange={handleAlumChange}
            />
          </Form.Group>
          <Form.Group>
            <Checkbox
              className="semantic-checkbox"
              label="HILI Day Camp"
              name="hiliDayAttended"
              onChange={handleAlumChange}
            />
            <Form.Input label="Years" placeholder="Years" name="hiliDayYears" />
            <Checkbox
              className="semantic-checkbox"
              label="Camper"
              name="hiliDayCamper"
              onChange={handleAlumChange}
            />
            <Checkbox
              className="semantic-checkbox"
              label="Counselor"
              name="hiliDayCounselor"
              onChange={handleAlumChange}
            />
            <Form.Input
              label="Specialty"
              placeholder="Specialty"
              name="hiliDaySpecialty"
              value={alumInfo.hiliDaySpecialty}
              onChange={handleAlumChange}
            />
          </Form.Group>
          <Form.Group>
            <Checkbox
              className="semantic-checkbox"
              label="HILI White Lake"
              name="hiliWhiteAttended"
              onChange={handleAlumChange}
            />
            <Form.Input
              label="Years"
              placeholder="Years"
              name="hiliWhiteYears"
              value={alumInfo.hiliWhiteYears}
              onChange={handleAlumChange}
            />
            <Checkbox
              className="semantic-checkbox"
              label="Camper"
              name="hiliWhiteCamper"
              onChange={handleAlumChange}
            />
            <Checkbox
              className="semantic-checkbox"
              label="Counselor"
              name="hiliWhiteCounselor"
              onChange={handleAlumChange}
            />
            <Form.Input
              label="Specialty"
              placeholder="Specialty"
              name="hiliWhiteSpecialty"
              value={alumInfo.hiliWhiteSpecialty}
              onChange={handleAlumChange}
            />
          </Form.Group>
          <Form.Group>
            <Checkbox
              className="semantic-checkbox"
              label="HILI International"
              name="hiliInternationalAttended"
              onChange={handleAlumChange}
            />
            <Form.Input
              label="Years"
              placeholder="Years"
              name="hiliInternationalYears"
              value={alumInfo.hiliInternationalYears}
              onChange={handleAlumChange}
            />
            <Checkbox
              className="semantic-checkbox"
              label="Camper"
              name="hiliInternationalCamper"
              onChange={handleAlumChange}
            />
            <Checkbox
              className="semantic-checkbox"
              label="Counselor"
              name="hiliInternationalCounselor"
              onChange={handleAlumChange}
            />
            <Form.Input
              label="Specialty"
              placeholder="Specialty"
              name="hiliInternationalSpecialty"
              value={alumInfo.hiliInternationalSpecialty}
              onChange={handleAlumChange}
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
              onChange={handleAlumChange}
            />
            <Checkbox
              className="semantic-checkbox"
              label="Board of Trustees"
              name="boardTrustee"
              onChange={handleAlumChange}
            />
            <Checkbox
              className="semantic-checkbox"
              label="Board of Education"
              name="boardEducation"
              onChange={handleAlumChange}
            />
            <Form.Input
              label="Enter any committees, separated by commas"
              placeholder="Committees"
              name="committees"
              value={alumInfo.committees}
              onChange={handleAlumChange}
            />
          </Form.Group>
          <Header as="h3">Willing to work on:</Header>
          <Form.Group widths="equal">
            <Checkbox
              className="semantic-checkbox"
              label="Alumni Newsletters"
              name="alumniNewsletters"
              onChange={handleAlumChange}
            />
            <Checkbox
              className="semantic-checkbox"
              label="Communications and Outreach"
              name="commsOutreach"
              onChange={handleAlumChange}
            />
            <Checkbox
              className="semantic-checkbox"
              label="Class Reunions"
              name="classReunions"
              onChange={handleAlumChange}
            />
            <Checkbox
              className="semantic-checkbox"
              label="Coordinating and or Hosting Alumni Events"
              name="alumniEvents"
              onChange={handleAlumChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Checkbox
              className="semantic-checkbox"
              label="Fundraising and Networking Initiatives"
              name="fundraisingNetworking"
              onChange={handleAlumChange}
            />
            <Checkbox
              className="semantic-checkbox"
              label="Database Research"
              name="databaseReasearch"
              onChange={handleAlumChange}
            />
            <Checkbox
              className="semantic-checkbox"
              label="Alumni Choir"
              name="alumniChoir"
              onChange={handleAlumChange}
            />
          </Form.Group>
          <Header as="h3">Profile Picture:</Header>
          <Form.Input
            label="Upload Photo"
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleFileUpload}
          />
          <Button type="submit" positive>
            Save Changes
          </Button>
          <Button negative onClick={modalClose}>
            Cancel
          </Button>
          <Button
            id="delete-alum-button"
            negative
            type="button"
            onClick={() =>
              alertify.confirm(
                `Are you sure you want to delete ${alumInfo.firstName}?`,
                "This action cannot be undone",
                confirmDeleteAlum,
                function () {}
              )
            }
          >
            Delete {alumInfo.firstName}
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  )
}

export default EditAlumniModal

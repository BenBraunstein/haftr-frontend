import React from "react"
import { Modal, Menu, Button, Form } from "semantic-ui-react"

function NewAlumniModal() {
  const handleNewAlumSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

  return (
    <Modal trigger={<Menu.Item name="new_alum">New Alumni</Menu.Item>}>
      <Modal.Header>Add A New Alum</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleNewAlumSubmit}>
          <Form.Group className="school-attended-checkbox">
            <Form.Input label="HILLEL" name="hillel" type="checkbox" />
            <Form.Input label="HILI" name="hili" type="checkbox" />
            <Form.Input label="HAFTR" name="haftr" type="checkbox" />
          </Form.Group>
          <Form.Group widths="equal">
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

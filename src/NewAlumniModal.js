import React from "react"
import { Modal, Menu, Button } from "semantic-ui-react"

function NewAlumniModal() {
  return (
    <Modal trigger={<Menu.Item name="new_alum">New Alumni</Menu.Item>}>
      <Modal.Header>Add A New Alum</Modal.Header>
      <Modal.Content>Form will be here</Modal.Content>
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

import React from "react"
import { Form } from "semantic-ui-react"

export default function NewSibling(props) {
  return (
    <Form.Group>
      <Form.Input
        label="Name"
        placeholder="Name"
        name={`sibling${props.count}Name`}
      />
      <Form.Input
        label="Year Finished"
        placeholder="Year Finished"
        name={`sibling${props.count}Year`}
      />
      <Form.Input
        label="School"
        placeholder="School"
        name={`sibling${props.count}School`}
      />
    </Form.Group>
  )
}

import React from "react"
import { Form } from "semantic-ui-react"

export default function NewChild(props) {
  return (
    <Form.Group>
      <Form.Input
        label="Name"
        placeholder="Name"
        name={`child${props.count}Name`}
      />
      <Form.Input
        label="Grade or Year Finished"
        placeholder="Grade or Year Finished"
        name={`child${props.count}currentGradeOrYearGraduated`}
      />
    </Form.Group>
  )
}

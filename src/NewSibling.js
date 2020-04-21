import React, { useState } from "react"
import { Form } from "semantic-ui-react"

export default function NewSibling(props) {
  const [formInfo, changeFormInfo] = useState(
    props.siblingInfo
      ? {
          [`sibling${props.count}Name`]: props.siblingInfo.name,
          [`sibling${props.count}Year`]: props.siblingInfo.yearFinished,
          [`sibling${props.count}School`]: props.siblingInfo.school,
        }
      : {
          [`sibling${props.count}Name`]: "",
          [`sibling${props.count}Year`]: "",
          [`sibling${props.count}School`]: "",
        }
  )

  const handleChange = (e) => {
    changeFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Form.Group>
      <Form.Input
        label="Name"
        placeholder="Name"
        name={`sibling${props.count}Name`}
        value={formInfo[`sibling${props.count}Name`]}
        onChange={handleChange}
      />
      <Form.Input
        label="Year Finished"
        placeholder="Year Finished"
        name={`sibling${props.count}Year`}
        value={formInfo.yearFinished}
        onChange={handleChange}
      />
      <Form.Input
        label="School"
        placeholder="School"
        name={`sibling${props.count}School`}
        value={formInfo.school}
        onChange={handleChange}
      />
    </Form.Group>
  )
}

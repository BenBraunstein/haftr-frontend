import React, { useState } from "react"
import { Form } from "semantic-ui-react"

export default function NewChild(props) {
  const [formInfo, changeFormInfo] = useState(
    props.childInfo
      ? {
          [`child${props.count}Name`]: props.childInfo.name,
          [`child${props.count}currentGradeOrYearGraduated`]: props.childInfo
            .currentGradeOrYearGraduated,
        }
      : {
          [`child${props.count}Name`]: "",
          [`child${props.count}currentGradeOrYearGraduated`]: "",
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
        name={`child${props.count}Name`}
        value={formInfo[`child${props.count}Name`]}
        onChange={handleChange}
      />
      <Form.Input
        label="Grade or Year Finished"
        placeholder="Grade or Year Finished"
        name={`child${props.count}currentGradeOrYearGraduated`}
        value={formInfo[`child${props.count}currentGradeOrYearGraduated`]}
      />
    </Form.Group>
  )
}

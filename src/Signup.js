import React from "react"
import { Form, Header, Checkbox, Button } from "semantic-ui-react"

export default function Signup() {
  return (
    <div id="signup-form">
      <Header as="h2">Sign Up!</Header>
      <Form>
        <Form.Field>
          <label>Email Address</label>
          <input placeholder="Email Address" type="email" name="email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" type="password" name="password" />
        </Form.Field>
        <Form.Field>
          <label>Enter Password Again</label>
          <input
            placeholder="Enter Password Again"
            type="password"
            name="password-confirm"
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" name="terms" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

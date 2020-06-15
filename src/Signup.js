import React from "react"
import { Form, Header, Checkbox, Button } from "semantic-ui-react"
import { useSelector, useDispatch } from "react-redux"
import alertify from "alertifyjs"
import { loginUser } from "./actions"

export default function Signup() {
  let state = useSelector((state) => state)
  const dispatch = useDispatch()

  const signupSubmit = (e) => {
    e.preventDefault()
    let form = e.target
    if (!form.terms.checked) {
      alertify.error("Please accept terms")
      return
    }
    if (form.password.value !== form["password-confirm"].value) {
      alertify.error("Passwords don't match")
      return
    }
    if (form.password.value.length < 8) {
      alertify.error("Password must be more than 8 or more characters long")
      return
    }
    let formInfo = {
      email: form.email.value,
      password: form.password.value,
    }
    fetch(`${state.fetchUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInfo),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          alertify.error(data.error)
          return
        }
        localStorage.setItem("token", data.token)
        dispatch(loginUser(data.user))
        alertify.success("Success")
      })
  }

  return (
    <div id="signup-form">
      <Header as="h2">Sign Up!</Header>
      <Form onSubmit={signupSubmit}>
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
      <br />
      <Header as="h3">Already have an account?</Header>
      <Button onClick={() => state.history.push("/login")}>Login</Button>
    </div>
  )
}

import React from "react"
import { Form, Header, Button } from "semantic-ui-react"
import { useSelector, useDispatch } from "react-redux"
import alertify from "alertifyjs"
import { loginUser } from "./actions"

export default function Signup() {
  let state = useSelector((state) => state)
  const dispatch = useDispatch()

  const loginSubmit = (e) => {
    e.preventDefault()
    let form = e.target
    let formInfo = {
      email: form.email.value,
      password: form.password.value,
    }
    fetch(`${state.fetchUrl}/login`, {
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
        alertify.success(`Welcome ${data.user.info.email}!`)
      })
  }

  return (
    <div id="signup-form">
      <Header as="h2">Log In!</Header>
      <Form onSubmit={loginSubmit}>
        <Form.Field>
          <label>Email Address</label>
          <input placeholder="Email Address" type="email" name="email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" type="password" name="password" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
      <br />
      <Header as="h3">Need an account?</Header>
      <Button onClick={() => state.history.push("/signup")}>Sign Up</Button>
    </div>
  )
}

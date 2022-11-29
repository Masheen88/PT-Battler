// bootstrap login form

import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

export default function Login() {
  //state for login form
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [stayloggedin, setStayLoggedIn] = React.useState(false);

  //handle login form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    let emailValue = event.target[0].value; //email
    let passwordValue = event.target[1].value; //password
    let checkmarkValue = event.target[2].checked; //checkmark
    console.log("checkmarkValue: ", checkmarkValue);

    // if email and password are empty return
    if (emailValue === "" && passwordValue === "") {
      alert("Please enter your email and password");
      return;
    }

    setEmail(emailValue);
    setPassword(passwordValue);
    setStayLoggedIn(checkmarkValue);

    event.target[0].value = ""; //email
    event.target[1].value = ""; //password

    if (checkmarkValue === true) {
      console.log("stay logged in");
      //set cookie to true
      document.cookie = "loggedIn=true";
    } else {
      console.log("do not stay logged in");
    }
  };

  const handleLogout = (event) => {
    event.preventDefault();
    document.cookie = "loggedIn=false";
    setEmail("");
    setPassword("");
    setStayLoggedIn(false);
  };

  useEffect(() => {
    //if cookie is equal to loggedIn=true, then set state to true
    if (document.cookie === "loggedIn=true") {
      setEmail(" ");
      setPassword(" ");
      setStayLoggedIn(true);
    }
  }, []);

  console.log(email, password, stayloggedin, document.cookie);
  return (
    <>
      {/* if cookie loggedIn = true hide form */}
      {document.cookie === "loggedIn=true" ? (
        <div className="login">
          <h1>Logged In</h1>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      ) : (
        <div className="login">
          <Form className="loginForm" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
              />
              <Form.Text id="text-muted" className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Stay logged in?" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      )}
    </>
  );
}

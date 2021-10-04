import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Registration.css";
import student from "../../images/student-2.jpg";

const Registration = () => {
  return (
    <div className="registration">
      <Container>
        <div className="register">
          <h2>Register Now</h2>
          <p>Create your account and browse thousand of courses!!</p>
        </div>
        <Row>
          <Col>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Your Phone</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Choose a password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
            </Form>
            <Button>SIGN UP NOW!</Button>
          </Col>
          <Col>
            <img src={student} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registration;

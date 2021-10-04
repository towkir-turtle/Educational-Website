import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h2>edureka!</h2>
            <p>35/37 Ludgate Hill, London, EC4M 7JN.</p>
            <p>office@companyaddress.co.uk</p>
            <p>+44 (0) 20 72489249</p>
          </Col>
          <Col>
            <h2>Quick Link</h2>
            <li>
              <a href="http://">Register And Account</a>
            </li>
            <li>
              <a href="http://">Support Forum</a>
            </li>
            <li>
              <a href="http://">Faq & Help Center</a>
            </li>
            <li>
              <a href="http://">About Us</a>
            </li>
          </Col>
          <Col>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Your Email address</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
                <Button className="send-btn">Send</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      <hr />
      <div className="footer-text">
        <p>&copy; Copyright - 2021 edureka - Designed by Towkir</p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Course.css";

const Course = (props) => {
  const { img, course, instructor, price } = props.course;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{course}</Card.Title>
            <Card.Text>{instructor}</Card.Text>
            <p>${price}</p>
            <a className="link-btn">Enroll Now</a>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Course;

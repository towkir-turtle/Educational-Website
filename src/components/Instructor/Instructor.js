import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Instructor.css";

const Instructor = (props) => {
  const { img, name, designation } = props.instructor;
  return (
    <div className="instructor">
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{designation}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Instructor;

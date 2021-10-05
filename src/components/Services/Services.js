import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./Services.css";
import Service from "../Service/Service";
import Instructor from "../Instructor/Instructor";

const Services = () => {
  const [services, setServices] = useState([]);
  const [instructors, setInstructors] = useState([]);
  //load service data from api:
  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  //load instructor from api:
  useEffect(() => {
    fetch("./instructor.JSON")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div className="services">
      <Container>
        <h2>All Courses</h2>
        <hr className="service-line" />
        <Row xs={1} md={4} className="g-4">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </Container>
      <Container className="instructors">
        <h2>Our Instructor</h2>
        <hr className="service-line" />
        <Row xs={1} md={4} className="g-4">
          {instructors.map((instructor) => (
            <Instructor
              key={Instructor.id}
              instructor={instructor}
            ></Instructor>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./Services.css";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  //load data from api:
  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
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
    </div>
  );
};

export default Services;

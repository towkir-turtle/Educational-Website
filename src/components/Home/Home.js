import React, { useEffect, useState } from "react";
import "./Home.css";
import background from "../../images/background.jpg";
import { Button, Card, Col, Row } from "react-bootstrap";
import Course from "../Courses/Course";

const Home = () => {
  const [courses, setCourses] = useState([]);
  //load data from api:
  useEffect(() => {
    fetch("./courses.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="home">
      <div
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "550px",
          width: "100%",
          opacity: "0.8",
        }}
      >
        <div className="little-description">
          <h1>
            <span>Education</span> & Training Organization.
          </h1>
          <p>
            Education & Training Organization. we proviet best education system
            for you amet mauris lobortis mauris inceptos eget. Urna imperdiet.
          </p>
          <div className="btn">
            <Button className="btn-1">Our Course</Button>
            <Button className="btn-2" variant="outline-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      <div className="courses">
        <h2>Our Popular Courses</h2>
        <hr className="course-line" />
        <Row xs={1} md={4} className="g-4">
          {courses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;

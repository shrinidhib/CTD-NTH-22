import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import nthlogo from "../../assets/nth-logo.png";
import {StarWars} from "./starwars/StarWars.js";
import { useEffect, useState } from "react";
import {StarWars1} from "./starwars/StarWars.js";
const About = () => {
  const [starwar, setStarwar] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log('in interval')
      if(starwar)
        setStarwar(false);
      else
        setStarwar(true);
    }, 25000);
    return () => clearInterval(interval);
  }, [starwar]);

  return (
    <div className="about-page">
      <Container fluid>
        <Row className="info">
          <Col lg={5} sm={12}>
            <img src={nthlogo} alt="" />
          </Col>
          <Col lg={6} sm={12}>
      {/* {console.log(starwar)}
             is {starwar?"yes":'not'} */}
            {starwar?<StarWars/>:<StarWars1/>}
          </Col>
        </Row>
      </Container>
      {/* <StarWars/> */}
    </div>
  );
};

export default About;
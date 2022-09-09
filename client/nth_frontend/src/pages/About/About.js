import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import nthlogo from "../../assets/nth-logo.png";
import StarWars from "./starwars/StarWars.js";

const About = () => {
  return (
    <div className="about-page">
      <Container fluid>
        <Row className="info">
          <Col lg={5} sm={12}>
            <img src={nthlogo} alt="" />
          </Col>
          <Col lg={6} sm={12}>
            {/* <div className="about-us">
              <h4>&lt;about&gt;</h4>
              <div className="content">
                <em>
                  <h4>Bring out the Sherlock in you as The Game Is On!</h4>
                </em>
                <h4>
                  Network Treasure Hunt is an online Treasure Hunt played across
                  the globe. Read between the lines, find the hidden clues and
                  connect the dots. You can use every tool at your disposal.
                  Even with Google and Wikipedia by your side, it's going to be
                  fun and challenging.
                </h4>
                <br />
                <h4>
                  Exert yourself to keep your name on the top and reach the
                  ultimate level to win exciting prizes. The beginning of an
                  enthraling adventure awaits you. A journey which guarantees to
                  leave you with a thirst for more.
                </h4>
              </div>
              <h4>&lt;/about&gt;</h4>
            </div> */}
            <StarWars/>
          </Col>
        </Row>
      </Container>
      {/* <StarWars/> */}
    </div>
  );
};

export default About;
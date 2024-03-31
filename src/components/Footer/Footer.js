import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
// import {useLocation } from 'react-router-dom'
import { Link} from "react-router-dom";
const Footer = () => {

  // const location = useLocation();

  // if (!location.pathname.match("/question")){
    return (
      <div className="footer">
        <Container fluid>
          <Row>
            <Col lg={4} md={12} sm={12}>
              <p className="mt-1">© PICT IEEE Student Branch</p>
            </Col>
            <Col lg={4} md={12} sm={12}>
              <p className="web-team-link mt-1">
              &nbsp;Developed with ♥ by PISB<Link to="/team"> <br/>Web Team</Link>
              </p>
            </Col>
            <Col lg={4} md={12} sm={12}>
            <div >
              <a href="https://www.instagram.com/pisbcredenz/" target="_blank">
                {/* <i className="fab fa-instagram  instagram"></i> */}
                <i class="nes-icon instagram me-5 ms-5"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/pisbieee/"
                target="_blank"
              >
                {/* <i className="fab fa-linkedin-in  linkedin"></i> */}
                <i class="nes-icon linkedin  me-5"></i>
              </a>
              <a href="https://www.facebook.com/pictieee/" target="_blank">
                {/* <i className="fab fa-facebook-f  facebook"></i> */}
                <i class="nes-icon facebook me-5"></i>
              </a>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  // }

  return null;


  
};

export default Footer;
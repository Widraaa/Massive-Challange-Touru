import React from "react";
import "./footer.css";
import { Container, Row, Col } from "reactstrap";

import logo from "../../assets/images/logotouru1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" className="lo">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </Col>

          <Col lg="6">
            <p className="text d-flex align-items-center justify-content-center">
              © Copyright 2023, All Rights Reserved by ngeJASA
            </p>
          </Col>

          <Col lg="2">
            <div className="social__links d-flex align-item-center gap-4">
              <span>
                <link to="#" />
                <i className="ri-twitter-fill"></i>
              </span>
              <span>
                <link to="#" />
                <i className="ri-linkedin-box-fill"></i>
              </span>
              <span>
                <link to="#" />
                <i className="ri-facebook-fill"></i>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

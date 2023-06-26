import React from "react";
import "./common-section-home.css";

import { Container, Row, Col } from "reactstrap";

const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <Container>
        <Row>
          <Col lg="12"></Col>
        </Row>
      </Container>
    </section>
  );
};

export default CommonSection;

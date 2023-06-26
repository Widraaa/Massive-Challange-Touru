import React from "react";
import "./common-section-destination.css";

import { Container, Row, Col } from "reactstrap";

const CommonSectionDestination = ({ title }) => {
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

export default CommonSectionDestination;

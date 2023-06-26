import React from "react";
import HomestayCard from "../shared/HomestayCard";
import tourData from "../assets/data/tours";
import { Col } from "reactstrap";

const HomestayUnggulan = () => {
  return (
    <>
      {tourData?.map((tour) => (
        <Col lg="4" className="mb-4" key={tour.id}>
          <HomestayCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default HomestayUnggulan;

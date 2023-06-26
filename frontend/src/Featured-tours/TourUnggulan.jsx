import React from "react";
import TourCard from "../shared/TourCard";
import tourData from "./../assets/data/tours";
import { Col } from "reactstrap";

const TourUnggulan = () => {
  return (
    <>
      {tourData?.map((tour) => (
        <Col lg="4" className="mb-4" key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default TourUnggulan;

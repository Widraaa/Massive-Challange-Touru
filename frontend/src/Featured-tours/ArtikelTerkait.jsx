import React from "react";
import ArtikelCard from "../shared/ArtikelCard";
import tourData from "../assets/data/tours";
import { Col } from "reactstrap";

const ArtikelTerkait = () => {
  return (
    <>
      {tourData?.map((tour) => (
        <Col lg="6" className="mb-5" key={tour.id}>
          <ArtikelCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default ArtikelTerkait;

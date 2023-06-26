import React from "react";
import TourCard from "../../shared/TourCard";
// import tourData from "./../assets/data/tours";
import { Col } from "reactstrap";

import useFetch from "./../../hooks/useFetch";
import { BASE_URL } from "./../../utils/config";

const TourUnggulan = () => {
  const {
    data: Featuredtourguides,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tourguide/search/getFeaturedtourguide`);

  return (
    <>
      {loading && <h4>Loading.......</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        Featuredtourguides?.map((tour) => (
          <Col lg="4" md="4" sm="6" className="mb-4" key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  );
};

export default TourUnggulan;
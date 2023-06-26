import React from "react";
import ArtikelCard from "../../shared/ArtikelCard";
// import tourData from "../../assets/data/tours";
import { Col } from "reactstrap";
import useFetch from "./../../hooks/useFetch";
import { BASE_URL } from "./../../utils/config";

const ArtikelTerkait = () => {
  const {
    data: destination,
    loading,
    error,
  } = useFetch(`${BASE_URL}/destination/`);
  return (
    <>
      {loading && <h4>Loading.......</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        destination?.map((destination) => (
          <Col lg="6" md="6" sm="6" className="mb-5" key={destination._id}>
            <ArtikelCard destination={destination} />
          </Col>
        ))}
    </>
  );
};

export default ArtikelTerkait;

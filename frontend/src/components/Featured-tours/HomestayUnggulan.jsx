import React from "react";
import HomestayCard from "../../shared/HomestayCard";
// import tourData from "../../assets/data/tours";
import { Col } from "reactstrap";

import useFetch from "./../../hooks/useFetch";
import { BASE_URL } from "./../../utils/config";

const HomestayUnggulan = () => {
  const {
    data: Featuredhomestays,
    loading,
    error,
  } = useFetch(`${BASE_URL}/homestays/search/getFeaturedHomestays`);

  return (
    <>
      {loading && <h4>Loading.......</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        Featuredhomestays?.map((homestay) => (
          <Col lg="4" md="4" sm="6" className="mb-4" key={homestay._id}>
            <HomestayCard homestay={homestay} />
          </Col>
        ))}
    </>
  );
};

export default HomestayUnggulan;

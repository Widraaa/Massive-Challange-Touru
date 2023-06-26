import React, { useState } from "react";
import CommonSection from "./../shared/CommonSectionTour";

import { Container, Row, Col } from "reactstrap";

import { useLocation } from "react-router-dom";
import HomestayCard from "./../shared/HomestayCard";

const SearchResultListHomestay = () => {
  const location = useLocation();

  const [data] = useState(location.state);

  console.log(data);

  return (
    <>
      <CommonSection title={"Homestay Search Result"} />
      <section>
        <Container>
          <Row>
            {/* {data.length === 0 ? (
              <h4 className="text-center">No homestay found</h4>
            ) : (
              data?.map((homestay) => (
                <Col lg="3" className="mb-4" key={homestay._id}>
                  <HomestayCard homestay={homestay} />
                </Col>
              ))
            )} */}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SearchResultListHomestay;

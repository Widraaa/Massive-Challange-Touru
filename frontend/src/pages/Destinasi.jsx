import React, { useState, useEffect } from "react";
import CommonSectionDestination from "../shared/CommonSectionDestination";

import "../styles/tour.css";
// import tourData from "../assets/data/tours";
import DestinasiCard from "./../shared/DestinasiCard";
import SearchBar from "./../shared/SearchBar";
import { Container, Row, Col } from "reactstrap";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Destinasi = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: destination,
    loading,
    error,
  } = useFetch(`${BASE_URL}/destination?page=${page}`);
  const { data: destinationCount } = useFetch(
    `${BASE_URL}/destination/search/getdestinationCount`
  );

  useEffect(() => {
    const pages = Math.ceil(destinationCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, destinationCount, destination]);
  return (
    <>
      <CommonSectionDestination title={"All Destinasi"} />
      <section>
        <Container>
          <Row>
            <h2 className="tourtitle">Destinasi</h2>
            <div className="horizontal"></div>
          </Row>
          <Row className="top">
            <Col lg="7">
              <div className="pilih">
                <p>Pilih lokasi yang kamu inginkan!</p>
              </div>
              <SearchBar />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading.....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              {destination?.map((destination) => (
                <Col
                  lg="3"
                  md="4"
                  sm="6"
                  className="mb-5"
                  key={destination._id}
                >
                  <DestinasiCard destination={destination} />
                </Col>
              ))}
              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};

export default Destinasi;

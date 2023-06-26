import React, { useState, useEffect, useContext } from "react";
import CommonSection from "../shared/CommonSectionTour";

import "../styles/tour.css";
import TourCard from "../shared/TourCard";
import SearchBar from "../shared/SearchBar";
// import tourData from "../assets/data/tours";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

import ModalLogin from "../components/Modals/ModalLogin";
import { AuthContext } from "../context/AuthContext";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const { user } = useContext(AuthContext);

  const [openModal, setOpenModal] = useState(false);
  // const [openModal1, setOpenModal1] = useState(false);

  const {
    data: tours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tourguide?page=${page}`);
  const { data: toursCount } = useFetch(
    `${BASE_URL}/TourGuide/search/getTourGuideCount`
  );

  useEffect(() => {
    const pages = Math.ceil(toursCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, toursCount, tours]);

  return (
    <>
      <CommonSection title={"All Tour Guide"} />
      <section>
        <Container>
          <Row>
            <h2 className="tourtitle"> Tour Guide</h2>
            <div className="horizontal"></div>
          </Row>
          <Row className="top">
            <Col xxl="7">
              <div className="pilih">
                <p>Pilih Tour Guide yang kamu inginkan!</p>
              </div>
              <SearchBar />
            </Col>

            <Col xxl="5">
              <div className="pilih1">
                <p>Apakah kamu mau mendaftarkan Tour Guide?</p>
              </div>
              <div className="daftar">
                {/*START MODALS LOGIN*/}
                <div>
                  {user ? (
                    <>
                      <Link to="/upload/tourguide">
                        Daftar menjadi Tour Guide
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        onClick={() => {
                          setOpenModal(true);
                        }}
                      >
                        Daftar menjadi Tourguide
                      </Link>
                      {openModal && <ModalLogin closeModal={setOpenModal} />}
                    </>
                  )}
                </div>
                {/*END MODALS LOGIN*/}
                {/*<Link to="/upload/tourguide">Daftar menjadi Tour Guide</Link>*/}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          {loading && <h4 className="text-center pt-5">Loading.....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              {tours?.map((tour) => (
                <Col lg="3" md="4" sm="6" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
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

export default Tours;

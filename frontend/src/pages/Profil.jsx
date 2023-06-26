import React, { useState, useEffect } from "react";
import pp from "../assets/images/pp.png";
import "../styles/profil.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import TourCard from "../shared/TourCard";

// import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
const Profil = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  // const { id } = useParams();
  // const { data: user } = useFetch(`${BASE_URL}/users/${id}`);
  // const { username, photo } = user;

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
  }, [
    page,
    toursCount,
    tours,
    // user
  ]);

  return (
    <>
      <section className="head">
        <Container>
          {/* {loading && <h4 className="text-center pt-5">Loading.....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && ( */}
          <Row>
            <Col>
              <div className="image-crop">
                <img src={pp} alt="" />
              </div>
              <div className="bio">
                {/* <h2>{username}</h2> */}
                <button type="button" className="btn btn-primary">
                  <Link to="/editprofil" className="link">
                    Edit Profil
                  </Link>
                </button>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
            </Col>
          </Row>
          {/* )} */}
        </Container>
        <div className="navbar">
          <nav>
            <ul className="nav__links2">
              <li>
                <a href="/users">Tour Guide</a>
              </li>
              <li>
                <a href="/users2">Homestay</a>
              </li>
            </ul>
          </nav>
        </div>
        <section className="pt-0">
          <Container>
            {loading && <h4 className="text-center pt-5">Loading.....</h4>}
            {error && <h4 className="text-center pt-5">{error}</h4>}
            {!loading && !error && (
              <Row>
                {tours?.map((tour) => (
                  <Col lg="3" className="mb-4" key={tour._id}>
                    <TourCard tour={tour} />
                  </Col>
                ))}
              </Row>
            )}
          </Container>
        </section>
      </section>
    </>
  );
};

export default Profil;

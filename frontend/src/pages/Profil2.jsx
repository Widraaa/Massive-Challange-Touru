import React, { useState, useEffect } from "react";
import pp from "../assets/images/pp.png";
import "../styles/profil.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import HomestayCard from "../shared/HomestayCard";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Profil2 = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  // const { user } = useContext(AuthContext);
  // const navigate = useNavigate();

  const {
    data: homestays,
    loading,
    error,
  } = useFetch(`${BASE_URL}/homestays?page=${page}`);
  const { data: homestaysCount } = useFetch(
    `${BASE_URL}/homestays/search/getHomeStayCount`
  );

  useEffect(() => {
    const pages = Math.ceil(homestaysCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, homestaysCount, homestays]);

  return (
    <>
      <section className="head">
        <Container>
          <Row>
            <Col>
              <div className="image-crop">
                <img src={pp} alt="" />
              </div>
              <div className="bio">
                <h2>I Gede Sampoerna</h2>
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
                {homestays?.map((homestay) => (
                  <Col lg="3" className="mb-4" key={homestay._id}>
                    <HomestayCard homestay={homestay} />
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

export default Profil2;

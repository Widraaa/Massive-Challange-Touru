import React, { useState, useEffect, useContext } from "react";
import CommonSection from "../shared/CommonSectionHome";

import "../styles/tour.css";
import HomestayCard from "../shared/HomestayCard";
import SearchBar from "../shared/SearchBar";

import { Container, Row, Col } from "reactstrap";
import { Link, 
  // useNavigate 
} from "react-router-dom";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

import ModalLogin from "../components/Modals/ModalLogin";
import { AuthContext } from "../context/AuthContext";

const Homestay = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const { user } = useContext(AuthContext);

  const [openModal, setOpenModal] = useState(false);
  // const [openModal1, setOpenModal1] = useState(false);

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
      <CommonSection title={"All Homestay"} />
      <section>
        <Container>
          <Row>
            <h2 className="tourtitle">Homestay</h2>
            <div className="horizontal"></div>
          </Row>
          <Row className="top">
            <Col xxl="7">
              <div className="pilih">
                <p>Pilih Homestay yang kamu inginkan!</p>
              </div>
              <SearchBar />
            </Col>

            <Col xxl="5">
              <div className="pilih1">
                <p>Apakah kamu mau mendaftarkan Homestay?</p>
              </div>
              <div className="daftar">
                {/*START MODALS LOGIN*/}
                <div>
                  {user ? (
                    <>
                      <Link to="/upload/homestay">Daftar menjadi Homestay</Link>
                    </>
                  ) : (
                    <>
                      <Link
                        onClick={() => {
                          setOpenModal(true);
                        }}
                      >
                        Daftar menjadi Homestay
                      </Link>
                      {openModal && <ModalLogin closeModal={setOpenModal} />}
                    </>
                  )}
                </div>
                {/*END MODALS LOGIN*/}
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
              {homestays?.map((homestay) => (
                <Col lg="3" md="4" sm="6" className="mb-4" key={homestay._id}>
                  <HomestayCard homestay={homestay} />
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

export default Homestay;

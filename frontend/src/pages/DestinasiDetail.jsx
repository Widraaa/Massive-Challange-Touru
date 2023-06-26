import React, { useEffect } from "react";
import "../styles/destinasi-details.css";
import { Container, Row, Col } from "reactstrap";

import { useParams } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const DestinasiDetails = () => {
  const { id } = useParams();
  // fetch data from database
  const {
    data: destination,
    loading,
    error,
  } = useFetch(`${BASE_URL}/destination/${id}`);
  // DESTRUCTURE PROPERTIES DARI OBJEK homestay
  const {
    photo,
    title,
    desc,
    desc1,
    desc2,
    desc3,
    local_price,
    inter_price,
    city,
  } = destination;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [destination]);

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading.....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col>
                <div className="tour__content">
                  <img src={photo} alt="" />
                  <div className="tour__info">
                    <h2>{title}</h2>
                    <div className="= d-flex align-items-center gap-5"></div>
                    <span>
                      <i className="ri-map-pin-line"></i> {city}
                    </span>
                    <div className="tour__extra-details">
                      <span>Domestik Rp.{local_price} /orang</span>
                    </div>
                    <div className="tour__extra-details">
                      <span>Wisatawan Asing Rp.{inter_price} /orang</span>
                    </div>

                    <h5>Deskripsi</h5>
                    <p>{desc}</p>
                    <p>{desc1}</p>
                    <p>{desc2}</p>
                    <p>{desc3}</p>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};

export default DestinasiDetails;

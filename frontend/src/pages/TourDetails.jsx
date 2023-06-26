import React, { useEffect, useRef, useState, useContext } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
// import tourData from "../assets/data/tours";
import calculateAvgRating from "./../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "./../context/AuthContext";
import ModalMobile from "../components/Modals/ModalMobile";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);

  //STATISTIK DATA UNTUK MEMANGGIL API DAN LOAD DATA DARI DATABASE
  // const tour = tourData.find((tour) => tour.id === id);

  // fetch data from database
  const {
    data: tour,
    loading,
    error,
  } = useFetch(`${BASE_URL}/Tourguide/${id}`);
  // console.log(tour);

  //DESTRUCTURE PROPERTIES DARI OBJEK TOUR
  const {
    photo,
    title,
    desc,
    desc1,
    desc2,
    desc3,
    price,
    // address,
    reviews,
    city,
    // maxGroupSize,
  } = tour;
  const urlImages = `http://localhost:4000/images/${photo}`;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  //format date
  const options = { day: "numeric", month: "long", year: "numeric" };

  //submit request ke server
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert("Please Sign in");
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      alert(result.message);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

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
                  {/* <img src={photo} alt="" /> */}
                  <img src={urlImages} alt="homestay-img" />

                  <div className="tour__info">
                    <h2>{title}</h2>
                    <div className="= d-flex align-items-center gap-5">
                      <span className="tour__rating d-flex align-items-center gap-1">
                        <i
                          className="ri-star-fill"
                          style={{ color: "var(--secondary-color)" }}
                        ></i>
                        {calculateAvgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                          "Not rated"
                        ) : (
                          <span>({reviews?.length})</span>
                        )}
                      </span>
                    </div>
                    <span>
                      <i className="ri-map-pin-line"></i> {city}
                    </span>
                    <div className="tour__extra-details">
                      <span>Rp.{price}/orang</span>
                    </div>
                    <h5>Deskripsi</h5>
                    <p>{desc}</p>
                    <p>{desc1}</p>
                    <p>{desc2}</p>
                    <p>{desc3}</p>

                    {/*START MODALS LOGIN*/}
                    <div>
                      <button
                        className="btn primary__btn text-white"
                        onClick={() => {
                          setOpenModal(true);
                        }}
                      >
                        Pesan
                      </button>
                      {openModal && <ModalMobile closeModal={setOpenModal} />}
                    </div>
                    {/*END MODALS LOGIN*/}
                  </div>

                  {/*==========REVIEW=========*/}
                  <div className="tour__reviews mt-4">
                    <h4>Review ({reviews?.length} reviews)</h4>
                    <form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        <span onClick={() => setTourRating(1)}>
                          1<i className="ri-star-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(2)}>
                          2<i className="ri-star-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(3)}>
                          3<i className="ri-star-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(4)}>
                          4<i className="ri-star-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(5)}>
                          5<i className="ri-star-fill"></i>
                        </span>
                      </div>

                      <div className="review__input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="share your though"
                        />
                        {/*START MODALS LOGIN*/}
                        <div>
                          <button
                            className="btn primary__btn text-white"
                            onClick={() => {
                              setOpenModal1(true);
                            }}
                          >
                            Submit
                          </button>
                          {openModal1 && (
                            <ModalMobile closeModal={setOpenModal1} />
                          )}
                        </div>
                        {/*END MODALS LOGIN*/}
                      </div>
                    </form>

                    <ListGroup className="user__reviews">
                      {reviews?.map((review) => (
                        <div className="review__item">
                          <img src={avatar} alt="" />

                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{review.username}</h5>
                                <p>
                                  {new Date(
                                    review.createdAt
                                  ).toLocaleDateString("en-US", options)}
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                {review.rating}{" "}
                                <i className="ri-star-s-fill"></i>
                              </span>
                            </div>
                            <h6>{review.reviewText}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>

                  {/*==========REVIEW=========*/}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};

export default TourDetails;

import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";

import "./homestay-card.css";

const HomestayCard = ({ homestay }) => {
  // console.log(homestay.photo);
  const { _id, title, city, photo, price, featured, reviews } = homestay;

  const { totalRating, avgRating } = calculateAvgRating(reviews);
  const urlImages = `http://localhost:4000/images/${photo}`;
  return (
    <div className="home__card">
      <Card>
        <div className="tour__img">
          {/* <img src={photo} alt="tour-img" /> */}
          <img src={urlImages} alt="homestay-img" />
          {featured && <span> Unggulan</span>}
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> {city}
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <i className="ri-star-fill"></i>{" "}
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not rated"
              ) : (
                <span>({reviews.length})</span>
              )}
            </span>
          </div>

          <h5 className="home__title">
            <Link to={`/homestays/${_id}`}>{title}</Link>
          </h5>

          <div className="card__bottom1 d-flex align-items-center justify-content-between mt-3">
            <h5>
              Rp.{price} <span> /per hari </span>
            </h5>

            <button className="btn booking__btn1">
              <Link to={`/homestays/${_id}`}>Detail Homestay</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default HomestayCard;

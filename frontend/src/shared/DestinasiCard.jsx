import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import "./destinasi-card.css";

const DestinasiCard = ({ destination }) => {
  const { _id, title, photo } = destination;

  return (
    <div className="destinasi__card">
      <Card>
        <div className="destinasi__img">
          <img src={photo} alt="destinasi-img" />
        </div>

        <CardBody>
          <h5 className="destinasi__title">
            <Link to={`/destination/${_id}`}>{title}</Link>
          </h5>

          <div className="card__bottom2 d-flex align-items-center justify-content-between mt-3">
            <button className="btn booking__btn2">
              <Link to={`/destination/${_id}`}>Lebih Banyak</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default DestinasiCard;

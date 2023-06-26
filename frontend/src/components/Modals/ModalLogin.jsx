import React from "react";
import Logo from "../../assets/images/logomodals.png";
import { Link } from "react-router-dom";
import "./modal-login.css";

function ModalMobile({ closeModal }) {
  return (
    <div className="modalBackground1">
      <div className="modalContainer1">
        <div className="closebtn1">
          <button onClick={() => closeModal(false)}>
            <i className="ri-close-fill"></i>
          </button>
        </div>
        <div className="img__logo1">
          <img src={Logo} alt="" />
        </div>

        <div className="text1">
          <h5>Kamu tidak memiliki akses. Masuk terlebih dahulu</h5>
        </div>
        <div className="tombol1">
          <button onClick={() => closeModal(false)}>
            <Link className="link" to="/login">
              Masuk
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalMobile;

import React from "react";
import Logo from "../../assets/images/logomodals.png";
import "./modal-mobile.css";

function ModalMobile({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="closebtn">
          <button onClick={() => closeModal(false)}>
            <i className="ri-close-fill"></i>
          </button>
        </div>
        <div className="img__logo">
          <img src={Logo} alt="" />
        </div>

        <div className="text">
          <h5>
            Untuk lebih lanjut silahkan Download aplikasi TOUR’U melalui
            Playstore.
          </h5>
        </div>
        <div className="tombol">
          <button onClick={() => closeModal(false)}>Oke</button>
        </div>
      </div>
    </div>
  );
}

export default ModalMobile;

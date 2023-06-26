import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/upload-homestay.css";

import { useNavigate } from "react-router-dom";
// import { AuthContext } from "./../context/AuthContext";
import { BASE_URL } from "./../utils/config";

const UploadHomestay = () => {
  const [title, setTitle] = useState("");
  // const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [maxGroupSize, setMaxGroupSize] = useState("");
  const [photo, setPhoto] = useState("");
  const [photoDefault, setPhotoDefault] = useState(
    "https://fakeimg.pl/200x200"
  );
  const onChange = (e) => {
    //
    if (e.target.id === "title") {
      setTitle(e.target.value);
    }
    // if (e.target.id === "username") {
    //   setUsername(e.target.value);
    // }
    if (e.target.id === "city") {
      setCity(e.target.value);
    }
    if (e.target.id === "price") {
      setPrice(e.target.value);
    }
    if (e.target.id === "desc") {
      setDesc(e.target.value);
    }
    if (e.target.id === "maxGroupSize") {
      setMaxGroupSize(e.target.value);
    }
    if (e.target.id === "photo") {
      let file = e.target.files[0];
      let imageUrl = URL.createObjectURL(file);
      setPhoto(file);
      setPhotoDefault(imageUrl);
    }
  };
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();

    // uncomment this code when backend is ready
    // you log the data to the console to see if it works
    const formData = new FormData();
    formData.append("title", title);
    // formData.append("username", username);
    formData.append("city", city);
    formData.append("price", price);
    formData.append("desc", desc);
    formData.append("maxGroupSize", maxGroupSize);
    formData.append("photo", photo);

    fetch(`${BASE_URL}/homestays`, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          console.log("res", res);
          navigate("/homestays");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="body">
      <h3 className="Judul__TourGuide">
        Ayo Daftarkan Home Stay Anda <br />
        untuk menjadi bagian dari TOUR'U
      </h3>
      <form
        action=""
        className="d-flex flex-column justify-content-center items-center gap-5"
        onSubmit={onSubmit}
      >
        <div className="d-flex justify-content-center gap-5">
          <div className="form-kiri">
            {/* <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Username"
              required
              id="username"
              onChange={onChange}
            /> */}

            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Nama Homestay"
              required
              id="title"
              onChange={onChange}
            />
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Lokasi"
              required
              id="city"
              onChange={onChange}
            />
            <input
              className="form-control form-control-lg"
              type="number"
              placeholder="Harga/Hari"
              required
              id="price"
              onChange={onChange}
            />
            <textarea
              className="form-control form-control-lg"
              type="text"
              placeholder="Deskripsi"
              required
              id="desc"
              onChange={onChange}
            />
            <input
              className="form-control form-control-lg"
              type="number"
              placeholder="Maksimal Orang"
              required
              id="maxGroupSize"
              onChange={onChange}
            />
          </div>
          <label className="upload-label" htmlFor="photo">
            <span>
              {
                <img
                  src={!photoDefault ? photoDefault : photoDefault}
                  alt="Upload Foto Diri"
                  width={250}
                />
              }
            </span>
            {/* <FontAwesomeIcon icon={faCloudUploadAlt} className="upload-icon" /> */}
            <input
              // ref={fileInputRef}
              className="form-control form-control-lg"
              type="file"
              id="photo"
              accept="image"
              onChange={onChange}
            />
          </label>
        </div>
        <div className="m-auto d-flex gap-3">
          {/* <button className="button-submit m-auto rounded-pill" type="submit">
            Submit
          </button> */}
          {/* <a className="cancel m-auto rounded-pill" href="/tours">
            Cancel
          </a> */}
          {/* sample */}
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UploadHomestay;

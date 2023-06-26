import React, { useRef } from "react";
import "./Search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { BASE_URL } from "./../utils/config";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const locationRef = useRef("");
  const maxGroupSizeRef = useRef(0);
  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locationRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || maxGroupSize === "") {
      return alert("Semua kolom wajib diisi!");
    }

    const res = await fetch(
      `${BASE_URL}/homestays/search/getHomeStayBySearch?city=${location}&maxGroupsSize=${maxGroupSize}`
    );
    console.log(location);
    console.log(maxGroupSize);

    if (!res.ok) alert("Something went wrong");

    const result = await res.json();

    navigate(
      `/homestays/search?city=${location}&maxGroupSize=${maxGroupSize}`,
      {
        state: result.data,
      }
    );
  };

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Lokasi</h6>
              <input
                type="text"
                placeholder="Anda mau kemana?"
                ref={locationRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-team-line"></i>
            </span>
            <div>
              <h6>Maks Orang</h6>
              <input type="number" placeholder="0" ref={maxGroupSizeRef} />
            </div>
          </FormGroup>
          <span className="search__icon" type="submit" onClick={searchHandler}>
            <i className="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;

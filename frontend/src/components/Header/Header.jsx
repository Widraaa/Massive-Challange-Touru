import React, { useRef, useEffect, useContext } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";

import logo from "../../assets/images/logotouru.png";
import "./Header.css";

import { AuthContext } from "./../../context/AuthContext";
import { BASE_URL } from "../../utils/config";
import useFetch from "../../hooks/useFetch";

const nav__links = [
  {
    path: "/home",
    display: "Beranda",
  },
  {
    path: "/destination",
    display: "Destinasi",
  },
  {
    path: "/tours",
    display: "Tour Guide",
  },
  {
    path: "/homestays",
    display: "Homestay",
  },
];

const Header = () => {
  // const { id } = useParams();
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  // const userLocalstorage = JSON.parse(localStorage.getItem("user"));
  // console.log("data user", userLocalstorage);
  // const { _id } = userLocalstorage;
  // const { data: users, loading, error } = useFetch(`${BASE_URL}/users/${_id}`);
  // const { username, tgllahir, nohp, photo } = users;
  // console.log("id user", _id);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [users]);

  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* =============LOGO============= */}
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            {/* ===========LOGO END=========== */}

            {/* ===========MENU START=========== */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* ===========MENU END=========== */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                {user ? (
                  <>
                    <h5 className="mb-0">
                      {/* <Link to={`/users/${_id}`} className="user"> */}
                      <Link to={`/users/`} className="user">
                        {user.username}
                      </Link>
                    </h5>
                    <Button className="btn primary__btn" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn primary__btn">
                      <Link to="/login">Masuk</Link>
                    </Button>
                    <Button className="btn primary__btn">
                      <Link to="/register">Daftar</Link>
                    </Button>
                  </>
                )}
              </div>

              <span className="mobile__menu">
                <i className="ri-menu-line" onClick={toggleMenu}></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

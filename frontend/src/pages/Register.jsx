import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/register.css";
import registerImg from "../assets/images/register.png";

import { AuthContext } from "./../context/AuthContext";
import { BASE_URL } from "./../utils/config";

const Register = () => {
  const [credentials, setCredentials] = useState({
    nohp: undefined,
    tgllahir: undefined,
    username: undefined,
    email: undefined,
    password: undefined,
    // ktp: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    console.log(e.target.id);
  };

  const handleDateInputFocus = (event) => {
    event.target.type = "date";
    event.target.placeholder = "Tanggal Lahir";
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(credentials);
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "content-type": "application/json",
          // "Content-Type": "multipart/form-data",
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();

      if (!res.ok) alert(result.message);

      dispatch({ type: "REGISTER_SUCCESS" });
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="register__container d-flex justify-content-between">
              <div className="register__img">
                <img src={registerImg} alt="" />
                <img src={registerImg} alt="" />
              </div>
              <div className="register__form">
                <h2>Daftar</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Kata Sandi"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      required
                      id="username"
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <input
                      type="date"
                      placeholder="Tanggal Lahir"
                      required
                      id="tgllahir"
                      onChange={handleChange}
                      onFocus={handleDateInputFocus}
                    />
                  </FormGroup>

                  <FormGroup>
                    <input
                      type="string"
                      placeholder="Nomor Hp"
                      required
                      id="nohp"
                      onChange={handleChange}
                    />
                  </FormGroup>

                  {/* <FormGroup className="file-input">
                    <input
                      type="file"
                      placeholder="Upload KTP"
                      required
                      id="ktp"
                      accept=".pdf,.doc,.docx,.jpg"
                      onChange={handleChange}
                    />
                    <label className="file-input-label" htmlFor="noHp"></label>
                  </FormGroup> */}

                  <Button
                    className="auth__btn"
                    type="submit"
                    onChange={handleChange}
                  >
                    Daftar
                  </Button>
                </Form>
                <p>
                  Sudah punya akun? <Link to="/login">Masuk</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;

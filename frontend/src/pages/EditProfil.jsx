import React from "react";
import "../styles/edit-profil.css";
import { Container, Row, Col, FormGroup } from "reactstrap";
import pp from "../assets/images/pp.png";

const EditProfil = () => {
  return (
    <>
      <section className="head">
        <Container>
          <Row>
            <Col lg="6" className="pp">
              <div className="image-crop">
                <img src={pp} alt="" />
              </div>

              <FormGroup className="file-input1">
                <input
                  type="file"
                  placeholder="Ganti Foto"
                  required
                  accept="png, jpeg, jpg, HEIC"
                />
                <label className="file-input1-label" htmlFor="noHp"></label>
              </FormGroup>
            </Col>

            <Col lg="5" className="form">
              <div className="input">
                <h6>Email</h6>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="input">
                <h6>Username</h6>
                <input type="text" className="form-control" />
              </div>
              <div className="input">
                <h6>Nomor Telepon</h6>
                <input type="string" className="form-control" />
              </div>
              <div className="input">
                <h6>Password</h6>
                <input type="password" className="form-control" />
              </div>
              <div className="input">
                <h6>Bio</h6>
                <textarea className="form-control" rows="3"></textarea>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default EditProfil;

import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import Subtitle from "./../shared/Subtitle";
import ekper from "../assets/images/ekper.png";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import HomestayUnggulan from "../components/Featured-tours/HomestayUnggulan";
import TourUnggulan from "../components/Featured-tours/TourUnggulan";
import ArtikelTerkait from "../components/Featured-tours/ArtikelTerkait";
import LayananList from "../services/LayananList";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      {/*====== HERO SECTION START=====*/}
      <section>
        <Container>
          <Row>
            <Col lg="6" data-aos="fade-right">
              <div className="hero__content">
                <h1>
                  <TypeAnimation
                    sequence={[
                      "Temukan pengalaman mengeksplorasi Indonesia bersama TOUR'U",
                      5,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: "50px", display: "inline-block" }}
                    repeat={Infinity}
                  />
                </h1>
                <p>
                  <span className="highlight1">Tour’u</span> membantu kamu
                  menemukan informasi pelayanan jasa Tour Guide dan Homestay
                  yang akan membuat perjalananmu menjadi lebih berkesan.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box" data-aos="fade-left">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box" data-aos="fade-left">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box" data-aos="fade-left">
                <img src={heroImg03} alt="" />
              </div>
            </Col>
            <SearchBar data-aos="zoom-in" />
          </Row>
        </Container>
      </section>
      {/*====== HERO SECTION END=====*/}

      {/* =============== LAYANAN START ==========*/}
      <section>
        <Container data-aos="fade-right">
          <Row>
            <Col lg="3">
              <h2 className="services__title">Layanan yang kami tawarkan</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* =============== LAYANAN END ==========*/}

      {/* =============== PENYEDIA START ==========*/}
      <section>
        <Container data-aos="fade-right">
          <Row>
            <Col lg="3">
              <h2 className="services__title">
                Jadi bagian dari penyedia jasa
              </h2>
            </Col>
            <LayananList />
          </Row>
        </Container>
      </section>
      {/* =============== PENYEDIA END ==========*/}

      {/* =============== ARTIKEL START ==========*/}
      <section>
        <Container data-aos="zoom-in">
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Destinasi"} />
            </Col>
            <ArtikelTerkait />
          </Row>
        </Container>
      </section>
      {/* =============== ARTIKEL END ==========*/}

      {/* =============== HOMESTAY UNGGULAN START ==========*/}
      <section>
        <Container data-aos="zoom-in">
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Homestay Unggulan Kami"} />
            </Col>
            <HomestayUnggulan />
          </Row>
        </Container>
      </section>
      {/* =============== HOMESTAY UNGGULAN END ==========*/}

      {/* =============== EXPERIEES START ==========*/}
      <Container>
        <Row>
          <Col lg="6" className="ex">
            <div className="experience__content">
              <h2>
                <TypeAnimation
                  sequence={[
                    "Dengan tour guide yang berpengalaman, perjalanan mu akan terasa lebih menyenangkan!",
                    5,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "40px", display: "inline-block" }}
                  repeat={Infinity}
                />
              </h2>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box" data-aos="fade-right">
                <span>4k+</span>
                <h6>Pengalaman</h6>
              </div>
              <div className="counter__box" data-aos="zoom-in">
                <span>2k+</span>
                <h6>Trip Sukses</h6>
              </div>
              <div className="counter__box" data-aos="fade-left">
                <span>5k+</span>
                <h6>Warga Lokal</h6>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="experience__img">
              <img src={ekper} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      {/* =============== EXPERIENCES END ==========*/}

      {/* =============== TOUR GUIDE UNGGULAN START ==========*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5" data-aos="fade-ri">
              <Subtitle subtitle={"Tour Guide Unggulan Kami"} />
            </Col>
            <TourUnggulan data-aos="zoom-in" />
          </Row>
        </Container>
      </section>
      {/* =============== TOUR GUIDE UNGGULAN END ==========*/}
    </>
  );
};

export default Home;

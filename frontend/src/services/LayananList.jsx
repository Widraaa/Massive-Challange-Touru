import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Promosikan Tour Guide",
    desc: "Tambahkan layanan Tour Guide.",
  },
  {
    imgUrl: guideImg,
    title: "Promosikan Homestay",
    desc: "Tambahkan layanan Homestay.",
  },
];

const LayananList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />{" "}
        </Col>
      ))}
    </>
  );
};

export default LayananList;

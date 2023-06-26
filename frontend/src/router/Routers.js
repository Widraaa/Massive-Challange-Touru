import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./../pages/Home";
import Tours from "./../pages/Tours";
import Homestay from "../pages/Homestays";
import Destinasi from "../pages/Destinasi";
import TourDetails from "./../pages/TourDetails";
import HomestayDetails from "./../pages/HomestayDetail";
import DestinationDetails from "./../pages/DestinasiDetail";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import SearchResultList from "./../pages/SearchResultList";
import SearchResultListHomestay from "./../pages/SearchResultListHomestay";
import UploadHomestay from "../pages/UploadHomestay";
import UploadTourguide from "../pages/UploadTourguide";
import Profil from "../pages/Profil";
import Profil2 from "../pages/Profil2";
import Edit from "../pages/EditProfil";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/homestays" element={<Homestay />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/homestays/:id" element={<HomestayDetails />} />
      <Route path="/destination/:id" element={<DestinationDetails />} />
      <Route path="/destination" element={<Destinasi />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path="/homestays/search" element={<SearchResultListHomestay />} />
      <Route path="/upload/tourguide" element={<UploadTourguide />} />
      <Route path="/upload/homestay" element={<UploadHomestay />} />
      {/* <Route path="/users/:id" element={<Profil />} />
      <Route path="/users2/:id" element={<Profil2 />} /> */}
      <Route path="/users/" element={<Profil />} />
      <Route path="/users2/" element={<Profil2 />} />

      <Route path="/editprofil/" element={<Edit />} />
    </Routes>
  );
};

export default Routers;

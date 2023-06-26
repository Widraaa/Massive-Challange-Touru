import React from "react";

import Header from "./../Header/Header";
import Routers from "../../router/Routers";
import Footer from "./../Footer/Footer";
import "./layout.css";

const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <div className="jarak">
          <Routers />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

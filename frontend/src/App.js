import React, { useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({duration:1000});
    AOS.refresh();
  }, []);
  return <Layout />;
}

export default App;

import React from "react";
import "../styles/LayoutPage.css";

import Navbar from "../components/Navbar";
import CounterSetion from "../components/CounterSetion";

const LayoutPage = () => {
  return (
    <div className="container-layoutPage">
      <Navbar />
      <CounterSetion />
    </div>
  );
};

export default LayoutPage;

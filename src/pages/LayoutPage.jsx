import React from "react";

import Navbar from "../components/navbar";
import "../styles/layoutPage.css";

const LayoutPage = ({ compon }) => {
  return (
    <div className="container-layoutPage">
      <Navbar />
      <main>{compon}</main>
    </div>
  );
};

export default LayoutPage;

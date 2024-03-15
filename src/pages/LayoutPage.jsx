import React from "react";
import "../styles/layoutPage.css";

import Navbar from "../components/navbar";

const LayoutPage = ({ compon }) => {
  return (
    <div className="container-layoutPage">
      <Navbar />
      <main>{compon}</main>
    </div>
  );
};

export default LayoutPage;

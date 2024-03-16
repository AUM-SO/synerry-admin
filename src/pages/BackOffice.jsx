import React, { useState } from "react";
import Dashboard from "../components/dashboard";

import "../styles/backOffice.css";

const backOffice = () => {
  return (
    <div className="backOffice-page">
      <div className="backOffice-container">
        <Dashboard />
      </div>
    </div>
  );
};

export default backOffice;

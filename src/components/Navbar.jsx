import React from "react";
import Button from "@mui/material/Button";

import "../styles/navbar.css";
import imageLogo from "../assets/Logo.png";

import { Link } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";

const navbar = () => {
  return (
    <div className="navber">
      <div className="container-navbar">
        <Link className="boxlogo" to="/">
          <img src={imageLogo} />
          <h3>Counter Visit.</h3>
        </Link>
        <div className="nav-link">
          <Link to="/profile">
            <p>Profile</p>
          </Link>
          <Link to="/backoffice">
            <ToggleButton type="button">Back Office</ToggleButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default navbar;

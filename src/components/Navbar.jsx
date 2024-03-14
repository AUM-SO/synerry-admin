import React from "react";
import Button from "@mui/material/Button";

import "../styles/Navbar.css";
import imageLogo from "../assets/Logo.png";

import { MdOutlineDiscount } from "react-icons/md";
import { Link } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";

const Navbar = () => {
  return (
    <div className="navber">
      <div className="container-navbar">
        <div className="boxlogo">
          <img src={imageLogo} />
          <h3>Counter Visit.</h3>
        </div>
        <Link to="/backoffice">
          <ToggleButton type="button">Back Office</ToggleButton>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

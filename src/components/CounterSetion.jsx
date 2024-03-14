import React, { useEffect, useState } from "react";

import "../styles/CounterSetion.css";

import Button from "@mui/material/Button";

import { BsGithub } from "react-icons/bs";
import titileVDO from "../assets/TitleVDO.mp4";

import "animate.css";

import {
  getIpAddressUser,
  DetectBrowser,
  SendDataUser,
} from "../service/CounterService";
import axios from "axios";

const CounterSetion = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [dataBrowser, setDataBrowser] = useState({});

  useEffect(() => {
    if (!ipAddress || !dataBrowser) {
      getIpAddressUser()
        .then((result) => {
          setIpAddress(result);
        })
        .catch((err) => {
          console.error(err);
        });

      const browserData = DetectBrowser();
      setDataBrowser(browserData);
    }
  }, []);

  useEffect(() => {
    if (ipAddress && dataBrowser) {
      const userData = {
        ipAddress: ipAddress,
        browserName: dataBrowser.browserName,
        browserVersion: dataBrowser.browserVersion,
        OSName: dataBrowser.OSName,
      };
      SendDataUser(userData);
    }
  }, [ipAddress, dataBrowser]);

  console.log("ipAddress ==>", ipAddress);
  console.log("dataBrowser ==>", dataBrowser);

  return (
    <div className="container-counter">
      <div className="section-title">
        <h1>
          Job Inter View at{" "}
          <span
            style={{ color: "red" }}
            className="animate__animated animate__bounce animate__fadeInDown animate__delay-2s"
          >
            Synerry
          </span>
        </h1>
        <p>
          REACT JS | Nodejs + Swagger API Doc | MongoDB | GoogleCloud |
          Microservice
        </p>
        <div className="buttun-title">
          <Button
            className="githubButton"
            target="_blank"
            href="https://github.com/AUM-SO?tab=repositories&q=&type=&language=&sort="
          >
            <BsGithub />
          </Button>
        </div>
      </div>
      <div className="video-background animate__animated animate__bounce animate__fadeInUp animate__delay-1s">
        <video autoPlay loop muted>
          <source src={titileVDO} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default CounterSetion;

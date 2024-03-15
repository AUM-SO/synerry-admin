import React, { useEffect, useState } from "react";
import "../styles/profileDev.css";
import { Link } from "react-router-dom/dist";
import { FaCode, FaArrowRight } from "react-icons/fa6";
import { SlEmotsmile } from "react-icons/sl";
import { RiDatabase2Line } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import { LuLampDesk } from "react-icons/lu";

import {
  getIpAddressUser,
  DetectBrowser,
  SendDataUser,
} from "../service/counterService";

const profileDev = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [dataBrowser, setDataBrowser] = useState({});

  console.log("dataBrowser ==>", dataBrowser);

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
        deviceType: dataBrowser.deviceType,
        onWeb: "ProfilePage",
      };

      SendDataUser(userData);
    }
  }, [ipAddress, dataBrowser]);

  return (
    <div className="profileDev-page">
      <div className="title-profile">
        <h1 style={{ fontSize: "4.5em" }}>
          My name is <span style={{ color: "red" }}>Oum</span>
        </h1>
        <h1>I'm a Full Stack Developer</h1>
        <p>
          Skilled web developer proficient in front-end and back-end
          development. Passionate about creating user-friendly websites and
          applications. Detail-oriented problem solver committed to staying
          updated with the latest technologies.
        </p>
      </div>
      <div className="section-listcards">
        <div className="container-listCards">
          <div className="Cards">
            <div className="boxIcon">
              <FaCode className="iconCard" />
            </div>
            <h3 className="titleCards">Web Development</h3>
            <p className="contentCards">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              distinctio odit sed ducimus explicabo. Soluta maiores a ipsum ut
              illo.
            </p>
            <Link className="link-seemore">
              <p>see more</p>
              <FaArrowRight />
            </Link>
          </div>
          <div className="Cards">
            <div className="boxIcon">
              <RiDatabase2Line className="iconCard" />
            </div>
            <h3 className="titleCards">DataBase Skill</h3>
            <p className="contentCards">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              distinctio odit sed ducimus explicabo. Soluta maiores a ipsum ut
              illo.
            </p>
            <Link className="link-seemore">
              <p>see more</p>
              <FaArrowRight />
            </Link>
          </div>
          <div className="Cards">
            <div className="boxIcon">
              <SlEmotsmile className="iconCard" />
            </div>
            <h3 className="titleCards">Ready to Develop</h3>
            <p className="contentCards">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              distinctio odit sed ducimus explicabo. Soluta maiores a ipsum ut
              illo.
            </p>
            <Link className="link-seemore">
              <p>see more</p>
              <FaArrowRight />
            </Link>
          </div>
          <div className="Cards">
            <div className="boxIcon">
              <TfiStatsUp className="iconCard" />
            </div>
            <h3 className="titleCards">Passion 300% Up</h3>
            <p className="contentCards">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              distinctio odit sed ducimus explicabo. Soluta maiores a ipsum ut
              illo.
            </p>
            <Link className="link-seemore">
              <p>see more</p>
              <FaArrowRight />
            </Link>
          </div>
          <div className="Cards">
            <div className="boxIcon">
              <LuLampDesk className="iconCard" />
            </div>
            <h3 className="titleCards">Design basic</h3>
            <p className="contentCards">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              distinctio odit sed ducimus explicabo. Soluta maiores a ipsum ut
              illo.
            </p>
            <Link className="link-seemore">
              <p>see more</p>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profileDev;

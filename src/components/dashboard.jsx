import React, { useEffect, useState } from "react";

import { filterUserData } from "../service/adminService";

import TableDatauser from "./tableDataUser";
import ToggleButton from "@mui/material/ToggleButton";

import "../styles/dashbord.css";

// react icon
import { FaRegUser } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import { MdOutlineDiscount } from "react-icons/md";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { SlScreenTablet } from "react-icons/sl";
import { PiDesktopTower } from "react-icons/pi";
import { RiSearchLine } from "react-icons/ri";
import { GrPowerReset } from "react-icons/gr";

const dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [filterData, setFilterData] = useState({
    startTime: null,
    endTime: null,
    date: null,
    onWeb: "All",
  });

  const { startTime, endTime, date, onWeb } = filterData;

  const handleInputChange = (name) => (event) => {
    const value = event.target.value;
    setFilterData({ ...filterData, [name]: value });
  };

  const handleFilterData = () => {
    if (onWeb !== "") {
      filterUserData(filterData)
        .then((result) => {
          setUserData(result.data.userData);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  useEffect(() => {
    filterUserData()
      .then((result) => {
        setUserData(result.data.userData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [!userData]);

  const userDatasCount = Object.keys(userData).length;
  const profilePageVisits = userData.filter(
    (data) => data.onWeb === "ProfilePage"
  );
  const CounterPageVisits = userData.filter(
    (data) => data.onWeb === "CounterVisitPage"
  );

  const MobileDevice = userData.filter((data) => data.deviceType === "Mobile");
  const TabletDevice = userData.filter((data) => data.deviceType === "Tablet");
  const DesktopDevice = userData.filter(
    (data) => data.deviceType === "Desktop"
  );

  const handleResetFilterData = () => {
    const reset = {
      startTime: "",
      endTime: "",
      date: "",
      onWeb: "All",
    };
    setFilterData(reset);

    filterUserData(reset)
      .then((result) => {
        setUserData(result.data.userData);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="dashbord">
      <div className="title-content">
        <div className="subtitle-content">
          <h1>Counter Visit Dashboard</h1>
          <p>Welcome in Dashboard, the data is </p>
          <div className="input-title-content">
            <p>Start</p>
            <input
              type="time"
              value={startTime}
              onChange={handleInputChange("startTime")}
            />
            <p>to</p>
            <input
              type="time"
              value={endTime}
              onChange={handleInputChange("endTime")}
            />
            <input
              type="date"
              value={date}
              onChange={handleInputChange("date")}
            />
            <select
              id="timeSelect"
              value={onWeb}
              onChange={handleInputChange("onWeb")}
            >
              <option value="All" selected>
                All
              </option>
              <option value="CounterVisitPage">CounterVisit Page</option>
              <option value="ProfilePage">Profile Page</option>
            </select>
            <ToggleButton
              type="button"
              className="button-filter"
              onClick={() => handleFilterData()}
            >
              <RiSearchLine />
            </ToggleButton>
            <ToggleButton
              type="button"
              className="button-filter"
              onClick={handleResetFilterData}
            >
              <GrPowerReset />
            </ToggleButton>
          </div>
        </div>
      </div>
      <div className="overviewcards-container">
        <div className="overviewcard">
          <div className="titlecards">
            <FaRegUser style={{ fontSize: "20px", color: "red" }} />
          </div>
          <div className="contentcards">
            <h1>{userDatasCount}</h1>
            <h3>All User Visit</h3>
          </div>
        </div>
        <>
          <div className="overviewcard">
            <div className="titlecards">
              <MdOutlineDiscount style={{ fontSize: "20px", color: "red" }} />
            </div>
            <div className="contentcards">
              <h1>{profilePageVisits.length}</h1>
              <h3>Profile Page</h3>
            </div>
          </div>
          <div className="overviewcard">
            <div className="titlecards">
              <FiLayers style={{ fontSize: "20px", color: "red" }} />
            </div>
            <div className="contentcards">
              <h1>{CounterPageVisits.length}</h1>
              <h3>Counter Visit Page</h3>
            </div>
          </div>
        </>

        <div className="overviewcard">
          <div className="titlecards">
            <HiOutlineDevicePhoneMobile
              style={{ fontSize: "20px", color: "red" }}
            />
          </div>
          <div className="contentcards">
            <h1>{MobileDevice.length}</h1>
            <h3>Mobile Device</h3>
          </div>
        </div>
        <div className="overviewcard">
          <div className="titlecards">
            <SlScreenTablet style={{ fontSize: "20px", color: "red" }} />
          </div>
          <div className="contentcards">
            <h1>{TabletDevice.length}</h1>
            <h3>Tablet Device</h3>
          </div>
        </div>
        <div className="overviewcard">
          <div className="titlecards">
            <PiDesktopTower style={{ fontSize: "20px", color: "red" }} />
          </div>
          <div className="contentcards">
            <h1>{DesktopDevice.length}</h1>
            <h3>Desktop Device</h3>
          </div>
        </div>
      </div>
      <div className="section-content">
        <div className="title-section-content">
          <h1>Table User Visit Website</h1>
        </div>

        <div className="subsection-content">
          <TableDatauser userData={userData} />
        </div>
      </div>
    </div>
  );
};

export default dashboard;

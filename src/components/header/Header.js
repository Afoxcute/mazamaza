import React from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";

//icons
import {
  SearchIcon,
  NotificationIcon,
  ChevronDownIcon,
} from "../Icons/SvgIcons";

//styles
import "./header.css";

//images
import { logo, profileImage, mazaryn } from "../../assets";

const Header = () => {
  return (
    <div id="header" className="z-50">
      <header>
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="w-1/2">
          <Input
            className="search-input"
            placeholder="Search"
            prefix={<SearchIcon />}
          />
        </div>
        <div className="flex justify-between items-center w-1/4">
          <div
            className="flex justify-between items-center p-2.5 bg-lightgray"
            style={{ borderRadius: "10px" }}
          >
            <div
              className="mr-3"
              style={{
                width: 20,
                height: 20,
                objectFit: "cover",
              }}
            >
              <img
                className="rounded-full mr-3"
                src={mazaryn}
                alt="balance"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <span>0.23</span>
          </div>
          <div className="rounded-full bg-lightgray p-1.5 ">
            <NotificationIcon />
          </div>
          <div
            className="flex justify-between items-center bg-lightgray "
            style={{ paddingRight: "10px", borderRadius: "10px" }}
          >
            <img
              src={profileImage}
              alt="profile"
              className="rounded-full mr-3"
              style={{ width: 40, height: 40 }}
            />
            <span className="mr-3" style={{ color: "#585858" }}>
              Auwal Rg
            </span>
            <ChevronDownIcon />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

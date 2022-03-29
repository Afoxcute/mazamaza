import React from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";

//styles
import "./header.css";

//images
import { logo, profileImage, mazaryn } from "../../assets";

export const SearchIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
        stroke="#AAAAAA"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.5 17.5L13.875 13.875"
        stroke="#AAAAAA"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const NotificationIcon = () => {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.3117 20.5829L21.7383 16.9417V9.82806C21.7383 6.19728 19.051 3.18269 15.561 2.66783V1.06099C15.561 0.475045 15.086 0 14.5001 0C13.9141 0 13.4391 0.475045 13.4391 1.06099V2.66777C9.94913 3.18264 7.26181 6.19722 7.26181 9.828V16.9417L4.68846 20.5829C4.19308 21.2837 4.69475 22.2562 5.55484 22.2562H23.4453C24.3036 22.2563 24.8082 21.2852 24.3117 20.5829Z"
        fill="#AAAAAA"
      />
      <path
        d="M14.4999 23.0138C12.8495 23.0138 11.5068 24.3564 11.5068 26.0068C11.5068 27.6572 12.8496 29 14.4999 29C16.1503 29 17.4929 27.6573 17.4929 26.0069C17.4929 24.3565 16.1502 23.0138 14.4999 23.0138Z"
        fill="#AAAAAA"
      />
    </svg>
  );
};

export const ChevronDown = () => {
  return (
    <svg
      width="14"
      height="7"
      viewBox="0 0 14 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L7.28571 6L13 1" stroke="#585858" />
    </svg>
  );
};

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
            <ChevronDown />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

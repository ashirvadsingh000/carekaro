import { Link } from "react-router-dom";
import React, { useCallback, useState } from "react";
import "../assets/css/header.css";
import { IoMdMenu } from "react-icons/io";
import Sidebar from "./Sidebar";
import { FaCircleUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { MdOutlineHelp } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";

const Header = () => {
  const [showSidebar, setShowSideBar] = useState(false);
  const [showProfileDropDownMenu, setShowProfileDropDownMenu] = useState(false);
  const toggleSideBar = () => {
    if (showSidebar) {
      setShowSideBar(false);
    } else {
      setShowSideBar(true);
    }
  };
  const toggleProfileDropDownMenu = () => {
    if (showProfileDropDownMenu) {
      setShowProfileDropDownMenu(false);
    } else {
      setShowProfileDropDownMenu(true);
    }
  };

  return (
    <>
      <Sidebar showSidebar={showSidebar} toggleSideBar={toggleSideBar} />
      <div className="header">
        <div className="navbar">
          <div className="left_nav">
            <div
              className="logo"
              style={{
                height: "75px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IoMdMenu
                style={{ fontSize: "40px", color: "black" }}
                onClick={toggleSideBar}
                
              />
            </div>
            <div className="name_logo">
              <span>Rewa </span>
              <span>rdify</span>
              <span>.com</span>
            </div>
            <div className="search_container">
              <form action="">
                <label for="text"></label>
                <input
                  type="text
                    "
                  name="search
                    "
                  id="search"
                  placeholder="What do you want to buy today? Search retailer or website name"
                />
                <button style={{ width: "40px" }}>
                  <FaSearch style={{ fontSize: "20px" }} />
                </button>
              </form>
            </div>
          </div>
          <div className="right_nav">
            <MdOutlineHelp
              style={{ fontSize: "40px", color: "white", cursor: "pointer" }}
            />

            <FaCircleUser
              style={{ fontSize: "40px", color: "white", cursor: "pointer" }}
              onClick={toggleProfileDropDownMenu}
            />
          </div>
        </div>
        <div
          style={{
            display: showProfileDropDownMenu ? "block" : "none",
            overflow: "hidden",
          }}
          className="dropdown-content"
        >
          <a href="" style={{ height: "10px" }}>
            <Link to="/Login">
              {" "}
              <span style={{ width: "25px" }}>
                <FaUserCheck />
              </span>{" "}
              Signin
            </Link>
          </a>
          <a href="" style={{ height: "10px" }}>
            <Link to="/Signup">
              {" "}
              <span style={{ width: "25px" }}>
                <FaUserPlus />
              </span>
              Signup
            </Link>
          </a>
          <a href="" style={{ height: "10px" }}>
            <Link to="./Setting">
              <span style={{ width: "25px" }}>
                <FaUserCog />
              </span>
              Setting
            </Link>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;

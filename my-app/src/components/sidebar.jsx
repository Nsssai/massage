import React from "react";
import "./style3.css";
import logo from '../assets/image/22.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="" className="logo"/>
      <ul className="menu">
        <li className="active">
          <a href="Homeem.html">
            <i className="fa-solid fa-house-chimney"></i>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="financeAdmin.html">
            <i className="fa-solid fa-spa"></i>
            <span>Account</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-bookmark"></i>
            <span>Work</span>
          </a>
        </li>
        <li className="logout">
          <a href="ทดลองHome.html">
            <i className="fa-solid fa-right-from-bracket"></i>
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

import React from "react";
import "./Header.css";
import shopping_logo from "../../images/shopping_logo.png";
import "boxicons";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="logo-wrapper">
        <img className="logo" src={shopping_logo} alt="" />
      </div>

      <div className="pages-wrapper">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="cart_logo">
        <box-icon size="md" name="cart"></box-icon>
      </div>
    </div>
  );
};

export default Header;

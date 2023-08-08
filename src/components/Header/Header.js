import React, { useContext } from "react";
import "./Header.css";
import {UserContext} from "../../utils/UserContext";
import shopping_logo from "../../images/shopping_logo.png";
import "boxicons";
import { Link } from "react-router-dom";


const Header = () => {
  const {userFirstName , userLastName} = useContext(UserContext)
  return (
    <div className="header-wrapper">
      <div className="logo-wrapper">
        <img className="logo" src={shopping_logo} alt="" />
      </div>

      <div className="pages-wrapper">
        <ul>
         <Link className="link" to='/'> <li>Home</li></Link>
         <Link className="link" to='/about'> <li>About</li></Link>
         <Link className="link" to='/login'> <li>Login</li></Link>
        </ul>
      </div>

      <div className="cart_logo">
        <box-icon size="md" name="cart"></box-icon>
      </div>
      <div><p>{userFirstName}{userLastName}</p></div>
    </div>
  );
};

export default Header;

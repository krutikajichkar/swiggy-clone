import React from "react";
import "./Header.css";
import shopping_logo from "../../images/shopping_logo.png";
import "boxicons";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"

const Header = () => {
  const currentUser = useSelector((store) => store?.user?.users[0]);
  const userCart = useSelector((store) => store?.cart?.items[0]);
  console.log(userCart)


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

      {currentUser && <div className="cart_logo">
        <Link className="link" to={`/cart/${currentUser?.id}`}><box-icon size="md" name="cart"></box-icon>
        <span>{(userCart?.products?.length)}</span>
        </Link>
      </div>}
      <div><p className="font-bold">{currentUser?.username?.toUpperCase()}</p></div>
    </div>
  );
};

export default Header;

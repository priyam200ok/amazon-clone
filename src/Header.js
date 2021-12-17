import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ basket }] = useStateValue();
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.freeiconspng.com/thumbs/amazon-icon/amazon-black-icon-16.png"
        />
      </Link>
      <div className="header__search">
        <input className="white-input" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/signin" className="header_Link">
          <div className="header__option">
            <span className="header_optionlineone">Hello username</span>
            <span className="header_optionlinetwo">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header_Link">
          <div className="header__option">
            <span className="header_optionlineone">Returns</span>
            <span className="header_optionlinetwo"> & Orders</span>
          </div>
        </Link>
        <Link to="/" className="header_Link">
          <div className="header__option">
            <span className="header_optionlineone">Your</span>
            <span className="header_optionlinetwo"> Prime</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon style={{ fill: "white" }} />
            <span className="header_optionlinetwo header_LineCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;

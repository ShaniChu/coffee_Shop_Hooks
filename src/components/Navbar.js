import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../cartIcon.svg";
import coffee from "../coffee.svg";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-warning px-sm-5">
      <ul className="navbar-nav align-itmes-center">
        <li className="nav-item ml-5">
          <Link to="/">
            <div className="nav-item d-flex flex-column">
              <img src={coffee} className="coffee" alt="coffee_logo" />
              <span className="title">my coffee shop</span>
            </div>
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <span className="mr-3">
          <img src={cartIcon} className="cart_logo" alt="cart_image" />
        </span>
      </Link>
    </div>
  );
};

export default Navbar;

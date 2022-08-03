import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
// import Cart from "./Cart";
export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </>
  );
}

import React from "react";
import "./NavBar.css";
import logo from "../../assets/jij_logo.webp";

function NavBar() {
  return (
    <section className="h-wrapper">
      <div className=" flexCenter innerWidth h-container">
        <img className="logo" src={logo} alt="logo" />
        <div className="flexCenter h-menu flex gap-8 ">
          <a href="/" className="menuList  hover:text-white">
            Home
          </a>
          <a href="#Companies" className="menuList  hover:text-white">
            Companies
          </a>
          <a href="#Jobs" className="menuList  hover:text-white">
            Jobs
          </a>
          <a href="#Search" className="menuList  hover:text-white">
            Blog
          </a>

          <a href="#Value" className="menuList  hover:text-white">
            About Us
          </a>
         
          {/* <a href="" className="menuList  hover:text-white">Login</a> */}
          {/* <a href="" className="menuList  hover:text-white">Register</a> */}
          <button className="btn">
            <a href="#Footer"> Contact Us</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default NavBar;

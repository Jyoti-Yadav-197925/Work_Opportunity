

// export default Footer;
import React from "react";
import logo from "../../assets/jij_logo.webp";
import "./Footer.css";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <div id="Footer" className="footer p-20 mb-4 bg-black rounded-10 gap-10 grid grid-cols-5 m-auto items-center justify-center">
      <div>
        <div className="flexCenter innerWidth h-container ">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <p className="text-white pb-13 opacity-70 leading-7">
          "We consistently strive to connect job seekers with the best
          opportunities and help employers find the ideal candidates."{" "}
        </p>
      </div>
      <div className="grid">
        <span className="divTitle text-18 font-semibold pb-6 text-white">
          Company
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-70 hover:opacity-100">
            About Us
          </li>
          <li className="text-white opacity-70 hover:opacity-100">
            Features
          </li>
          <li className="text-white opacity-70 hover:opacity-100">News</li>
          <li className="text-white opacity-70 hover:opacity-100">FAQ</li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitle text-18 font-semibold pb-6 text-white">
          Resources
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-70 hover:opacity-100">
            Account
          </li>
          <li className="text-white opacity-70 hover:opacity-100">
            Support Center
          </li>
          <li className="text-white opacity-70 hover:opacity-100">Feedback</li>
          <li className="text-white opacity-70 hover:opacity-100">Contact Us</li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitle text-18 font-semibold pb-6 text-white">
          Support
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-70 hover:opacity-100">Events</li>
          <li className="text-white opacity-70 hover:opacity-100">Promo</li>
          <li className="text-white opacity-70 hover:opacity-100">Req Demo</li>
          <li className="text-white opacity-70 hover:opacity-100">Careers</li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitle text-18 font-semibold pb-6 text-white">Contact Info</span>
        <div>
          <small className="text-14 text-white">xyz@gmail.com</small>
          <div className="icons flex gap-4 py-4">
            <AiFillInstagram className="bg-white p-18 h-35 w-35 rounded-full icon text-black"/>
            <BsFacebook className="bg-white p-18 h-35 w-35 rounded-full icon text-black"/>
            <AiOutlineTwitter className="bg-white p-18 h-35 w-35 rounded-full icon text-black"/>
            <CiLinkedin className="bg-white p-18 h-35 w-35 rounded-full icon text-black"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

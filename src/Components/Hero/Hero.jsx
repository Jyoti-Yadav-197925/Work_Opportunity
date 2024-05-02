
import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import PartneredOrganization from "../../assets/right_side.jpg";
import CountUp from "react-countup";
import {motion} from "framer-motion";

function Hero() {
  return (
    <section id="/" className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left section */}
        <div className="flexColStart left-hero-content">
          <div className="hero-title">
            <div className="orange_circle" />
            <div className="orange_circle_2" />
            <div className="orange_circle_3" />
            <div className="orange_circle_4" />
            <div className="orange_circle_5" />
            <motion.h1 initial={{y:"2rem",opacity:0}} animate={{y:0, opacity:1}} transition={{duration:2, type:"spring"}}>
              "Unlock Your Potential with Our Platform"
              <br />
              "Connect with Career Opportunities <br /> in Japan"
            </motion.h1>
          </div>
          <div className="flexColStart hero-description">
            <span className="secondaryText">
              "Our platform connects you with career opportunities in Japan's
              dynamic job market".
            </span>
            <span className="secondaryText">
              "Whether you're seeking employment, internships, or career
              advancement, we provide the support you need to succeed."
            </span>
            <span className="secondaryText">
              "Join us today and take the next step towards your professional
              goals!"
            </span>
          </div>
          <div className="flexCenter searchbar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input style={{color:'black'}} type="text" placeholder="Enter Location..." />
            <button className="btn">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColStart stat">
              <span>
                <CountUp start={1957} end={8674} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Exclusive Opportunities</span>
            </div>

            <div className="flexColStart stat">
              <span>
                <CountUp start={1050} end={2724} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Satisfied Clients</span>
            </div>

            <div className="flexColStart stat">
              <span>
                <CountUp end={28} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Career Advancements</span>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="flexCenter right-hero-content">
          <motion.div initial={{x:"7rem", opacity:0}} animate={{x:0,opacity:1}} transition={{duration:3, type:"spring"}} 
          className="image-container">
            <img src={PartneredOrganization} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

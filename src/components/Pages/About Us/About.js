import React from 'react';
import "./About.css";
import miya from "../../../assets/miya.jpg"

function About() {
  return (
   <div className="container">
    <div className="about-us-container">
        <div className="team-members">
            <h2>Our Team</h2>
            <div className="member-card">
                <img src={miya} alt="" className="member-image" />
                <h3 className="member-name">Miya</h3>
                <p className="member-role">Co-Founder</p>
            </div>
        </div>
        <div className="about-us-description">
            <h1 className="about-us-heading">
                About us
            </h1>
            <p>
                With a passion for empowering learners of all ages, our mission is to make education accessible, engaging , and personalized through our cutting-edge education technology platform.
            </p>
        </div>
    </div>
   </div>
  )
}

export default About
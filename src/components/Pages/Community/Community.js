import React from 'react';
import "./Community.css";
import tc from "../../../assets/tc.png"

function Community() {

    const handleClick = () =>{
        window.open("https://youtube.com")
    }
  return (
   <div className="container">
    <div className="start-wrapper">
        <div className="start-img">
            <img src={tc} alt="" />
        </div>
        <div className="start-content">
            <h2 className="section-title">
                Join Our Free Tech Community
            </h2>
            <p>
                Unlock the power of Knowledge and innovation by joining our vibrant and free Whatsapp tech community.
            </p>
            <button onClick={handleClick} className="register-btn">Join Now</button>
        </div>
    </div>
   </div>
  )
}

export default Community
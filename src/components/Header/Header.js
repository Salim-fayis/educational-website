import React from 'react';
import "./Header.css";
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';

function Header() {


    const nav_title =[{
        Path:"/",display:'Home'
    },
    {
        Path:"/services",display:'Services'
    },
    {
        Path:"/courses",display:'Courses'
    },
    {
        Path:"/about",display:'About Us'
    },

]

  return (
    <header className='header'>
        <div className="container">
           <div className="nav_container">
            <div className="logo">
                <div className="logo-img">
                    <img src={logo} alt="" />
                </div>
                <h2>Learn Here</h2>
            </div>
            <div className="navigation">
                <ul className='menu'>
                    {
                        nav_title.map((item)=>(
                            <li className='nav_item'><Link to={item.Path}>{item.display}</Link></li>
                        ))
                    }
                </ul>
            </div>
            </div> 
        </div>
    </header>
  )
}

export default Header
import React from 'react'
import { Link } from "react-router-dom";
import about from "../assets/about.jpg"
import aboutlogo from "../assets/logo.png"

const About = () => {
  return (
    <div>
      
    <section className="sub-header">
        <nav>
            <a href="index.html"> <img src={aboutlogo} alt=""/></a>
            <div className="nav-links" id="nav-links">
                <i className="fa fa-times" onClick="hidemenu()"></i>
                <ul>
                      <li><Link to="/">HOME</Link></li>
                                         <li><Link to="/about">ABOUT</Link></li>
                                         <li><Link to="/contact">CONTACT</Link></li>
                                         <li><Link to="/blog">BlOG</Link></li>
                                         <li><Link to="/course">COURSE</Link></li>
                </ul>

            </div>
            <i className="fa fa-bars" onClick="showmenu()"></i>
        </nav>
        <h1>About Us</h1>
       
    </section>

    
    <section className="about-us">
        <div className="about-row">
            <div className="about-col">
                <h1>We are the world's largest University</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim fugit incidunt est, cupiditate illo alias facilis quas? Eum, blanditiis voluptate?</p>
                <a href="" className="cta-btn red-btn">EXPLORE NOW</a>
            </div>

            <div className="about-col">
                <img src={about} alt=""/>
            </div>

        </div>

    </section>
   
    
    

    <section className="footer">
        <h4>About Us</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magni soluta quas recusandae, <br/> excepturi possimus vel dolor itaque corrupti eaque necessitatibus dolorum id labore ipsam architecto voluptates <br/> mollitia eveniet quidem et, nemo dicta rem modi culpa totam! Pariatur, eius voluptatem?</p>
        <div className="icons-aboutus"> 
           <span >📞</span>
            <span >💬</span>
            <span >📱</span>
            <span >✉️</span>
            <p>Made by Chibuihe Victor</p>
        </div>


    </section>









    

    </div>
  )
}

export default About

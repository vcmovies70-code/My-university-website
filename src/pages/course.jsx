import React from 'react'
import { Link } from "react-router-dom";
import contactlogoimg from "../assets/logo.png"
import courselibraryimg from "../assets/library.png"
import courseplaygroundimg from "../assets/basketball.png"
import coursecafeteriaimg from "../assets/cafeteria.png"

const Course = () => {
  return (
    <div>
     
    <section className="sub-header">
        <nav>
            <a href="index.html"> <img src={contactlogoimg} alt=""/></a>
            <div className="nav-links" id="nav-links">
                <i className="fa fa-times" onClick="hidemenu()"></i>
                <ul>
                      <li><Link to="/">HOME</Link></li>
                                         <li><Link to="/about">ABOUT</Link></li>
                                         <li><Link to="/contact">CONTACT</Link></li>
                                         <li><Link to="/blog">BLOG</Link></li>
                                         <li><Link to="/course">COURSE</Link></li>
                </ul>

            </div>
            <i className="fa fa-bars" onClick="showmenu()"></i>
        </nav>
        <h1>Our Courses</h1>
       
    </section>

    
    <section className="course">
        <h1>COURSES WE OFFER</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, earum?</p>

        <div className="row">
            <div className="course-col">
                <h3>Intermediate</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci beatae asperiores odit vel amet eius consequatur commodi ad nam modi?</p>
                

            </div>

              <div className="course-col">
                <h3>Degree</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci beatae asperiores odit vel amet eius consequatur commodi ad nam modi?</p>

            </div>

              <div className="course-col">
                <h3>Post Graduation</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci beatae asperiores odit vel amet eius consequatur commodi ad nam modi?</p>

            </div>

        </div>

    </section>

    

       <section className="facilities">
        <h1>Our Facilities</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, aut?</p>
        <div className="row-3">
            <div className="facilities-col">
                <img src={courselibraryimg} alt=""/>
                <h3>World Class Library</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, numquam.</p>

            </div>

             <div className="facilities-col">
                <img src={courseplaygroundimg} alt=""/>
                <h3>Largest Plaground</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, numquam.</p>

            </div>

             <div className="facilities-col">
                <img src={coursecafeteriaimg} alt=""/>
                <h3>Tasty and Healthy Food</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, numquam.</p>

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

export default Course

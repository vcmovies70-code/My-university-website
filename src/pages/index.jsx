import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import londonimg from "../assets/london.png";
import newyorkimg from "../assets/newyork.png";
import washingtonimg from "../assets/washington.png"
import libraryimg from "../assets/library.png"
import basketballimg from "../assets/basketball.png"
import cafeteriaimg from "../assets/cafeteria.png"

const index = () => {
  return (
    <div>
      
    <section className="header">
        <nav>
            <Link to="/"> <img src={logo} alt=""/></Link>
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
        <div className="text-box">
            <h1>Worlds Biggest University</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non alias veritatis sit eligendi <br/> eum animi officia nesciunt enim ducimus aperiam!</p>
            <a href="" className="hero-btn">Visit us to now more</a>
        </div>
        
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

    

    <section className="campus">
        <h1>Global Campus</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quisquam.</p>
        <div className="row-2">
            <div className="campus-col">
                <img src={londonimg} alt=""/>
                <div className="layer">
                    <h3>LONDON</h3>

                </div>

            </div>

             <div className="campus-col">
                <img src={newyorkimg} alt=""/>
                <div className="layer">
                    <h3>NEW YORK</h3>

                </div>

            </div>

             <div className="campus-col">
                <img src={washingtonimg} alt=""/>
                <div className="layer">
                    <h3>WASHINGTON</h3>

                </div>

            </div>
        </div>

    </section>

    
    <section className="facilities">
        <h1>Our Facilities</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, aut?</p>
        <div className="row-3">
            <div className="facilities-col">
                <img src={libraryimg} alt=""/>
                <h3>World Class Library</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, numquam.</p>

            </div>

             <div className="facilities-col">
                <img src={basketballimg} alt=""/>
                <h3>Largest Plaground</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, numquam.</p>

            </div>

             <div className="facilities-col">
                <img src={cafeteriaimg} alt=""/>
                <h3>Tasty and Healthy Food</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, numquam.</p>

            </div>
        </div>

    </section>

    
    
    <section className="testimonials">
        <h1>What our Student Says</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, quisquam.</p>

        <div className="row-4">
            <div className="testimonial-col">
                <img src="./src/assets/user1.jpg" alt=""/>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, deserunt.</p>
                    <h3>Christine Berkley</h3>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">&#9734;</span>
                    
                </div>


            </div>

             
            <div className="testimonial-col">
                <img src="./src/assets/user2.jpg" alt=""/>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, deserunt.</p>
                    <h3>David Byer</h3>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">&#9734;</span>
                </div>


            </div>
        </div>
    </section>

    
    
    <section className="cta">
        <h1>
            Enroll to our various online courses anywhere in the world
        </h1>
        <a href="" className="cta-btn">CONTACT US</a>

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

export default index


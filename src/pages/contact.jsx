import React from 'react'
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>

    <section className="sub-header">
        <nav>
            <a href="index.html"> <img src="./logo.png" alt=""/></a>
            <div className="nav-links" id="nav-links">
                <i className="fa fa-times" onClick={() => hidemenu()}></i>
                <ul>
                     <li><Link to="/">HOME</Link></li>
                                        <li><Link to="/about">ABOUT</Link></li>
                                        <li><Link to="/contact">CONTACT</Link></li>
                                        <li><Link to="/blog">BLOG</Link></li>
                                        <li><Link to="/course">COURSE</Link></li>
                </ul>

            </div>
            <i className="fa fa-bars" onClick={() => showmenu()}></i>
        </nav>
        <h1>Contact Us</h1>
    </section>

    <section className="location">
       <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d508313.4236757936!2d7.197828318784847!3d5.537534270701965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1786279304523!5m2!1sen!2sng" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </section>

    <section className="contact-us">
        <div className="row-contactus">
            <div className="contact-col">
                <div>
                     <span className="state-icon">
                         🏡
                    </span>
                     <span><h5>No 3 Dauglas road owerri</h5>
                        <p>Owerri Imo State</p></span>
                </div>

                <div>
                    <span className="space-icon">
                        📞
                    </span>
                     <span><h5>+234814281616</h5>
                        <p>Monday to Saturday, 24/7</p></span>
                </div>

                <div>
                    <span className="space-icon">
                        📩
                    </span>
                   <span> <h5>chibuihevictor06@gmail.com</h5>
                        <p>Email us on query</p></span>
                </div>

            </div>
            <div className="contact-col">
                <form action="formhandler.php" method="post">
                    <input type="text" name="Name" placeholder="Enter your Name" required />
                    <input type="Email" name="email" placeholder="Enter your email" required />
                    <input type="text" name="Subect" placeholder="Enter your Subect" required />
                    <textarea rows="8" name="Message" placeholder="Message" required></textarea>
                    <button type="submit" className="cta-btn red-btn">SEND MESSAGE</button>
                    </form>

            </div>

        </div>


    </section>

    <section className="footer">
        <h4>About Us</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magni soluta quas recusandae, <br/> excepturi possimus vel dolor itaque corrupti eaque necessitatibus dolorum id labore ipsam architecto voluptates <br/> mollitia eveniet quidem et, nemo dicta rem modi culpa totam! Pariatur, eius voluptatem?</p>
        <div className="icons-aboutus"> 
           <span>📞</span>
            <span>💬</span>
            <span>📱</span>
            <span>✉️</span>
            <p>Made by Chibuihe Victor</p>
        </div>


    </section>

    </div>
  )
}

export default Contact
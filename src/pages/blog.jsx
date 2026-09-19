import React, { useState } from 'react'
import { Link } from "react-router-dom";
import bloglogoimg from "../assets/bloglogo.png";
import certificateimg from "../assets/certificate.jpg"

const Blog = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const showmenu = () => setMenuOpen(true);
  const hidemenu = () => setMenuOpen(false);

  return (
    <div>

    <section className="sub-header">
        <nav>
            <a href="index.html"> <img src={bloglogoimg} alt=""/></a>
            <div className={`nav-links ${menuOpen ? "show" : ""}`} id="nav-links">
                <i className="fa fa-times" onClick={hidemenu}></i>
                <ul>
                       <li><Link to="/">HOME</Link></li>
                                          <li><Link to="/about">ABOUT</Link></li>
                                          <li><Link to="/contact">CONTACT</Link></li>
                                          <li><Link to="/blog">BlOG</Link></li>
                                          <li><Link to="/course">COURSE</Link></li>
                </ul>

            </div>
            <i className="fa fa-bars" onClick={showmenu}></i>
        </nav>
        <h1>Our Certificate & Online Programs For 2021</h1>

    </section>

    <section className="blog-content">
        <div className="blog-row">
            <div className="blog-left">
                <img src={certificateimg} alt=""/>
                <h2>Our Certificate & Online Programs For 2021</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam vel tempore corrupti nam illum molestiae ipsum iste non. Unde in commodi quos repudiandae maxime. Totam voluptas sapiente sed! Doloremque, odit.</p>
                <br/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam accusamus minima aut tenetur cum amet saepe in iusto ipsa atque cupiditate mollitia beatae consectetur enim totam aperiam, commodi corrupti, dicta iste ducimus sequi, numquam eum? Consectetur autem magnam tenetur quaerat voluptatibus voluptatum omnis error provident maxime? Consequatur a perferendis deleniti?</p>
                <br/>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore harum deleniti autem libero veritatis. Magnam distinctio nihil dolore odio itaque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, amet perferendis illum architecto error tempora, vel aspernatur reiciendis hic tempore nobis laborum quo maiores cumque.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, consectetur quibusdam? Nostrum aperiam iusto aut. Non unde quibusdam aspernatur deleniti.</p>

                <div className="comment-box">
                    <h3>Leave a Comment</h3>

                    <form className="comment-form">
                        <input type="text" placeholder="Enter Name"/>
                        <input type="email" placeholder="Enter Email"/>
                        <textarea rows="5" placeholder="Your Comment"></textarea>
                        <button type="submit" className="cta-btn red-btn">POST COMMENT</button>

                    </form>

                </div>

            </div>
            <div className="blog-right">
                <h3>Post Categories</h3>
                <div>
                    <span>Business Analytics</span>
                    <span>31</span>
                </div>
                <div>
                    <span>Data Science</span>
                    <span>30</span>
                </div>
                <div>
                    <span>Machine Learning</span>
                    <span>29</span>
                </div>
                <div>
                    <span>Computer Science</span>
                    <span>28</span>
                </div>
                <div>
                    <span>Full Stack</span>
                    <span>27</span>
                </div>
                <div>
                    <span>Information Technologyy</span>
                    <span>26</span>
                </div>
                <div>
                    <span>Medicine and Surgery</span>
                    <span>25</span>
                </div>

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

export default Blog
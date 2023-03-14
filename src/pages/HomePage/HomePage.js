import React from "react";
import './HomePage.css'
import { Typewriter } from 'react-simple-typewriter';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

function HomePage() {
    return (
        <div className="home">
            <div className="homeContent">
                <h1>Hi! I Am <span>
                    <Typewriter
                        // cursor
                        loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={50}
                        deleteSpeed={70}
                        delaySpeed={1000}
                        words={['Software Engineer', 'Frontend Engineer', 'Mobile Engineer']}
                    />
                </span> <br />
                    Evans Mogeni
                </h1>
                <p>I’m focused on building responsive Frontend web  and Mobile applications while learning & exploring other technologies.</p>
              
                <div className="social">
                    <a href=""><FaFacebook />  </a>
                    <a href=""><FaInstagram /></a>
                    <a href="https://github.com/"><FaGithub /></a>
                    <a href=""><FaTwitter /></a>
                    <a href=""><FaLinkedin  /></a>
                </div>
            </div>
        </div>
    )
}
export default HomePage;
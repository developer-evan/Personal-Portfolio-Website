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
                <p>I got diverse skills ranging from Frontend Development to Software Development
                    Hello!I work as interface and Full stack  developer. I have passion for Web Development, Mobile Development and UI/UX Designing.
                </p>
                {/* <div className="hire">
                    <button>Hire Me</button>
                  
                </div> */}
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
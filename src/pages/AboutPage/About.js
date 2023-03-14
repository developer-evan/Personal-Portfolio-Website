import React from 'react'
import "./About.css";
import { FaAddressCard, FaArrowRight, FaCss3, FaDatabase, FaHtml5, FaJs, FaPhp, FaReact, FaSlidersH, FaWordpress } from 'react-icons/fa'

function About() {


    return (
        <div className='about'>
            <div className='ab'>
                <h1><FaAddressCard/> About Me</h1>
                <p>Hello! My name is Evans Mogeni, and I'm a Frontend Engineer.
                    I have a diverse set of skills,ranging from Frontend Web $ Mobile Development,
                    to Software Development.
                    I’m a Frontend Engineer specializing in building  Web and Mobile Applications.
                    I’ve been working on web app development for three years now, while still studying at college. Having my own projects, coded mostly in Next JS and React JS, 
                    I have learned a lot while working on these projects. 
                    Now I am looking to get an internship to get some experience, and am glad to be interviewing with you here
                </p>
                <button>
                    <a href='#'>Projects <FaArrowRight/></a>
                </button>
            </div>
          
        </div>
    )
}
export default About
import React from "react";
import './Services.css'


function Services() {
    return (
        <div className="services">
            <h1>Devlopment Skills</h1>
            <div className="main_serv">
                <div className="serv">
                    <img src="images/frontend.jpg" alt="" />
                    <h3>Frontend Web Development</h3>
                    <p>My frontend skills includes knowledge of HTML, CSS, JS, and REACT. I also have knowledge of NEXT JS, TAILWIND, and TYPESCRIPT. With the help of above technologies I have developed some web application which includes GIFT XPRESS, EXPENSE TRACKER, MY PORTFOLIO etc. this projects can be found on projects section,</p>
                </div>
                <div className="serv">

                    <img src="images/mobile.jpg" alt="" />
                    <h3>Mobile Development</h3>
                    <p>I feel Web Designing is a key skills to become a great developer. A UI is the most important think in a web application, because it keeps user engaged and it feels good if you have good web design. Some of my web design work includes GIFT XPRESS, MY PORTFOLIO, TIKTIK etc. which are included on my projects section.</p>
                    <p></p>
                </div>
                <div className="serv">

                    <img src="images/backend.jpg" alt="" />
                    <h3>Software Development</h3>
                    <p>My backend skill include knowledge of NODE JS, EXPRESS JS, MONGODB and NEXT JS etc. I also know how to work with CMS(content management system) like SANITY. With the help this backend knowledge I have developed web applications like SUPER SHARE, TIKTIK, CHAT ME etc. which are included in my project section.</p>
                </div>
            </div>
        </div>
    )
}
export default Services;
import React from "react";
import {
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaLinkedin
} from "react-icons/fa";
import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: 'smooth', // Enables smooth scrolling
    });
  };
  

const Footer = () => {

    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem" onClick={scrollToTop}>Return to Top</li>
                    {/*<li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li> */}
                </ul>
                <div className="infoText">
                    MovieFlix is a comprehensive online platform dedicated to 
                    helping movie enthusiasts discover and explore the 
                    vast world of cinema. Our mission is to provide a 
                    seamless and engaging experience for users to search, 
                    browse, and find information about their favorite movies, 
                    as well as uncover new and exciting titles.
                </div>
                <div className="socialIcons">
                    <span className="icon" onClick={() => window.open('https://github.com/Kapilgupta20', '_blank')}>
                        <FaGithub />
                    </span>
                    {/* <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span> */}
                    <span className="icon" onClick={() => window.open('https://www.linkedin.com/in/kapilgupta20', '_blank')}>
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;

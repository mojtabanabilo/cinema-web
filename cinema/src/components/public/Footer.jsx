import React from 'react';
import AOS from 'aos';
import "../../assets/style/Footer.scss";
import 'aos/dist/aos.css';

// icons
import youtube from "../../assets/icon/icons8-youtube-48.png";
import linkedin from "../../assets/icon/icons8-linkedin-48.png";
import googleplus from "../../assets/icon/icons8-google-plus-48.png";
import facebook from "../../assets/icon/icons8-facebook-48.png";
import twitter from "../../assets/icon/icons8-twitter-32.png";

const Footer = () => {
    AOS.init();
    return (
        <div className='footer'>
            <div className='footer-content' data-aos="zoom-in" data-aos-delay="100">
                <h3>Contact Us.</h3>
                <p>Contact us for comments and suggestions.</p>
            </div>
            <ul className="socials" data-aos="zoom-in" data-aos-delay="100">
                <li><img src={twitter} alt='icons'/></li>
                <li><img src={facebook} alt='icons'/></li>
                <li><img src={youtube} alt='icons'/></li>
                <li><img src={googleplus} alt='icons'/></li>
                <li><img src={linkedin} alt='icons'/></li>
            </ul>
            <div className="footer-bottom">
                <p>made with love &#128150; <a href="https://github.com/mojtabanabilo" target='_blank'>me</a></p>
                <div className="footer-menu">
                    <ul className="f-menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
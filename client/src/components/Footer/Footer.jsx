import React from 'react';
import './Footer.css';
import date from './date.js';
// import '../index.css';

function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <i class="fab fa-linkedin-in fa-lg"></i>
                <i class="fab fa-github fa-lg"></i>
                <a style={{ color: "black" }} href="mailto:kylegallard@gmail.com"><i class="fas fa-envelope fa-lg"></i></a>
                <p>© Copyright {date()}</p>
            </div>
        </footer>
    );
};

export default Footer;
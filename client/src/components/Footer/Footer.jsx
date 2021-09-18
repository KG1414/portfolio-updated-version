import React from 'react';
import './Footer.css';
import date from './date.js';
// import '../index.css';

function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <a href="https://www.linkedin.com/in/kylegallard/"><i class="fab fa-linkedin-in fa-lg"></i></a>
                <a href="https://github.com/KG1414"><i class="fab fa-github fa-lg"></i></a>
                <a href="mailto:kylegallard@gmail.com"><i class="fas fa-envelope fa-lg"></i></a>
                <p className="copyright">© Copyright {date()}</p>
            </div>
        </footer>
    );
};

export default Footer;
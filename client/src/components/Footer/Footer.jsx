import React from 'react';
import './Footer.css';
import date from './date.js';

function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <a href="https://www.linkedin.com/in/kylegallard/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin-in fa-lg"></i></a>
                <a href="https://github.com/KG1414" target="_blank" rel='noreferrer'><i className="fab fa-github fa-lg"></i></a>
                <p className="copyright">© Copyright {date()}</p>
            </div>
        </footer>
    );
};

export default Footer;
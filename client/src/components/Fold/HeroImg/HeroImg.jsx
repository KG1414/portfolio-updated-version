import React from 'react';
import './HeroImg.css';
import Typewriter from "typewriter-effect";

function HeroImg() {
    return (
        <section id="hero-image-section">

            <div className="hero-img">
                <div className="hero-text">
                    <h1 className="hero-title">Hi, I'm Kyle.</h1>
                    <h3 className="hero-subtitle"><Typewriter
                        options={{
                            delay: 75,
                            deleteSpeed: 1
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(1000)
                                .typeString("A passionate programmer.")
                                .pauseFor(1000)
                                .deleteChars(22)
                                .typeString("problem solver.")
                                .pauseFor(1000)
                                .deleteChars(15)
                                .typeString("Full Stack Developer.")
                                .start()
                        }}
                    /></h3>
                    <div className="title-buttons">
                        <a href="https://github.com/KG1414" target="_blank" rel='noreferrer'><button type="button" className="btn1 btn btn-dark btn-sm download-button"><i className="hero-ic fab fa-github fa-lg" style={{ padding: "0%" }}></i>
                            Github</button></a>
                        <a href="https://www.linkedin.com/in/kylegallard/" target="_blank" rel='noreferrer'><button type="button" className="btn1 btn btn-dark btn-sm download-button"><i className="hero-ic fab fa-linkedin-in fa-lg" style={{ padding: "0%" }}></i>
                            LinkedIn</button></a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HeroImg;
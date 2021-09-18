import React from 'react';
import './HeroImg.css';

function HeroImg() {
    return (
        <section id="hero-image-section">

            <div className="hero-img">
                <div className="hero-text">
                    <h1 className="hero-title">Hi, I'm Kyle.</h1>
                    <h3 className="hero-subtitle">A Full-Stack Developer</h3>

                    <div class="title-buttons">
                        <a href="https://github.com/KG1414" target="_blank" rel='noreferrer'><button type="button" class="btn1 btn btn-dark btn-sm download-button"><i class="hero-ic fab fa-github fa-lg" style={{ padding: "0%" }}></i>
                            Github</button></a>
                        <a href="https://www.linkedin.com/in/kylegallard/" target="_blank" rel='noreferrer'><button type="button" class="btn1 btn btn-dark btn-sm download-button"><i class="hero-ic fab fa-linkedin-in fa-lg" style={{ padding: "0%" }}></i>
                            LinkedIn</button></a>
                    </div>
                </div>
            </div>

        </section>



    )
}
export default HeroImg;
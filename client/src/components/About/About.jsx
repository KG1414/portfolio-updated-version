import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import './About.css';
import Card from '../Card/Card';
import Detail from '../Card/details.js';
import Weather from '../Weather/Weather.js';

const { id } = Detail;
const cardElements = Detail.length;

const About = () => {
    const [visibleCardCount, setVisibleCardCount] = useState();

    window.addEventListener('load', (event) => {
        if (window.innerWidth < "800") {
            setVisibleCardCount(2);
        } else if (window.innerWidth >= "800") {
            setVisibleCardCount(4);
        }
    });

    useEffect(() => {
        function handleResize() {
            console.log('resized to: ', window.innerWidth)
            if (window.innerWidth < "800") {
                setVisibleCardCount(2);
            } else if (window.innerWidth >= "800") {
                setVisibleCardCount(4);
            }
        }

        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    });

    return (
        <section className="about" id="about-section">
            <div className="about-container">
                <h2 className="section-heading"><i className="fas fa-laptop-code"></i>About Me</h2>
                <hr />
                <h3>I'm Kyle, a Full Stack Developer based in Melbourne, Australia.</h3>
                <p style={{ color: "grey", fontSize: "18px", fontWeight: "initial" }}>My goal is to build functional products that can solve problems, improve efficiency and give a great user experience.</p>
            </div>

            <Weather />


            <Carousel visibleCardCount={visibleCardCount} totalElements={cardElements} >
                <Card key={id} />
            </Carousel>
        </section>
    );
};

export default About;
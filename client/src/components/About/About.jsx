import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import './About.css';
import Card from '../Card/Card';
import Detail from '../Card/details.js';

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
            if (window.innerWidth < "800") {
                setVisibleCardCount(2);
            } else if (window.innerWidth >= "800") {
                setVisibleCardCount(4);
            }
        };
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        };
    });

    return (
        <section className="about" id="about-section">
            <div className="about-container">
                <h2 className="section-heading">About Me</h2>
                <hr />
                <h3 style={{ textAlign: "center" }}>I'm Kyle, a Full Stack Developer based in Melbourne, Australia.</h3>
                <br />
                <p>I build functional products to solve problems, improve efficiency and provide a great user experience.</p>
                <br />
                <p><i>My inspiration to program is so that I can turn great ideas into valuable products and/or services.</i></p>
                <h2 className="section-heading" style={{ paddingTop: "40%", marginBottom: "0%", overflow: "none" }}>Tech Stack</h2>
            </div>
            <Carousel visibleCardCount={visibleCardCount} totalElements={cardElements} >
                <Card key={id} />
            </Carousel>
        </section>
    );
};

export default About;
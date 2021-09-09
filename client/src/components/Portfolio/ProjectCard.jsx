import React from 'react';
import projectData from './projectData.js';

import './Projects.css';

const ProjectCard = () => {
    return (
        projectData.map((data, index) => {
            return (
                <div key={index} id={data.id}>



                    <div className={data.id % 2 === 0 ? "project-wrapper" : "project-wrapper-two"}>



                        <div className="info-wrapper" id="parent">

                            <div className="project-outer" id="title-mobile"><h3 className="project-title">{data.projectTitle}</h3></div>
                            <div className="info" id="description"><p>{data.projectDescription}</p></div>
                            <div className="info" id="more-info"><a href="/">More info</a></div>
                        </div>


                        <div className="outer-img-wrapper">
                            <div className="projects-img-wrapper">
                                <img src={data.imgUrl} id="img" className="project-img" alt="project-portfolio"></img>
                            </div>
                        </div>

                        <h3 className="title-desktop">{data.projectTitle}</h3> {/* This is hidden on desktop and appears on top of card on mobile due to column-reverse */}

                    </div>

                </div>
            )
        })
    )
};

export default ProjectCard;
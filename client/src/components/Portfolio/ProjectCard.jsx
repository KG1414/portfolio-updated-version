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

                            <div className="card-img-overlay border-dark" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h3 className="card-title project-card-title" id="title-mobile">{data.projectTitle}</h3>
                                    <h6 className="card-subtitle mb-2 text-muted info">Card subtitle</h6>
                                    <p className="card-text description-info info">{data.projectDescription}</p>
                                    <a href="/" class="card-link">Card link</a>
                                    <a href="/" class="card-link">Another link</a>

                                </div>
                            </div>
                        </div>

                        <div className="outer-img-wrapper">
                            <div className="projects-img-wrapper">
                                <img className="project-img" src={data.imgUrl} id="img" alt="project-portfolio"></img>
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
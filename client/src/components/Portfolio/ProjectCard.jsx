import React, { useState } from 'react';
import projectData from './projectData.js';
import './Projects.css';
const bootstrap = require('bootstrap');

const ProjectCard = () => {
    const [wrapText, setWrapText] = useState(false);

    window.addEventListener('load', (event) => {
        if (window.innerWidth < "800") {
            setWrapText(true);
        }
    });

    var toastTrigger = document.getElementById('liveToastBtn')
    var toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
        toastTrigger.addEventListener('click', function () {
            var toast = new bootstrap.Toast(toastLiveExample)
            toast.show()
        })
    };

    return (
        projectData.map((data, index) => {
            return (
                <div key={index} id={data.id}>
                    <div className={data.id % 2 === 0 ? "project-wrapper" : "project-wrapper-two"}>

                        <div className="info-wrapper" id="parent">
                            <div className="card-img-overlay border-dark">
                                <div className="card-body project-body">

                                    <h3 className="card-title project-card-title" id="title-mobile">{data.projectTitle}</h3>
                                    {/* <h6 className="card-subtitle mb-2 text-muted info">{data.subTitle}</h6> */}
                                    <p className="card-text description-info info">{!wrapText ? <button type="button" className="btn btn-primary" id="liveToastBtn">Info</button> : data.projectDescription}</p>

                                    <div className="toasty position-fixed bottom-0 end-0 p-3" style={{ zIndex: "11" }}>
                                        <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                                            <div className="toast-header">
                                                <img src="..." className="rounded me-2" alt="..."></img>
                                                <strong className="me-auto">Bootstrap</strong>
                                                <small>11 mins ago</small>
                                                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                            </div>
                                            <div className="toast-body">
                                                Hello, world! This is a toast message.
                                            </div>
                                        </div>
                                    </div>


                                    <a href={data.linkOne} className="card-link" target="_blank" rel='noreferrer'><span className="cardLink">{data.linkTitleOne}</span></a>
                                    <a href={data.linkTwo} className="card-link" target="_blank" rel='noreferrer'><span className="cardLink">{data.linkTitleTwo}</span></a>
                                    <a href={data.LinkThree} className="card-link" target="_blank" rel='noreferrer'><span className="cardLink">{data.linkTitleThree}</span></a>

                                    <div id="tech-badges">
                                        <span className="badge bg-primary">{data.badgeOne}</span>
                                        <span className="badge bg-primary">{data.badgeTwo}</span>
                                        <span className="badge bg-primary">{data.badgeThree}</span>
                                        <span className="badge bg-primary">{data.badgeFour}</span>
                                        <span className="badge bg-primary">{data.badgeFive}</span>
                                        <span className="badge bg-primary">{data.badgeSix}</span>
                                        <span className="badge bg-primary">{data.badgeSeven}</span>
                                        <span className="badge bg-primary">{data.badgeEight}</span>
                                        <span className="badge bg-primary">{data.badgeNine}</span>
                                        <span className="badge bg-primary">{data.badgeTen}</span>
                                    </div>

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

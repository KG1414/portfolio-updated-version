import React, { useState, useEffect } from 'react';
import projectData from './projectData.js';
import './Projects.css';

// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
};

const ProjectCard = () => {
    const [wrapText, setWrapText] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null);

    const expandModal = (project) => {
        console.log("this console log " + project.projectTitle + " " + project.projectDescription)
        setSelectedProject(project);
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setSelectedProject(null);
        setModalIsOpen(false);
    }

    window.addEventListener('load', (event) => {
        if (window.innerWidth < "1100") {
            setWrapText(1);
        } else if (window.innerWidth >= "1100") {
            setWrapText(2);
        }
    });

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < "1000") {
                setWrapText(1);
            } else if (window.innerWidth >= "1000") {
                setWrapText(2);
            }
        }

        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    });

    return (
        <div>
            {projectData.map((data, index) => {

                return (
                    <div key={index} id={data.id}>
                        <div className={data.id % false === 0 ? "project-wrapper" : "project-wrapper-two"}>

                            <div className="info-wrapper" id="parent">
                                <div className="card-img-overlay border-dark">
                                    <div className="card-body project-body">

                                        <h3 className="card-title project-card-title" id="title-mobile">{data.projectTitle}</h3>
                                        {/* <h6 className="card-subtitle mb-2 text-muted info">{data.subTitle}</h6> */} {/* Removed subtitle*/}

                                        <div style={{ marginBottom: "10px" }}>{wrapText === 1 ?
                                            <div>
                                                <p style={{ display: "inline-block" }} className="card-text description-info info">{data.projectDescription.substring(0, 100) + " ... "}<span role="button" style={{ display: "inline", color: "#0d6efd" }} onClick={() => expandModal(data)}>read more</span></p>
                                            </div>
                                            : <p style={{ display: "inline-block" }} className="card-text description-info info">{data.projectDescription.substring(0, 200) + " ... "}<span role="button" style={{ display: "inline", color: "#0d6efd" }} onClick={() => expandModal(data)}>read more</span></p>}</div>

                                        <a href={data.linkOne} className="card-link" target="_blank" rel='noreferrer'><span className="cardLink card-link-info">{data.linkTitleOne}</span></a>
                                        <a href={data.linkTwo} className="card-link" target="_blank" rel='noreferrer'><span className="cardLink card-link-info">{data.linkTitleTwo}</span></a>
                                        <a href={data.LinkThree} className="card-link" target="_blank" rel='noreferrer'><span className="cardLink card-link-info">{data.linkTitleThree}</span></a>

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
            })}

            <Modal
                // open={open}
                open={modalIsOpen}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" className="card-title project-card-title" variant="h6" component="h2">
                        {selectedProject && selectedProject.projectTitle}
                    </Typography>

                    <Typography className="modal-modal-description" sx={{ mt: 2 }}>
                        {selectedProject && selectedProject.projectDescription}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default ProjectCard;

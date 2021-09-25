import React, { useState, useEffect } from 'react';
import projectData from './projectData.js';
import './Projects.css';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ProjectCard = () => {
    const [wrapText, setWrapText] = useState();
    // const [open, setOpen] = useState(false);

    // const [selectedProject, setSelectedProject] = useState(null);

    // const handleOpen = (project) => {
    //     setSelectedProject(project);
    //     setOpen(true);
    // }

    // const handleClose = () => {
    //     setSelectedProject(null);
    //     setOpen(true);
    // }


    //////////////////////
    var defaultProject = {
        id: 7,
        num: 7,
        projectTitle: "Sample App",
        subTitle: "",
        projectDescription: "Sample Description",
        imgUrl: "Sample Img",
        linkTitleOne: "Sample Link",
        linkTitleTwo: "",
        linkOne: "https://github.com/KG1414/security-module",
        linkTwo: "",
        badgeOne: "React",
        badgeTwo: "JS",
        badgeThree: "Express",
        badgeFour: "API",
        badgeFive: "Bootstrap",
        badgeSix: "EJS",
        badgeSeven: "PassportJS",
        badgeEight: "MongoDB",
        badgeNine: "Mongoose",
        badgeTen: ""
    }

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

    //////////////////////

    window.addEventListener('load', (event) => {
        if (window.innerWidth < "800") {
            setWrapText(1);
        } else if (window.innerWidth >= "800") {
            setWrapText(2);
        }
    });

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < "800") {
                setWrapText(1);
            } else if (window.innerWidth >= "800") {
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
                        <div className={data.id % 2 === 0 ? "project-wrapper" : "project-wrapper-two"}>

                            <div className="info-wrapper" id="parent">
                                <div className="card-img-overlay border-dark">
                                    <div className="card-body project-body">

                                        <h3 className="card-title project-card-title" id="title-mobile">{data.projectTitle}</h3>
                                        {/* <h6 className="card-subtitle mb-2 text-muted info">{data.subTitle}</h6> */} {/* Removed subtitle*/}

                                        <div style={{ padding: "0%", margin: "0%" }}>{wrapText === 1 ?

                                            <div>
                                                <p className="card-text description-info info">{data.projectDescription.substring(0, 100) + "..."}</p>
                                                <Button onClick={() => expandModal(data)}>more info</Button>
                                            </div>


                                            : <p className="card-text description-info info">{data.projectDescription}</p>}</div>

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

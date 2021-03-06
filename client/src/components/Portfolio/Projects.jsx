import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects-background">
            <h2 className="projects-heading">Projects<i className="fas fa-laptop-code"></i></h2>
            <ProjectCard />
        </section>
    );
};

export default Projects;
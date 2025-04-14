import React from 'react';
import './Project.css';

const Project = () => {
    return (
        <>
            <h1 className="project-title">My Projects</h1>
            <div className="project">
                <div className="project-container">
                    <div className="project-card">
                        <img src="https://i.imgur.com/5LJ3L7v.png" alt="Project 1" className="project-image" />
                        <h3 className="project-name">Project 1</h3>
                        <p className="project-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.
                        </p>
                        <div className="project-links">
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="project-link">
                                Github
                            </a>
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="project-link">
                                Live Demo
                            </a>
                        </div>
                    </div>
                    {/* Add more project cards here */}
                </div>
                <div className="project-container">
                    <div className="project-card">
                        <img src="https://i.imgur.com/5LJ3L7v.png" alt="Project 1" className="project-image" />
                        <h3 className="project-name">Project 1</h3>
                        <p className="project-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.
                        </p>
                        <div className="project-links">
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="project-link">
                                Github
                            </a>
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="project-link">
                                Live Demo
                            </a>
                        </div>
                    </div>
                    {/* Add more project cards here */}
                </div>
            </div>
        </>
    );
};

export default Project;
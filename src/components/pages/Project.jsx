import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

const Project = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
    };

    // Sample project data
    const projects = [
        {
            id: 1,
            title: "E-commerce Platform",
            description: "A full-stack e-commerce application with React, Node.js, and MongoDB with payment integration.",
            image: "https://i.imgur.com/5LJ3L7v.png",
            github: "https://github.com/",
            demo: "https://example.com"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A productivity application for managing tasks with drag-and-drop functionality and team collaboration.",
            image: "https://i.imgur.com/5LJ3L7v.png",
            github: "https://github.com/",
            demo: "https://example.com"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Real-time weather forecasting application with geolocation and 5-day outlook.",
            image: "https://i.imgur.com/5LJ3L7v.png",
            github: "https://github.com/",
            demo: "https://example.com"
        },
        {
            id: 4,
            title: "Social Media Dashboard",
            description: "Analytics dashboard for social media metrics with interactive charts and data visualization.",
            image: "https://i.imgur.com/5LJ3L7v.png",
            github: "https://github.com/",
            demo: "https://example.com"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-brpy-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Back button */}
                <button 
                    onClick={handleBack}
                    className="absolute top-10 left-4 md:left-8 text-white hover:text-gray-300 transition-colors duration-200"
                    aria-label="Back to home"
                >
                    <IoArrowBack className="text-3xl" />
                </button>

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Here are some of my recent works. Each project was built to solve specific problems.
                    </p>
                </div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div 
                            key={project.id}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
                        >
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex space-x-4">
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors duration-200 flex-1 text-center"
                                    >
                                        GitHub
                                    </a>
                                    <a 
                                        href={project.demo} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors duration-200 flex-1 text-center"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;





















































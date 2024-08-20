import React, { useState, useEffect } from 'react';
import './Projects.css';
import LaHistoria1 from '../assets/LaHistoria1.png';
import LaHistoria2 from '../assets/LaHistoria2.png';
import PLock1 from '../assets/PLock1.png';
import PLock3 from '../assets/PLock3.png';
import JournalBot1 from '../assets/JournalBot1.png';
import JournalBot2 from '../assets/JournalBot2.png';

// Example project data
const projectData = [
  {
    title: "La Historia",
    description: "This is a description of Project 1.",
    images: [LaHistoria1, LaHistoria2] 
  },
  {
    title: "PLock",
    description: "This is a description of Project 2.",
    images: [PLock1, PLock3] 
  },
  {
    title: "Journal Bot",
    description: "This is a description of Project 3.",
    images: [JournalBot1, JournalBot2]
  }
];

function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0); // Default to first project
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset the image index when the selected project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProjectIndex]);

  const selectProject = (index) => {
    setSelectedProjectIndex(index);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % projectData[selectedProjectIndex].images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + projectData[selectedProjectIndex].images.length) % projectData[selectedProjectIndex].images.length
    );
  };

  const currentProject = projectData[selectedProjectIndex];

  return (
    <div className="projects">
      <div className="project-buttons">
        {projectData.map((project, index) => (
          <button
            key={index}
            onClick={() => selectProject(index)}
            className="project-button"
          >
            {project.title}
          </button>
        ))}
      </div>
      {currentProject && (
        <div className="project-slideshow">
          <img
            src={currentProject.images[currentImageIndex]}
            alt={currentProject.title}
            className="project-image"
          />
          <div className="project-info">
            <h4>{currentProject.title}</h4>
            <p>{currentProject.description}</p>
          </div>
          <button onClick={prevImage} className="slideshow-button prev-button">
            ◀
          </button>
          <button onClick={nextImage} className="slideshow-button next-button">
            ▶
          </button>
        </div>
      )}
    </div>
  );
}

export default Projects;

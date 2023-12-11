import React, { useState } from "react";
import "./projectCard.css";

const ProjectCard = ({ project }) => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  const toggleSecondImage = () => {
    setShowSecondImage(!showSecondImage);
  };

  return (
    <div className="card-container">
      <div className="project-card">
        <div className="card-img">
          <img src={project.image} alt={project.title} />
          {project.image2 && showSecondImage && (
            <img src={project.image2} alt={project.title} />
          )}
        </div>
        <div className="card-text">
          <div className="card1">
            <h3>{project.title}</h3>
            {project.image2 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                onClick={toggleSecondImage}
                class={`lucide lucide-chevron-${
                  showSecondImage ? "up" : "down"
                }`}
              >
                {showSecondImage ? (
                  <path d="m18 15-6-6-6 6" />
                ) : (
                  <path d="m6 9 6 6 6-6" />
                )}
              </svg>
            )}
          </div>
          {/* <p>{project.description}</p> */}
          <a href={project.link} target="blank">En savoir plus</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

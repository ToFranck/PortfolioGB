import React from "react";
import "./ProjectCardMotion.css";

const ProjectCardMotion = ({ projectm }) => {
  return (
    <>
    
      <div className="card-container">
        <div className="project-cardm">
          <video
            src={projectm.video}
            alt={projectm.title}
            autoPlay
            muted
            loop
            width="300"
            height="300"
          />
           <div className="cardm-text">
          <h3>{projectm.title}</h3>
          {/* <p>{projectm.description}</p> */}
          <a href={projectm.link} target="blank">En savoir plus</a>
          </div>
        </div>
        
      </div>
      
    </>
  );
};

export default ProjectCardMotion;

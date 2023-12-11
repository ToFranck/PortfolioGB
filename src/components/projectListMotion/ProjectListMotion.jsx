import React from "react";
import ProjectCardMotion from "../projectCardMotion/ProjectCardMotion";

const ProjectsListMotion = ({ projectsmotion }) => {
  return (
    <>
    <div className="projects" id="project2">
        <h2>Mes projets Motion Design</h2>
        <p>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.

        </p>
    <div className="projects-list">
      {projectsmotion.map((projectm) => (
        <ProjectCardMotion key={projectm.id} projectm={projectm} />
      ))}
    </div>
    
    </div>
    <div className="line"> </div>
    </>
  );
};

export default ProjectsListMotion;

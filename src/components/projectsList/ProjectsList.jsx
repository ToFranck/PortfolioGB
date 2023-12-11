import React from "react";
import ProjectCard from "../projectCard/projectCard";
import "./ProjectsList.css";

const ProjectsList = ({ projects3d }) => {
  return (
    <>
      <div className="projects" id="project1">
        <h2>Mes projets 3D </h2>
        <p>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.

        </p>
        <div className="projects-list">
          {projects3d.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsList;

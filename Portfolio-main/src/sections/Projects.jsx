import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";

const Projects = () => {
  const [preview, setPreview] = useState(null); // Optional: you can remove this line too if not used in Project

  return (
    <section className="relative c-space section-spacing" id="projects">
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
    </section>
  );
};

export default Projects;

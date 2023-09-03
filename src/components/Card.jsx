import React from "react";
import projects from "../data/projects.json";
const Card = () => {
  return (
    <>
      {projects.map((project) => (
        <article className="border-2 shadow-md shadow-slate-800 border-green-600 rounded-md p-4 h-full flex flex-col justify-between">
          <div>
            <div className="border-2 border-gray-400 mb-4 rounded-md h-36 object-fill">
              <img
                src={project.image}
                alt="project thumbnail"
                className=" object-fill h-full w-full"
              ></img>
            </div>
            <h3 className="font-bold underline decoration-green-600 decoration-4 mb-2">
              {project.title}
            </h3>
            <p className="text-sm mb-4">{project.description}</p>
            <p className="text-sm mb-4 font-medium">
              Tech Stack - {project.tech}
            </p>
          </div>
          <span>
            <a
              href={project.site}
              target="_blank."
              className="mt-12 underline decoration-green-400"
            >
              Live Site
            </a>
            <a
              href={project.github}
              target="_blank."
              className="m-12 underline decoration-green-400"
            >
              Source Code
            </a>
          </span>
        </article>
      ))}
    </>
  );
};

export default Card;

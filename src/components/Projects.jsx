import React, { useState } from "react";
import todo from "../images/todo.jpg";
import myntra from "../images/myntra-clone.png";
import travel from "../images/travel.png";

const projectData = [
  {
    id: 1,
    src: todo,
    l: "https://github.com/srishti-23/todolist/blob/main/README.md",
    href: "https://list23.netlify.app",
    details: "This is a todo list application.A todo List is a tool used to keep track of tasks that need to be completed .This todolist has been created using React Js and Tailwind CSS",
  },
  {
    id: 2,
    src: myntra,
    l: "https://github.com/srishti-23/myntra-clone/blob/main/README.md",
    href: "https://cloneofmyntra.netlify.app",
    details:
      "A Myntra clone is a web application that aims to replicate the functionality and user interface of the Myntra e-commerce platform.it is designed using React js ,cart is managed using redux and UI is managed using Tailwind CSS . ",
  },
  {
    id: 3,
    src: travel,
    l: "https://github.com/srishti-23/travel-website/blob/main/README.md",
    href: "https://exploretgotrip.netlify.app/",
    details: "A simple static travel website named as ExploreGo.his website has been created using HTML and CSS",
  },
];

const Projects = () => {
  const [projectDetails, setProjectDetails] = useState(null);

  const handleProjectClick = (details) => {
    setProjectDetails(details);
  };

  return (
    <div
      name="projects"
      className="w-full h-full bg-gradient-to-b from-black via-black to-gray-800 text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full justify-center ">
        <div>
          <p className="text-4xl  font-bold  border-b-4 border-gray-500 p-2 inline my-8">
            Projects
          </p>
          <p className="py-6">Here are some of my major projects</p>
        </div>
        <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-8 py-12 sm:px-0">
          {projectData.map(({ id, src, href, details,l }) => (
            <div
              key={id}
              className="shadow-md hover:scale-125 duration-500 py-2 rounded-lg border-black "
            >
              {projectDetails === details ? (
                <div>
                  <p>{details}<br></br>
                 <a href={l}> Read more..</a></p>
                  <button onClick={() => setProjectDetails(null)}>Close</button>
                </div>
              ) : (
                <div>
                  <img src={src} alt="" className="w-60 mx-auto" />
                  <p className="flex items-center justify-center ">
                  <button className=" mx-auto px-6 py-3 m-4 duration-200 hover:scale-105 text-center">
                      <a
                        href={href}
                        className=" justify-between items-center w-full text-white space-x-2"
                      >
                        View
                      </a>
                    </button>
                    <button
                      className="mx-auto px-6 py-3 m-4 duration-200 hover:scale-105 text-center "
                      onClick={() => handleProjectClick(details)}
                    >
                      Details
                    </button>
                
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import todo from "../images/todo.jpg"
const project = [
  {
    id: 1,
    src: todo,
    href:'https://list23.netlify.app/'
  },
  {
    id: 2,
    src: todo,
    child:todo,
    href:'https://list23.netlify.app/'

  },
  {
    id: 3,
    src: todo,
    href:'https://list23.netlify.app/'

  },
  {
    id: 4,
    src: todo,
    href:'https://list23.netlify.app/'

  },
];

const Projects = () => {
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
          {project.map(({ id, src,href }) => (
            <div
              key={id}
              className="shadow-md hover:scale-125 duration-500 py-2 rounded-lg border-black "
            >
              <img src={src} alt="" className="w-60 mx-auto" />
              <p className="flex items-center justify-center ">
                <button className=" mx-auto px-6 py-3 m-4 duration-200 hover:scale-105 text-center">
                <a
                href={href}
                className="flex justify-between items-center w-full text-white"
              >
              View
              </a>
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

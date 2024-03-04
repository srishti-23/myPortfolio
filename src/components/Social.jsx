import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const links = [

  {
    id: 1,
    child: (
      <>
        Github <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/srishti-23",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),

    href: "https://www.linkedin.com/in/srishti-tiwari-28877b212/",
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),

    href: "mailto:iamsrishtitiwari.23@gmail.com",
  }
  
];

const Social = () => {
  return (
    <>
       <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
          {links.map(({ id, child, href, style }) => (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 px-4 bg-gray-800 ml-[-100px] hover:ml-[-10px] hover:rounded-md"
                + " " + style}
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Social;

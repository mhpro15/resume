import React from "react";
import Image from "next/image";
import "font-awesome/css/font-awesome.min.css";

const Sidebar = ({ data }) => {
  const { altName, name, role, education, contactLinks } = data;
  return (
    <div className="bg-black flex flex-col content-between w-full h-auto sm:h-screen sm:justify-around sm:w-1/3 sm:fixed ">
      <div className="text-white flex flex-col p-10 items-center">
        <Image
          priority
          width={300}
          height={300}
          className="rounded-full h-full mb-6"
          src="/images/avatar.jpg"
          alt="avatar.jpg"
          aria-label="avatar.jpg"
        />
        <h2 className="my-0 text-center">{name}</h2>
        <h3 className="mb-8 mt-0">{altName}</h3>
        <h4 className="mb-8 text-center">{role}</h4>
        <p className="mb-2 font-noto">{education[0]}</p>
        <p className="mb-2 font-noto">{education[1]}</p>
        <div className="text-white text-center my-8 mb-2 sm:mt-15 ">
          <h3 className="font-righteous mb-0">FIND ME AT</h3>
          <div className="flex flex-row justify-center gap-5 text-3xl mb-2">
            <a
              href={contactLinks?.[0]}
              aria-label={"email link"}
              target="_blank"
            >
              <i className="fa fa-envelope"></i>
            </a>
            <a
              href={contactLinks?.[1]}
              aria-label={"linkedin link"}
              target="_blank"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              href={contactLinks?.[2]}
              aria-label={"github link"}
              target="_blank"
            >
              <i className="fa fa-github"></i>
            </a>
            <a
              href={contactLinks?.[3]}
              aria-label={"leetcode link"}
              target="_blank"
            >
              Leetcode
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

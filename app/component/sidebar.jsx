"use client";

import React, { use, useState } from "react";
import Image from "next/image";
import TypeIt from "typeit-react";
import "font-awesome/css/font-awesome.min.css";

const Sidebar = ({ data }) => {
  const { altName, name, role, location, education, contactLinks } = data;

  return (
    <div className=" bg-black flex flex-col content-between w-full h-auto sm:h-full sm:justify-around sm:w-1/3 sm:fixed ">
      <div className=" sidebar text-white flex flex-col p-10 items-center min-h-[1000px] w-auto">
        <a href="resume.pdf" target="_blank">
          <Image
            priority
            width={2000}
            height={2000}
            className="rounded-full h-full mb-6 avatar sx:w-[300px] sx:h-auto"
            src="/images/avatar2.jpg"
            alt="avatar.jpg"
            aria-label="avatar.jpg"
          />
        </a>
        <h2 className="my-0 text-center">
          <span className="text-yellow">console</span>
          <span className="text-white">.</span>
          <span className="text-salmon">log</span>
          <br />
          <span className="text-blue">("</span>
          <TypeIt
            options={{ loop: true }}
            getBeforeInit={(instance) => {
              instance
                .type("Hi, I'm Myx")
                .pause(750)
                .delete(2)
                .pause(500)
                .type("ạnh Hùnh")
                .pause(500)
                .delete(1)
                .type("g")
                .pause(500)
                .type(" :P")
                .pause(200)
                .delete(3)
                .type("!")
                .pause(1000)
                .delete(19)
                .pause(300)
                .type("or Hung Nguyen")
                .pause(1000)
                .delete(14)
                .type("a Software Developer")
                .pause(1000)
                .delete(20)
                .type("click on my avatar to download my resume")
                .pause(750)
                .delete(40);
              // Remember to return it!
              return instance;
            }}
          />
          <span className="text-blue">");</span>
        </h2>
        <div className="altName inline-block">
          <h3> &gt; </h3>&nbsp;
          <h3 className="mb-8 mt-0 hiro">{altName}</h3>
        </div>

        <h4 className="mb-8 text-center">{role}</h4>

        <p className="mb-2 font-noto">{location}</p>
        <p className="mb-2 font-noto">{education[0]}</p>
        <div className="text-white text-center my-8 mb-2 sm:mt-15 ">
          <h3 className="font-name mb-0">FIND ME AT</h3>
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

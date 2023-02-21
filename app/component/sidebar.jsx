"use client";

import React, { useState } from "react";
import Image from "next/image";
import TypeIt from "typeit-react";
import "font-awesome/css/font-awesome.min.css";

const Sidebar = ({ data }) => {
  const { altName, name, role, education, contactLinks } = data;
  const [instance, setInstance] = useState(null);

  return (
    <div className=" bg-black flex flex-col content-between w-full h-auto sm:h-full sm:justify-around sm:w-1/3 sm:fixed ">
      <div className=" sidebar text-white flex flex-col p-10 items-center">
        <Image
          priority
          width={300}
          height={300}
          className="rounded-full h-full mb-6"
          src="/images/avatar.jpg"
          alt="avatar.jpg"
          aria-label="avatar.jpg"
        />
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
                .type("Hi, I'm Mạng")
                .pause(750)
                .delete(2)
                .pause(500)
                .type("nh Hùnh")
                .pause(500)
                .delete(1)
                .type("g")
                .pause(2000)
                .delete(19)
                .pause(300)
                .type("or Hung Nguyen")
                .pause(2000)
                .move(-11)
                .delete(3)
                .pause(1000)
                .move(11)
                .pause(1000)
                .delete(11)
                .pause(1000);
              setInstance(instance);
              // Remember to return it!
              return instance;
            }}
          />
          <span className="text-blue">");</span>
        </h2>
        <div className="altName">
          <h3> &gt; </h3>&nbsp;
          <h3 className="mb-8 mt-0 hiro">{altName}</h3>
        </div>

        <h4 className="mb-8 text-center">{role}</h4>
        <p className="mb-2 font-noto">{education[0]}</p>
        <p className="mb-2 font-noto">{education[1]}</p>
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

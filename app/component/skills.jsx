"use client";
import React, { useState } from "react";

const Skills = ({ data }) => {
  const [active, setActive] = useState("soft");
  const setBg = (activeTab) =>
    activeTab === active ? "bg-lightGreen" : "bg-grey";
  const setAlign = (side) => (side === "soft" ? "text-left" : "text-right");

  const skillTabs = (
    <div className="flex mt-8" >
      {["soft", "hard"].map((element) => (
        <button
          type="button"
          className={`btn ${setBg(element)} ${setAlign(element)} `}
          key={`${element}btn`}
          onClick={() => setActive(element)}
        >
          {element} SKILLS
        </button>
      ))}
    </div>
  );
  const content = (
    <ul
      className={`flex flex-row flex-wrap content-start list-none py-4 gap-3 ${
        active === "soft" ? "justify-start" : "justify-end"
      }`}
    >
      {data[active]?.map(({ icon, text }) => (
        <li key={text} className="skill flex">
          <span className="icon">{icon}</span>
          {text}
        </li>
      ))}
    </ul>
  );
  return (
    <div>
      {skillTabs}
      {content}
    </div>
  );
};

export default Skills;

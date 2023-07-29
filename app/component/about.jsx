"use client";
import React, { useId, useState } from "react";
import Skills from "./skills";

const About = ({ data, skills }) => {
  const { title, body } = data;
  const id = useId();
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <section>
      <h3>{title}</h3>
      <p className="mb-6 font-Roboto">
      {isReadMore ? body[0].slice(0, 150) :
      body?.map((element, i) => element )
      }
      <span onClick={toggleReadMore} className="cursor-pointer font-bold ">
        {isReadMore ? "...read more" : "    show less"}
      </span></p>
      <br/>
      <Skills data={skills} />
    </section>
  );
};

export default About;

import React, { useId } from "react";
import Skills from "./skills";

const About = ({ data, skills }) => {
  const { title, body } = data;
  const id = useId();
  return (
    <section>
      <h3>{title}</h3>
      {body?.map((element, i) => (
        <p key={`${id}_${i}`} className="mb-6 font-Roboto">
          {element}
        </p>
      ))}
      <Skills data={skills} />
    </section>
  );
};

export default About;

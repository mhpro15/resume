import React from "react";
import { aboutMe, skills, professionalData } from "../data/page-data";

import About from "./component/about";
import Experience from "./component/experience";

const page = () => {
  return (
    <div>
      <About data={aboutMe} skills={skills} />
      <Experience data={professionalData} />
      <footer className="text-center font-noto">
        Copyright&copy; Hung Nguyen 2023
      </footer>
    </div>
  );
};

export default page;

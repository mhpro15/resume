import React from "react";
import { aboutMe, skills, professionalData } from "../data/page-data";
import Crawling from "./component/crawling";
import About from "./component/about";
import Experience from "./component/experience";

const page = () => {
  return (
    <div className="rightTab">
      <About data={aboutMe} skills={skills} />
      <Experience data={professionalData} />
      <Crawling />
      <footer className="text-center font-noto">
        Copyright&copy; Hung Nguyen 2023
      </footer>
    </div>
  );
};

export default page;

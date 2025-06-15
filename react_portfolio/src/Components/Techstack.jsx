import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import "./About.css";

const techIcons = [
  <CgCPlusPlus />,
  <DiJavascript1 />,
  <TbBrandGolang />,
  <DiNodejs />,
  <DiReact />,
  <SiSolidity />,
  <DiMongodb />,
  <SiNextdotjs />,
  <DiGit />,
  <SiFirebase />,
  <SiRedis />,
  <SiPostgresql />,
  <DiPython />,
  <DiJava />,
];

function TechstackScroll() {
  const allIcons = [...techIcons, ...techIcons];

  return (
    <div className="tech-scroll-wrapper">
      <div className="tech-scroll-track">
        {allIcons.map((icon, index) => (
          <div className="tech-scroll-card" key={index}>
            <div className="icon-wrapper">{icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechstackScroll;

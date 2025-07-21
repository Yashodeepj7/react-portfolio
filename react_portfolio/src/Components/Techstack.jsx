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
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiPostman,
  SiGithub,
  SiTailwindcss,
  SiBootstrap,
  SiVite,
  SiExpress,
  SiMysql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import "./About.css";

const techIcons = [
  <SiGithub />,
  <SiPostman />,
  <SiVite />,
  <SiTailwindcss />,
  <SiBootstrap />,
  <DiHtml5 />,
  <DiCss3 />,
  <SiExpress />,
  <SiMysql />,
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
  const firstRowIcons = techIcons.slice(0, Math.ceil(techIcons.length / 2) + 1);
  const secondRowIcons = techIcons.slice(Math.ceil(techIcons.length / 2) + 1);

  return (
    <div className="tech-scroll-wrapper">
      <div className="tech-scroll-row rtl">
        <div className="tech-scroll-track">
          {[...firstRowIcons, ...firstRowIcons].map((icon, index) => (
            <div className="tech-scroll-card" key={`top-${index}`}>
              <div className="icon-wrapper">{icon}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="tech-scroll-row ltr">
        <div className="tech-scroll-track">
          {[...secondRowIcons, ...secondRowIcons].map((icon, index) => (
            <div className="tech-scroll-card" key={`bottom-${index}`}>
              <div className="icon-wrapper">{icon}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechstackScroll;

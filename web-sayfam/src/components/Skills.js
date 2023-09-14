import React, { useContext } from "react";
import js from "../assets/js.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import node from "../assets/node.png";
import vsCode from "../assets/vsCode.png";
import figma from "../assets/figma.png";
import { websiteContext } from "../contexts/webSiteContext.js";
import data from "../data/data";

export default function Skills() {
  const { language, setLanguage, darkModeHandler, darkMode } =
    useContext(websiteContext);

  return (
    <>
      <div className="skills pt-24 flex justify-between bg-white dark:bg-whitedarkmode px-[10%]">
        <p className="skills1 text-purple dark:text-green text-6xl  font-bold  ">
          {data[language].skills.skills}
        </p>
        <div className="skills2">
          <img className="" src={js} alt="js"></img>
          <img className="-mt-[30%]" src={react} alt="react"></img>
          <img className="-mt-[30%]" src={node} alt="node"></img>
        </div>
        <div className="skills3">
          <img className="" src={vsCode} alt="vsCode"></img>
          <img className="-mt-[30%]" src={redux} alt="redux"></img>
          <img className="-mt-[30%]" src={figma} alt="figma"></img>
        </div>
      </div>
    </>
  );
}

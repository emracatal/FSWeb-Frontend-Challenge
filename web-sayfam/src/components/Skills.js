import React from "react";
import js from "../assets/js.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import node from "../assets/node.png";
import vsCode from "../assets/vsCode.png";
import figma from "../assets/figma.png";
import { websiteContext } from "../contexts/webSiteContext.js";

export default function Skills() {
  return (
    <>
      <div className="skills bg-white dark:bg-whitedarkmode flex">
        <p className="text-purple dark:text-green text-6xl ml-72 mr-48 mt-24 font-bold">
          Skills
        </p>
        <div>
          <img className="" src={js} alt="js"></img>
          <img className="-mt-32" src={react} alt="react"></img>
          <img className="-mt-32" src={node} alt="node"></img>
        </div>
        <div>
          <img className="" src={vsCode} alt="vsCode"></img>
          <img className="-mt-32" src={redux} alt="redux"></img>
          <img className="-mt-32" src={figma} alt="figma"></img>
        </div>
      </div>
    </>
  );
}

import React, { useContext } from "react";
import github from "../assets/github.png";
import Linkedin from "../assets/Linkedin.png";
import Linkedindark from "../assets/Linkedindark.png";
import githubdark from "../assets/githubdark.png";
import heroright from "../assets/heroright.png";
import { websiteContext } from "../contexts/webSiteContext.js";
import data from '../data/data'

export default function Header() {
  const { language , languageHandler, darkModeHandler, darkMode } = useContext(websiteContext)
  return (
    <>
      <div className="header flex">
        <div className="header-left bg-purple dark:bg-purpledarkmode min-w-[70%]">
          {/* <p className="text-green text-xl text-right mt-8">TÜRKÇEYE GEÇ</p> */}

          <p  onClick={languageHandler} className="text-green text-xl text-right mt-8 cursor-pointer mr-8">
            <span className="text-green dark:text-BAB2E7">{data[language].header.to}</span>{" "}
            <span className="text-d9">{data[language].header.lang}</span>
          </p>

          <p className="text-green text-3xl ml-72 font-bold">{data[language].header.name}</p>
        </div>
        <div className="header-right bg-green dark:bg-greendarkmode min-w-[30%]">
          <div className="darkmode bg-green dark:bg-greendarkmode">
            <div
              className="flex flex-row gap-2 w-full items-center mt-8 ml-8 cursor-pointer"
              id="NightModeRoot"
            >
              <div
                onClick={darkModeHandler}
                className="bg-[#8f88ff] dark:bg-A3A3A3 self-start flex flex-row justify-end dark:justify-start w-12 shrink-0 h-6 items-center px-1 rounded-[100px]"
              >
                <div
                  className="bg-[#ffe86e] w-4 shrink-0 h-4 rounded-[50%]"
                  id="Ellipse"
                />
                <div
                  className="bg-[#e92577] w-px shrink-0 h-px rounded-[50%]"
                  id="Ellipse1"
                />
              </div>
              <div className="text-xl tracking-[1.5] text-[#4731d3] dark:text-d9 dark:font-normal font-bold">
                {data[language].header.darkmode}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-content flex">
        <div className="hero-left bg-purple dark:bg-purpledarkmode min-w-[70%] self-end ">
          <p className="text-green text-6xl ml-72 mr-48 mt-24 font-bold">
          {data[language].header.title}          </p>
          <p className="text-green text-6xl ml-72 mr-48 font-bold">
          {data[language].header.title2}          </p>
          <p className="text-white text-2xl ml-72 mr-48 mt-12">
          {data[language].header.description}  
          </p>
          <div className="buttons flex ml-72 mb-24 mt-4 gap-4 mr-48">
            <button className="bg-white dark:bg-whitedarkmode dark:border-solid dark:border-2 dark:border-white rounded flex p-2">
            <img className="p-2" src={darkMode ? githubdark : github} alt='github-light'></img>
              <p className="text-purple dark:text-white text-xl p-2">Github</p>
            </button>
            <button className="bg-white dark:bg-whitedarkmode dark:border-solid dark:border-2 dark:border-white rounded flex p-2">
            <img className="p-2" src={darkMode ? Linkedindark : Linkedin} alt='LinkedinLight'></img>
              <p className="text-purple dark:text-white  text-xl p-2">
                Linkedin
              </p>
            </button>
          </div>
        </div>

        <div className="hero-right bg-green dark:bg-greendarkmode min-w-[30%]">
          <img
            className="-ml-64 absolute"
            src={heroright}
            alt="heroright"
          ></img>
        </div>
      </div>
    </>
  );
}

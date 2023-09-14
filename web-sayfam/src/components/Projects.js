import React, { useContext } from "react";
import { websiteContext } from "../contexts/webSiteContext.js";
import data from "../data/data";
import Rectangle41 from "../assets/Rectangle41.png";
import Rectangle42 from "../assets/Rectangle42.png";

export default function Projects() {
  const { language } = useContext(websiteContext);

  return (
    <>
      <div className="projects bg-green dark:bg-greendarkmode px-[10%] pb-24">
        <p className="text-purple dark:text-green text-6xl font-bold pt-24 mb-8 ">
          Projects
        </p>

        <div className="projects1 flex mb-8 ">
          <img
            className="projects1-left"
            src={Rectangle41}
            alt="Rectangle41"
          ></img>
          <div className="projects1-right flex flex-col justify-center px-8 gap-6 text-white bg-white dark:bg-B27272">
            <p className="text-2xl font-bold text-purple dark:text-C1BAED">
              {data[language].projects.project1title}
            </p>
            <p className="text-base text-black dark:text-white">
              {data[language].projects.project1description}
            </p>
            <div className="pills text-white">
              <button className="rounded-full bg-purple dark:bg-softpurple text-white py-2 px-5 mr-2">
                react
              </button>
              <button className="rounded-full bg-purple dark:bg-softpurple text-white py-2 px-5 mr-2">
                react
              </button>
              <button className="rounded-full bg-purple dark:bg-softpurple text-white py-2 px-5 mr-2">
                react
              </button>
            </div>
            <div className="links underline  text-black dark:text-green">
              <a href="https://www.workintech.com" className="mr-5">
                View Site
              </a>
              <a href="https://github.com/emracatal">Github</a>
            </div>
          </div>
        </div>

        <div className="projects2 flex ">
          <img
            className="projects2-left"
            src={Rectangle42}
            alt="Rectangle42"
          ></img>
          <div className="projects2-right flex flex-col justify-center px-8 gap-6 text-white bg-white dark:bg-B27272">
            <p className="text-2xl font-bold text-purple dark:text-C1BAED">
              {data[language].projects.project2title}
            </p>
            <p className="text-base text-black dark:text-white">
              {data[language].projects.project2description}
            </p>
            <div className="pills text-white">
              <button className="rounded-full bg-purple dark:bg-softpurple text-white py-2 px-5 mr-2">
                react
              </button>
              <button className="rounded-full bg-purple dark:bg-softpurple text-white py-2 px-5 mr-2">
                react
              </button>
              <button className="rounded-full bg-purple dark:bg-softpurple text-white py-2 px-5 mr-2">
                react
              </button>
            </div>
            <div className="links underline  text-black dark:text-green">
              <a href="https://www.workintech.com" className="mr-5">
                View Site
              </a>
              <a href="https://github.com/emracatal">Github</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

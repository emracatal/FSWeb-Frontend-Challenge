import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/github.png";
import heroright from "../assets/heroright.png";

export default function Header({ darkModeHandler }) {
  return (
    <>
      <div className="header flex">
        <div className="header-left bg-purple dark:bg-purpledarkmode min-w-[70%]">
          {/* <p className="text-green text-xl text-right mt-8">TÜRKÇEYE GEÇ</p> */}

          <p className="text-green text-xl text-right mt-8 cursor-pointer mr-8">
            <span className="text-green">TÜRKÇE</span>{" "}
            <span style={{ color: "#D9D9D9" }}>'YE GEÇ</span>
          </p>

          <p className="text-green text-3xl ml-72 font-bold">e m r a</p>
        </div>
        <div className="header-right bg-green dark:bg-greendarkmode min-w-[30%]">
          <div className="darkmode bg-green dark:bg-greendarkmode">
            <div
              className="flex flex-row gap-2 w-full items-center mt-8 ml-8 cursor-pointer"
              id="NightModeRoot"
            >
              <div className="bg-[#8f88ff] self-start flex flex-row justify-end w-12 shrink-0 h-6 items-center px-1 rounded-[100px]">
                <div
                                    className="bg-[#ffe86e] w-4 shrink-0 h-4 rounded-[50%]"
                  id="Ellipse"
                />
                <div
                  className="bg-[#e92577] w-px shrink-0 h-px rounded-[50%]"
                  id="Ellipse1"
                />
              </div>
              <div onClick={() => darkModeHandler()} className="text-xl tracking-[1.5] text-[#4731d3] font-bold">
                DARK MODE
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-content flex">
        <div className="hero-left bg-purple dark:bg-purpledarkmode min-w-[70%] self-end ">
          <p className="text-green text-6xl ml-72 mr-48 mt-24 font-bold">
            I am a Frontend
          </p>
          <p className="text-green text-6xl ml-72 mr-48 font-bold">
            Developer...
          </p>
          <p className="text-white text-2xl ml-72 mr-48 mt-12">
            ...who likes to craft solid and scalable frontend products whith
            great user experiences
          </p>
          <div className="buttons flex ml-72 mb-24 mt-4 gap-4 mr-48">
            <button className="bg-white dark:bg-whitedarkmode dark:border-solid dark:border-2 dark:border-white rounded flex p-2">
              <img className="p-2 "  src={github} alt="github"></img>
              <p className="text-purple dark:text-white text-xl p-2">Github</p>
            </button>
            <button className="bg-white dark:bg-whitedarkmode dark:border-solid dark:border-2 dark:border-white rounded flex p-2">
              <img className="p-2" src={linkedin} alt="linkedin"></img>
              <p className="text-purple dark:text-white  text-xl p-2">Linkedin</p>
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

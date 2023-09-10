import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/github.png";
import heroright from "../assets/heroright.png";

export default function Header() {
  return (
    <>
      <div className="header flex">
        <div className="header-left bg-purple min-w-[70%]">
          <p className="text-green text-right">TÜRKÇEYE GEÇ</p>
          <p className="text-green ml-52">EMRA</p>
        </div>
        <div className="header-right bg-green min-w-[30%]">
          <p className="text-purple">DARK MODE</p>
        </div>
      </div>

      <div className="hero-content min-h-screen flex">
        <div className="hero-left bg-purple min-w-[70%]">
          <p className="text-green text-3xl ml-52">
            I am a Frontend Developer...
          </p>
          <p className="text-white ml-52">
            ...who likes to craft solid and scalable frontend products whith
            great user experiences
          </p>
          <div className="buttons flex gap-2 ml-52">
            <button className="bg-white rounded flex">
              <img src={github} alt="github"></img>
              <p className="text-purple">Github</p>
            </button>
            <button className="bg-white rounded flex">
              <img src={linkedin} alt="linkedin"></img>
              <p className="text-purple">Linkedin</p>
            </button>
          </div>
        </div>

        <div className="hero-right bg-green min-w-[30%]">
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

import React from "react";
import twitter from "../assets/twitter.png";
import codepen from "../assets/codepen.png";
import atsign from "../assets/atsign.png";
import instagram from "../assets/instagram.png";

export default function Footer() {
  return (
    <>
          <div className="footer bg-white dark:bg-whitedarkmode flex">
      <div className="footer-content bg-white dark:bg-whitedarkmode ml-96 mr-96">
        <p className="text-purple text-5xl text-center mt-24 mb-6 font-bold">
          Send me a message!
        </p>
        <p className="text-black dark:text-white text-xl text-center mb-6 font-bold">
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
        <p className="text-black dark:text-purple text-xl text-center mb-6 font-bold">
          emracatal@gmail.com
        </p>
        <div className="flex justify-center">
          <img className="" src={twitter} alt="twitter"></img>
          <img className="" src={codepen} alt="codepen"></img>
          <img className="" src={atsign} alt="atsign"></img>
          <img className="" src={instagram} alt="instagram"></img>
        </div>
      </div>
      </div>
    </>
  );
}

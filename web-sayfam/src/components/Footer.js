import React, { useContext } from 'react'
import twitter from "../assets/twitter.png";
import codepen from "../assets/codepen.png";
import atsign from "../assets/atsign.png";
import instagram from "../assets/instagram.png";
import { websiteContext } from "../contexts/webSiteContext.js";
import data from '../data/data'


export default function Footer() {
  const { language, setLanguage, darkModeHandler, darkMode } = useContext(websiteContext)

  return (
    <>
          <div className="footer bg-white dark:bg-whitedarkmode flex">
      <div className="footer-content bg-white dark:bg-whitedarkmode ml-96 mr-96">
        <p className="text-purple text-5xl text-center mt-24 mb-6 font-bold">
        {data[language].footer.title}
        </p>
        <p className="text-black dark:text-white text-xl text-center mb-6 font-bold">
        {data[language].footer.description}
        </p>
        <p className="text-black dark:text-purple text-xl text-center mb-6 font-bold">
        {data[language].footer.mail}
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

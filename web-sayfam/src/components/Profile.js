import React, { useContext } from "react";
import image2 from "../assets/image2.png";
import { websiteContext } from "../contexts/webSiteContext.js";
import data from "../data/data";

export default function Profile() {
  const { language, setLanguage, darkModeHandler, darkMode } =
    useContext(websiteContext);

  return (
    <>
      <div className="bg-purple dark:bg-purpledarkmode px-[10%]">
        <p className="text-green text-6xl  pt-24 font-bold">
          {data[language].profile.profile}
        </p>

        <div className="profile-content flex mt-12">
          <div className="about-box text-2xl min-w-[30%]">
            <p className="text-white text-2xl mb-4">
              {data[language].profile.title}
            </p>
            <div className="about-box-detail flex flex-row justify-start">
              <div className="basic-left text-green min-w-fit mr-2">
                <p className="text-base mb-4">
                  {data[language].profile.birthday}
                </p>
                <p className="text-base mb-4"> {data[language].profile.city}</p>
                <p className="text-base">
                  {data[language].profile.graduatedFrom}
                </p>
                <p className="text-base mb-4">
                  {data[language].profile.graduatedFrom2}
                </p>
                <p className="text-base mb-4">{data[language].profile.role}</p>
              </div>

              <div className="basic-right text-white min-w-fit">
                <p className="text-base mb-4">
                  {data[language].profile.detail.birthday}
                </p>
                <p className="text-base mb-4">
                  {data[language].profile.detail.city}
                </p>
                <p className="text-base">
                  {data[language].profile.detail.graduatedFrom}
                </p>
                <p className="text-base mb-4">
                  {data[language].profile.detail.graduatedFrom2}
                </p>
                <p className="text-base mb-4">
                  {data[language].profile.detail.role}
                </p>
              </div>
            </div>
          </div>
          <img className="-mt-12" src={image2} alt="image2"></img>
          <div className="about-box text-white text-2xl min-w-[25%] ">
            <p className="text-2xl mb-4 ">{data[language].profile.aboutMe}</p>
            <p className="text-base">{data[language].profile.aboutMeDetail}</p>
          </div>
        </div>
      </div>
    </>
  );
}

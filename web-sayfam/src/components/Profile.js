import React from "react";
import image2 from "../assets/image2.png";

export default function Profile() {
  return (
    <>
      <div className="bg-purple">
        <p className="text-green text-6xl ml-72 mr-48 pt-24 font-bold">
          Profile
        </p>

        <div className="profile-content flex mt-12 ml-72 mr-96">
          <div className="about-box text-2xl min-w-[30%]">
            <p className="text-white  text-2xl mb-4">
              Basic Information
            </p>
            <div className="about-box-detail flex">
              <div className="basic-left text-green min-w-fit mr-2">
                <p className="text-lg mb-4">Doğum Tarihi</p>
                <p className="text-lg mb-4">İkamet Şehri</p>
                <p className="text-lg">Eğitim</p>
                <p className="text-lg mb-4">Durumu</p>
                <p className="text-lg mb-4">Tercih Ettiği Rol</p>
              </div>

              <div className="basic-right text-white  min-w-fit">
                <p className="text-lg mb-4">21.03.1984</p>
                <p className="text-lg mb-4">İstanbul</p>
                <p className="text-lg">Sakarya Üni. Endüstri Müh.</p>
                <p className="text-lg mb-4">Lisans 2004</p>
                <p className="text-lg mb-4">Frontend, UI</p>
              </div>
            </div>
          </div>
          <img className="-mt-12" src={image2} alt="image2"></img>
          <div className="about-box text-white text-2xl min-w-[30%]">
            <p className="text-2xl mb-4">About Me</p>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

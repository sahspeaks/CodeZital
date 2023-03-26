import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/home.png";
import homeAn from "../assets/images/home-animate.png";
import Typewriter from "typewriter-effect";
export default function Home({user}) {
  return (
    <>
      <section className="z-10 h-[100vh] flex flex-col md:flex-row justify-center md:justify-evenly -mt-12 items-center space-y-20 md:space-x-10 md:space-y-0 mx-auto font-body">
        
        
        <div className="flex relative flex-col md:flex-row-reverse md:items-center md:gap-60 items-center space-y-28">
        <div className="p-3 absolute animate-bouncy top-[150px] md:w-[500px] md:top-[50px] md:left-[630px] left-[20px]">
          <img src={homeAn} alt="logo-home" />
        </div>
          <div className="w-[240px] md:w-[320px]">
            <img src={logo} alt="logo-home" />
          </div>
          <div className="flex flex-col text-[#363A45] md:w-[500px] mx-auto md:items-start items-center space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold capitalize">
              <Typewriter
                options={{
                  strings: [
                    "Learn With Karam",
                    "Learn With Hustlers",
                    "Learn With Love",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="capitalize font-normal text-[#4A4F5C] text-2xl px-3 text-center md:text-left md:px-0 md:text-3xl">
              The Ultimate Guide To Ace Web Development
            </p>
            <Link to="/courses">
              <button className="bg-purple-600 hover:bg-purple-800 transition-all ease-in-out duration-200 py-2 px-5 text-base font-medium text-white rounded-md">
                Explore Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

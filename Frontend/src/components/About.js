import React from "react";
import { Link } from "react-router-dom";
import aboutimg from "../assets/images/hero.jpg";

export default function About() {
  return (
    <div className="flex flex-col font-body text-[#363A45] h-[100vh] space-y-10 p-16 items-center justify-center mx-auto">
      <div>
        <h1 className="text-3xl md:text-left font-bold uppercase">About us</h1>
      </div>
      <div className="flex flex-col space-y-6 mx-auto">
        <div className="flex flex-col items-center">
          <img className="rounded-full w-32 h-32 object-cover" src={aboutimg} />
          <p className="text-gray-500 font-semibold mt-2">Founder</p>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <h1 className="text-2xl font-semibold">Karampal Jangir</h1>
          <p className="mt-1 text-center">
            Hi, i am a full stack developer. Our mission is to provide quality
            content at reasonable price.
          </p>
        </div>
        <div className="flex flex-col mt-3 items-center">
          <p className="text-center font-medium text-lg">
            We are video streaming platform with some premium courses available
            only for premium users.
          </p>
          <Link to="/courses">
            <button className="bg-purple-600 hover:bg-purple-800 transition-all ease-in-out duration-200 mt-3 py-3 px-5 text-white font-medium rounded-md">
              Checkout Our Courses
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

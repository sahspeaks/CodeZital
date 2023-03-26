import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-purple-600 font-body mt-24 text-white px-10 py-10">
      <div className="flex flex-col justify-evenly md:flex-row space-y-10">
        <div>
          <p className="text-4xl tracking-widest font-light">FrontEnd Forearms</p>
          <p className="text-xl mt-4 font-medium ">
            The Ultimate Guide To Ace Web Development.
          </p>
        </div>
        <div className="flex justify-between md:gap-16">
          <div className="flex flex-col space-y-4">
            <h1 className="uppercase text-xl font-semibold">menu</h1>
            <div className="flex flex-col">
              <Link to="/about">
                <button>About us</button>
              </Link>
              <Link to="/courses">
                <button className="mt-1">All Courses</button>
              </Link>
              <Link to="/contact">
                <button className="mt-1">Contact</button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="uppercase text-xl font-semibold">Services</h1>
            <div className="flex flex-col ">
              <Link to="/privacy-policy">
                <button>Privacy Policy</button>
              </Link>
              <Link to="/term-of-use">
                <button className="mt-1">Terms Of Use</button>
              </Link>
              <Link to="/refund-policy">
                <button className="mt-1">Refund Policy</button>
              </Link>
            </div>
          </div>
          <div></div>
        </div>

        <div>
          <h1 className="uppercase text-xl font-semibold">Get In Touch</h1>
          <p className="mt-3">Email : Jangirtechs3@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

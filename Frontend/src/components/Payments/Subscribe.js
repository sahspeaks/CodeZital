import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Subscribe() {
  return (
    <div className="flex flex-col items-center space-y-10 mt-16 text-center md:text-left justify-center p-10">
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Subscribe</h1>
        <p className="text-gray-500 text-lg text-left">
          To start your career and have a great skill that companies require in
          web development subscribe to our single plan and get access to all
          content.
        </p>
      </div>
      <div className="rounded-xl shadow-lg ">
        <div className="bg-[#4C00FF] p-3 rounded-t-xl">
          <p className="text-white font-medium text-lg">Pro Pack</p>
        </div>
        <div className="px-16 py-3">
          <p className="text-left font-bold text-4xl py-5">₹499 </p>
          <div className="flex flex-col text-left space-y-4">
            <div className="flex items-center gap-3">
              <BsFillCheckCircleFill className="text-green-500" size={20} />
              <p className=" text-gray-500">Plus Plan</p>
            </div>
            <div className="flex items-center gap-3">
              <BsFillCheckCircleFill className="text-green-500" size={20} />
              <p className=" text-gray-500">Premium User</p>
            </div>
            <div className="flex items-center gap-3">
              <BsFillCheckCircleFill className="text-green-500" size={20} />
              <p className=" text-gray-500">Access to all content</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-400 p-3 mt-4 rounded-b-xl">
          <p className="text-white font-medium text-base">
            100% Refund At Cancellation
          </p>
        </div>
      </div>
      <div className="bg-[#4C00FF] py-3 px-6 rounded-xl text-white font-semibold w-full flex items-center justify-center gap-2">
        <button type="submit">Proceed to payment</button>
        <IoIosArrowRoundForward size={22} />
      </div>
    </div>
  );
}

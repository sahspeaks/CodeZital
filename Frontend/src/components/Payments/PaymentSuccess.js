import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function PaymentSuccess() {
  return (
    <div className="flex flex-col items-center space-y-10 mt-16 text-center md:text-left justify-center p-10">
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">You have Pro Pack Now !</h1>
      </div>
      <div className="rounded-xl shadow-lg ">
        <div className="bg-[#4C00FF] p-3 rounded-t-xl">
          <p className="text-white font-medium text-lg">Payment Success</p>
        </div>
        <div className="px-6 py-3 flex flex-col items-center">
          <p className="text-center font-medium text-base py-5">
            Congratulations you a pro member now, You have access to premium
            content.
          </p>
          <BsFillCheckCircleFill size={38} className="text-[#4C00FF]" />
          <Link to="/profile">
            <p className="text-lg font-medium mt-4 underline decoration-[#4C00FF]">
              Go To Profile
            </p>
          </Link>
        </div>
        <div className="bg-slate-400 p-3 mt-4 rounded-b-xl">
          <p className="text-white font-medium text-base">
            Reference id : jfshfurfhndsfhdsufndsj
          </p>
        </div>
      </div>
    </div>
  );
}

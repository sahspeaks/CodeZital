import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineError } from "react-icons/md";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center space-y-5 mt-16 text-center h-[500px] md:text-left justify-center p-10">
      <MdOutlineError size={46} />
      <h1 className="text-2xl font-semibold">Page Not Found !!</h1>
      <Link to="/">
        <p className="text-lg font-medium mt-4 underline decoration-[#4C00FF]">
          Go To Home
        </p>
      </Link>
    </div>
  );
}

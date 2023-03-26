import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function () {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="w-full flex flex-col font-body justify-center text-[#363A45] items-center mx-aut0 h-[100vh]">
      <div className="mx-auto space-y-12">
        <h1 className="text-3xl md:text-left font-bold uppercase">Contact us</h1>

        <form className="flex flex-col space-y-5">
          <input
            className="py-3 px-4 font-body w-[300px] bg-slate-200"
            type="text"
            required
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name"
          />
          <input
            className="py-3 px-4 font-body w-[300px] bg-slate-200"
            type="email"
            required
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="abc@gmail.com"
          />
          <textarea
            className="py-3 bg-slate-200 px-4 font-body w-[300px]"
            type="message"
            required
            id="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Your Message"
          />

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-800 transition-all ease-in-out duration-200 py-3 text-white font-medium"
          >
            Send Mail
          </button>
          <p>
            Request for a course ?{" "}
            <Link to="/request">
              <button className="text-purple-600 hover:text-purple-800 transition-all ease-in-out duration-200">Click here</button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

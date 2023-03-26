import React from "react";
import {
  RiAddCircleFill,
  RiDashboardFill,
  RiEyeFill,
  RiUser3Fill,
} from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const Location = useLocation();
  return (
   <div className="bg-purple-800 p-8 flex shadow-2xl shadow-purple-600 flex-col gap-4 font-normal text-lg rounded-xl font-body text-white absolute top-36 right-7">
     <LinkButton
        active={Location.pathname === "/admin/admincourses"}
        url={"admincourses"}
        Icon={RiEyeFill}
        text="Admin Courses"
      />
      <LinkButton
        active={Location.pathname === "/admin/users"}
        url={"users"}
        Icon={RiUser3Fill}
        text="Users"
      />
      <LinkButton
        active={Location.pathname === "/admin/createcourse"}
        url={"createcourse"}
        Icon={RiAddCircleFill}
        text="Create Course"
      />
   </div>
  );
}
function LinkButton({ url, Icon, text, active }) {
  return (
    <Link to={`/admin/${url}`}>
      <button
        className={`flex ${
          active ? "bg-white/40 transition-all ease-in-out duration-200 p-2 rounded-xl" : ""
        } items-center bg-purple-800 transition-all ease-in-out duration-200 p-2 gap-2 text-lg font-medium`}
      >
        <Icon />
        {text}
      </button>
    </Link>
  );
}

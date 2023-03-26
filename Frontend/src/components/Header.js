import { React, useState } from "react";
import { AiOutlineAlignLeft, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

import { RiLogoutBoxRLine, RiDashboardFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/actions/user";

export default function Header({ isAuthenticated, user }) {
  const [isOpen, setIsOpen] = useState(false);
  const handler = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  const dispatch = useDispatch();
  const logoutHandler = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
    dispatch(logOut());
  };

  return (
    <div className="font-body relative z-20 text-[#363A45]">
      <div
        onClick={handler}
        className="fixed bg-purple-600 hover:bg-purple-800 transition-all ease-in-out rounded-full p-2 text-3xl font-extrabold top-6 left-6 cursor-pointer"
      >
        <AiOutlineAlignLeft color="white"/>
      </div>
      <div
        className={`fixed ${
          isOpen
            ? "left-12 top-24 md:left-20 md:top-20 rounded-xl transition-all ease-in-out duration-500"
            : "-left-96 md:left-[-1370px] transition-all ease-in-out duration-500"
        } top-0 bg-gray-100 shadow-2xl opacity-100 ease-in-out p-5`}
      >
        {/* logo and close handler */}
        <div className="flex items-center justify-between pb-2">
          <div>
            <img className="w-8 -mb-2 ml-4" alt="logo" src={logo} />
          </div>
          <AiOutlineClose
            className="text-3xl cursor-pointer"
            onClick={handler}
          />
        </div>
        {/* links to different section */}
        <div className="flex flex-col items-center space-y-10 mt-12">
          <Link to="/">
            <button onClick={handler} className="text-xl uppercase font-semibold hover:text-purple-800 transition-all ease-in-out">
              Home
            </button>
            
          </Link>
          <Link to="/courses">
            <button onClick={handler} className="text-xl uppercase font-semibold hover:text-purple-800 transition-all ease-in-out">
              All Courses
            </button>
            
          </Link>
          
          <Link to="/contact">
            <button onClick={handler} className="text-xl uppercase font-semibold hover:text-purple-800 transition-all ease-in-out">
              Contact us
            </button>
            
          </Link>
          <Link to="/about">
            <button onClick={handler} className="text-xl uppercase font-semibold hover:text-purple-800 transition-all ease-in-out">
              About us
            </button>
            
          </Link>
        </div>
        <div className="flex items-center gap-8 mx-auto mt-16 md:gap-6 p-2">
          {isAuthenticated ? (
            <>
              <div className="flex flex-col items-center space-y-6">
                <div className="flex items-center gap-16">
                  <Link to="/profile">
                    <button
                      onClick={handler}
                      className="font-medium rounded-md bg-purple-600 hover:bg-purple-800 transition-all ease-in-out duration-200 text-white px-4 py-2"
                    >
                      Profile
                    </button>
                  </Link>
                  <div className="flex items-center hover:text-purple-800 transition-all ease-in-out duration-200">
                    <RiLogoutBoxRLine />
                    <button
                      onClick={logoutHandler}
                      className="font-medium rounded-md px-2 hover:text-purple-800 transition-all ease-in-out duration-200"
                    >
                      Logout
                    </button>
                  </div>
                </div>
                {user && user.role === "admin" && (
                  <Link to="/admin/users">
                    <div className="bg-gray-200 hover:bg-gray-300 transition-all ease-in-out duration-200 px-4 py-2 rounded-md flex items-center space-x-1">
                      <RiDashboardFill />
                      <button onClick={handler} className="font-medium">
                        Dashboard
                      </button>
                    </div>
                  </Link>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <button
                  onClick={handler}
                  className="bg-purple-600 hover:bg-purple-800 transition-all ease-in-out text-white px-4 py-2 font-medium rounded-md"
                >
                  Login
                </button>
              </Link>

              <p>or</p>

              <Link to="/signup">
                <button
                  onClick={handler}
                  className="bg-purple-600 hover:bg-purple-800 transition-all ease-in-out text-white px-4 py-2 font-medium rounded-md"
                >
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

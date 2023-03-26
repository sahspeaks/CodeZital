import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/user";
import loginPage from "../../assets/images/loginPage.jpg";
import {FaUser} from "react-icons/fa"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    dispatch(login(email, password));
    e.preventDefault();
  };
  return (
    <div>
      <div className="w-full font-body text-[#363A45] grid grid-cols-1 md:grid-cols-12 gap-24 md:gap-0 items-center">
        <div className="md:col-span-6 md:h-[100vh]">
          <img
            className="m-0 h-full object-cover"
            src={loginPage}
            alt="loginPage"
          />
        </div>
        <div className="mx-auto space-y-10 justify-center mb-20 md:mb-0 md:p-16 md:col-span-6">
          <div className="flex flex-col gap-2">
          
            <h1 className="text-5xl font-extralight mb-2">Hello ,</h1>
            
            <h1 className="font-semibold text-3xl md:text-5xl">
              FrontEnd Forearms
            </h1>
            
          </div>
          <form onSubmit={submitHandler} className="flex flex-col space-y-5">
            <input
              className="py-3 px-4 bg-gray-200 font-body font-medium"
              type="email"
              required
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="username"
            />
            <input
              className="py-3 bg-gray-200 px-4 font-body"
              type="password"
              required
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="password"
            />

            <Link to="/forgotpassword">
              <button className="text-purple-600 hover:text-purple-800 transition-all ease-in-out">Forgot Password ?</button>
            </Link>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-800 transition-all rounded-md ease-in-out py-3 text-white font-medium"
            >
              Login
            </button>
            <p>
              New User ?{" "}
              <Link to="/signup">
                <button className="text-purple-600 hover:text-purple-800 transition-all ease-in-out">Register</button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

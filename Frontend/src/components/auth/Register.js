import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../redux/actions/user";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [imageprev, setImageprev] = useState("");
  const [image, setImage] = useState("");

  const {loading,message} = useSelector(state=>state.user)

  const fileChangeHander = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageprev(reader.result);
      setImage(file);
    };
  };
  const dispatch = useDispatch();
  const submitHandler = async(e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("file", image);

    await dispatch(register(myForm));
    if(message){
      toast.success(message)
    }
  };
  return (
    <div className="w-full flex flex-col font-body justify-center items-center mx-auto h-[100vh]">
      <div className="mx-auto space-y-10">
        <h1 className="text-3xl md:text-left font-bold uppercase">Register</h1>
        {imageprev ? <img
          className="w-32 h-32 object-cover rounded-full"
          src={imageprev}
          alt="userImage"
        /> : <img
        className="w-32 h-32 object-cover rounded-full"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="userImage"
      />}
        <form onSubmit={submitHandler} className="flex flex-col space-y-5">
          <input
            className="py-3 px-4 font-body bg-slate-200 w-full"
            type="text"
            required
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="name"
          />
          <input
            className="py-3 px-4 font-body bg-slate-200 w-full"
            type="email"
            required
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email"
          />
          <input
            className="py-3 bg-slate-200 w-full px-4 font-body"
            type="password"
            required
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          <input
            type="file"
            required
            accept="image/*"
            id="avatar"
            onChange={fileChangeHander}
          />

<div className="bg-purple-600 hover:bg-purple-800 cursor-pointer transition-all ease-in-out duration-200 flex items-center rounded-md justify-center py-3 w-full text-center h-[50px] text-white font-medium">
          <button type="submit" className="w-full">
            {loading ? (
              <div className="flex items-center justify-center">
                <Oval
                  height={25}
                  width={25}
                  color="#FFFFFF"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#FFFFFF"
                  strokeWidth={4}
                  strokeWidthSecondary={4}
                />
              </div>
            ) : (
              "Register"
            )}
          </button>
        </div>
          <p>
            Already Signed Up ?{" "}
            <Link to="/login    ">
              <button className="text-purple-600">Login here</button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../redux/actions/profile";
import { getMyProfile } from "../../redux/actions/user";

export default function UpdateProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();

    await dispatch(updateProfile(name, email));
    dispatch(getMyProfile());
  };

  const { error, message, loading } = useSelector((state) => state.profile);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);
  return (
    <div className="flex items-center font-body justify-center p-20 h-[100vh]">
      <div className="flex flex-col space-y-10">
        <div>
          <h1 className="text-3xl font-bold uppercase text-[#363A45]">
            Update Profile
          </h1>
        </div>
        <form
          onSubmit={submitHandler}
          className="flex flex-col space-y-6 items-center"
        >
          <input
            className="py-3 bg-slate-200 px-4 font-body w-[300px]"
            type="text"
            required
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter your name"
          />
          <input
            className="py-3 bg-slate-200 px-4 font-body w-[300px]"
            type="email"
            required
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your email"
          />
          <div className="bg-purple-600 hover:bg-purple-800 transition-all ease-in-out duration-200 flex items-center justify-center py-3 w-[300px] text-center h-[50px] text-white font-medium">
            <button type="submit">
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
                "Update"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

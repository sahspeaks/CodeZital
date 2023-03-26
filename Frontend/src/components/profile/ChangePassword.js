import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../redux/actions/profile";

import { Oval } from "react-loader-spinner";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(changePassword(oldPassword, newPassword));
  };
  const { loading, message, error } = useSelector((state) => state.profile);
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
            Change Password
          </h1>
        </div>
        <form
          onSubmit={submitHandler}
          className="flex flex-col space-y-6 items-center"
        >
          <input
            className="py-3 bg-slate-200 px-4 font-body w-[300px]"
            type="password"
            required
            id="password"
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
            placeholder="Enter old password"
          />
          <input
            className="py-3 bg-slate-200 px-4 font-body w-[300px]"
            type="password"
            required
            id="password"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
            placeholder="Enter new password"
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
                "Change Password"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

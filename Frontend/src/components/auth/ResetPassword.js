import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../../redux/actions/profile";

export default function ResetPassword() {
  const params = useParams();
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.profile);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword(params.token, password));
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });

      if (message) {
        toast.message(message);
        dispatch({ type: "clearMessage" });
        navigate("/login");
      }
    }
  }, [dispatch, navigate, error, message]);
  const [password, setPassword] = useState("");
  return (
    <div className="w-full flex flex-col justify-center items-center mx-auto mt-20 h-[600px] space-y-10">
      <h1 className="text-2xl font-semibold">Reset Password</h1>
      <form onSubmit={submitHandler} className="flex flex-col space-y-4">
        <input
          className="py-3 px-4 font-body w-[300px] bg-slate-100"
          type="password"
          required
          id="email"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="New Password"
        />
        <div className="bg-[#4C00FF] flex items-center justify-center py-3 w-[300px] text-center h-[50px] text-white font-semibold">
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
              "Reset Password"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

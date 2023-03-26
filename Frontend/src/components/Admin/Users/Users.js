import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  getAllUsers,
  updateUserRole,
} from "../../../redux/actions/admin";
import Sidebar from "../Sidebar";

export default function Users() {
  const deleteUserHandler = (userId) => {
    dispatch(deleteUser(userId));
  };
  const changeRoleHandler = (userId) => {
    dispatch(updateUserRole(userId));
  };
  const { users, loading, error, message } = useSelector(
    (state) => state.admin
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }

    dispatch(getAllUsers());
  }, [dispatch, error, message]);
  return (
    <div className="font-body text-[#363A45] h-[100vh] grid grid-cols-1 md:grid-cols-6 mx-auto">
      <div className="md:col-span-5 mt-20 p-6 md:p-16 ">
        <h1 className="text-3xl md:text-left font-bold uppercase">All Users</h1>
        <div className="w-full md:w-full mt-10 overflow-x-auto">
          <table className="w-full ">
            <thead>
              <tr>
                
                <th className="text-left pr-[100px] pb-4">Name</th>
                <th className="text-left pr-[100px] pb-4">Email</th>
                <th className="text-left pr-[100px] pb-4">Role</th>
                <th className="text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {users &&
                users.map((item) => (
                  <Row
                    changeRoleHandler={changeRoleHandler}
                    deleteUserHandler={deleteUserHandler}
                    key={item._id}
                    item={item}
                    loading={loading}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
function Row({ item, changeRoleHandler, deleteUserHandler ,loading}) {
  return (
    <tr className="p-3">
      
      <td className="pb-4">{item.name}</td>
      <td className="pb-4">{item.email}</td>
      <td className="pb-4">{item.role}</td>

      <td className="pb-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => changeRoleHandler(item._id)}
            className="w-[140px] bg-purple-600 hover:bg-purple-800 transition-all ease-in-out duration-200 text-white py-2 rounded-lg text-sm font-normal"
          >
            Change Role
          </button>
          
          <button className="text-purple-500 hover:text-purple-800 transition-all ease-in-out duration-200" onClick={() => deleteUserHandler(item._id)}>
            {loading ? (
              <div className="flex p-1 bg-[#d7c5ff] hover:bg-gray-400 rounded-md items-center justify-center">
                <Oval
                  height={18}
                  width={18}
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
              <RiDeleteBin7Fill className="bg-[#d7c5ff] hover:bg-gray-200 transition-all ease-in-out duration-200 p-2 rounded-md" size={30}/>
            )}
          </button>
        
          
        </div>
      </td>
    </tr>
  );
}

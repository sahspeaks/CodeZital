import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/actions/course";
import { toast } from "react-hot-toast";
import { addToPlaylist } from "../../redux/actions/profile";
import { getMyProfile } from "../../redux/actions/user";
export default function Courses() {
  const Course = ({
    title,
    description,
    views,
    addToPlaylistHandler,
    image,
    id,
  }) => {
    return (
      <div className="w-[270px] bg-white/30 mx-auto border p-3">
        <div className="flex flex-col gap-5">
          {/* image */}
          <div className="hover:scale-110 transition-all ease-in-out duration-200">
            <img src={image} className="object-contain" alt="courseThumbnail" />
          </div>
          {/* title and description */}
          <div>
            <h1 className="text-base font-semibold uppercase">{title}</h1>
            <p className="text-sm">{description}</p>
          </div>
          {/* buttons */}
          <div className="flex flex-col gap-3">
            <Link to={`/course/${id}`}>
              <button className="bg-purple-600 hover:bg-purple-800 transition-all ease-in-out duration-200   w-full text-white text-sm font-medium py-2 px-2 rounded-md">
                Watch Now
              </button>
            </Link>

            <button
              className="bg-[#f1edfa] hover:bg-slate-300 transition-all ease-in-out duration-200 font-medium text-[#632ede] text-sm py-2 px-4 rounded-md"
              onClick={() => addToPlaylistHandler(id)}
            >
              Add to playlist
            </button>
          </div>
        </div>
      </div>
    );
  };

  const [category, setCategory] = useState("");
  const [keyword, setKeyword] = useState("");
  const categories = ["Web Development", "App Development", "Ui & Ux", "DSA"];
  const dispatch = useDispatch();
  const addToPlaylistHandler = async (courseId) => {
    await dispatch(addToPlaylist(courseId));
    dispatch(getMyProfile());
  };
  const { loading, courses, error, message } = useSelector(
    (state) => state.course
  );
  useEffect(() => {
    dispatch(getAllCourses(category, keyword));
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [category, message, error, keyword]);
  return (
    <div className="flex items-center text-[#363A45] justify-center font-body p-24">
      <div className="text-[#363A45] flex flex-col mx-auto space-y-5">
        <div className="flex md:w-[100%] flex-col space-y-8">
          <h2 className="text-3xl md:text-left font-bold uppercase">
            All Courses
          </h2>
          <input
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            className="py-2 px-4 bg-slate-200 text-black border font-body rounded-sm"
            type="text"
            placeholder="Search a course ..."
          />
        </div>
        <div className="grid grid-cols-2 md:flex md:overflow-hidden mx-auto">
          {categories.map((item, index) => (
            <div key={index} className="flex items-center justify-center m-2">
              <button
                onClick={() => setCategory(item)}
                className="bg-slate-200 hover:bg-purple-800 hover:text-white transition-all ease-in-out duration-200 rounded-md py-2 px-4 text-base font-medium"
              >
                {item}
              </button>
            </div>
          ))}
        </div>
        <div className="h-full">
          <div className="grid grid-cols-1 mt-5 md:grid-cols-3 gap-10">
            {courses && courses.length >0 ?
              courses.map((item) => (
                <Course
                  key={item._id}
                  title={item.title}
                  description={item.description}
                  views={item.views}
                  id={item._id}
                  image={item.poster.url}
                  creator={item.createdBy}
                  lectureCount={item.noOfVideos}
                  addToPlaylistHandler={addToPlaylistHandler}
                />
              )) : (<p className="text-2xl text-center font-semibold">No Courses Available !</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}

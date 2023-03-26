import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  addLecture,
  deleteCourse,
  deleteLecture,
} from "../../../redux/actions/admin";
import {
  getAllCourses,
  getCourseLectures,
} from "../../../redux/actions/course";
import Sidebar from "../Sidebar";
import CourseModal from "./CourseModal";

export default function AdminCourses() {
  const { courses, lectures } = useSelector((state) => state.course);
  const { loading, error, message } = useSelector((state) => state.admin);
  const [courseId, setCourseId] = useState("");
  const [courseTitle, setCourseTitle] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const boxToggle = () => {
    setIsOpen(!isOpen);
  };
  const deleteCourseHandler = (courseId) => {
    dispatch(deleteCourse(courseId));
  };
  const courseDetailHandler = (courseId, title) => {
    setIsOpen(!isOpen);
    dispatch(getCourseLectures(courseId));
    setCourseId(courseId);
    setCourseTitle(title);
  };
  const deleteLectureHandler = async (courseId, lectureId) => {
    await dispatch(deleteLecture(courseId, lectureId));
    dispatch(getCourseLectures(courseId));
  };
  const addLectureHandler = async (e, courseId, title, description, video) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("file", video);
    await dispatch(addLecture(courseId, myForm));
    dispatch(getCourseLectures(courseId));
  };

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
    dispatch(getAllCourses());
  }, [dispatch, error, message]);
  return (
    <div className="relative text-[#363A45] font-body grid grid-cols-1 md:grid-cols-6 mx-auto">
      <div className="md:col-span-5 h-[100vh] mt-20 p-4 md:p-16">
        <h1 className="text-3xl mb-10 md:text-left font-bold uppercase">
          All available courses
        </h1>

        <div className="md:w-full overflow-x-auto">
          <table className="w-full ">
            <thead>
              <tr>
                <th className="text-left pr-[80px] pb-4">Poster</th>
                <th className="text-left pr-[100px] pb-4">Title</th>
                <th className="text-left pr-[100px] pb-4">Category</th>
                <th className="text-left pr-[50px] pb-4">Creator</th>
                <th className="text-left pr-[50px] pb-4">Views</th>
                <th className="text-left pr-[30px] pb-4">Lectures</th>
                <th className="text-left w-[100px] pb-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((item) => (
                <Row
                  courseDetailHandler={courseDetailHandler}
                  deleteCourseHandler={deleteCourseHandler}
                  key={item._id}
                  item={item}
                  loading={loading}
                />
              ))}
            </tbody>
          </table>
        </div>

        <CourseModal
          isOpen={isOpen}
          boxToggle={boxToggle}
          deleteLectureHandler={deleteLectureHandler}
          addLectureHandler={addLectureHandler}
          id={courseId}
          lectures={lectures}
          loading={loading}
          coursetitle={courseTitle}
        />
      </div>
      <Sidebar />
    </div>
  );
}
function Row({ item, courseDetailHandler, deleteCourseHandler, loading }) {
  return (
    <>
      <tr className="p-3">
        <td>
          <img className="w-24 pb-4" src={item.poster.url} alt="coursePoster" />
        </td>
        <td className="pb-4">{item.title}</td>
        <td className="uppercase pb-4">{item.category}</td>
        <td className="pb-4">{item.createdBy}</td>
        <td className="pb-4">{item.views}</td>
        <td className="pb-4">{item.numOfVideos}</td>

        <td className="pb-4">
          <div className="flex justify-end items-center gap-5">
            <button
              onClick={() => courseDetailHandler(item._id, item.title)}
              className="w-[140px] bg-purple-600 hover:bg-purple-800 transition-all ease-in-out duration-200 text-white py-2 rounded-lg text-sm font-normal"
            >
              View Lectures
            </button>
            <button
              className="text-purple-600 hover:text-purple-800 transition-all ease-in-out duration-200"
              onClick={() => deleteCourseHandler(item._id)}
            >
              <RiDeleteBin7Fill
                className="bg-[#d7c5ff] hover:bg-gray-200 p-2 rounded-md"
                size={30}
              />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

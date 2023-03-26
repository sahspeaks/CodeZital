import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {BsFillPlayCircleFill} from "react-icons/bs"
import { getCourseLectures } from "../../redux/actions/course";
import Loader from "../Loader";
export default function CoursePage() {
  const [lectureNumber, setLectureNumber] = useState(0);
  const { lectures, loading } = useSelector((state) => state.course);

  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getCourseLectures(params.id));
  }, [dispatch, params.id]);
  return loading ? (
    <Loader />
  ) : (
    <div className="mb-20 text-[#363A45] font-body">
      {/* video player */}
      {lectures && lectures.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-2">
            <video
              width={"100%"}
              controls
              src={lectures[lectureNumber].video.url}
            ></video>
            <div className="p-4 flex flex-col gap-2 bg-[#F2F2F2] rounded-2xl">

              <div className="flex gap-2"><h1 className="font-semibold text-xl md:text-2xl">{`#${lectureNumber + 1} ${

                lectures[lectureNumber].title
              }`}</h1></div>
              <div className="flex gap-2"><p className="text-lg">{`${lectures[lectureNumber].description}`}</p></div>
            </div>
          </div>
          {/* other lectures */}
          <div className="flex mt-8 flex-col items-center md:items-start px-6 w-full">
            <p className="uppercase text-xl md:text-2xl font-bold">All Lectures</p>
            {lectures.map((item, index) => (
              <button
                onClick={() => setLectureNumber(index)}
                key={item._id}
                className="p-3"
              >
                <p className="font-normal text-2xl flex items-center gap-3">
                  <BsFillPlayCircleFill className="text-purple-600"/> <p>{index +1}. {item.title}</p>
                </p>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <h2 className="flex items-center justify-center h-[100vh]">No Lectures</h2>
      )}
    </div>
  );
}

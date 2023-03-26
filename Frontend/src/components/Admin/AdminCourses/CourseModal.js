import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Oval } from "react-loader-spinner";

export default function CourseModal({
  isOpen,
  boxToggle,
  id,
  deleteLectureHandler,
  addLectureHandler,
  coursetitle,
  lectures = [],
  loading,
}) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [video, setVideo] = useState();
  const [videoPrev, setVideoPrev] = useState();
  const changeVideoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };
  const handleClose = () => {
    setTitle("");
    setDescription("");
    setVideo("");
    setVideoPrev("");
    boxToggle();
  };
  return (
    <div
      isOpen={isOpen}
      className="absolute z-40 top-0 left-0 md:h-[100vh] bg-slate-200"
    >
      {isOpen && (
        <div className="p-5 space-y-5 md:p-10">
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold uppercase">{coursetitle}</p>
            <MdClose className="bg-purple-600 hover:bg-purple-800 transition-all ease-in-out duration-200 p-1 rounded-full cursor-pointer" color="white" size={36} onClick={handleClose} />
          </div>
          <div className="grid md:p-8 grid-cols-1 md:grid-cols-4">
            <div className="md:p-8 space-y-4 col-span-3">
              <div>
                <div className="text-3xl font-bold uppercase">{coursetitle}</div>
                <p className="text-gray-500 text-sm font-medium">{`#${id}`}</p>
              </div>
              <p className="text-2xl font-semibold">Lectures</p>
             <div className="overflow-y-scroll"> {lectures.map((item, i) => (
                <VideoCard
                  key={item._id}
                  title={item.title}
                  description={item.description}
                  num={i + 1}
                  lectureId={item._id}
                  courseId={id}
                  deleteLectureHandler={deleteLectureHandler}
                />
              ))}
              </div>
            </div>
            <div className="">
              <form
                onSubmit={(e) =>
                  addLectureHandler(e, id, title, description, video)
                }
              >
                <div className="flex mt-10 p-2 flex-col space-y-6 md:p-8">
                  <h1 className="text-xl uppercase font-bold text-center">
                    Add Lecture
                  </h1>
                  <input
                    className="font-body py-2 px-4 bg-gray-300"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <input
                    className="font-body py-2 px-4 bg-gray-300"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <input
                    accept="video/mp4"
                    required
                    type="file"
                    onChange={changeVideoHandler}
                  ></input>
                  {videoPrev && (
                    <video nodownload controls src={videoPrev}></video>
                  )}
                  <div className="bg-purple-600 hover:bg-purple-800 cursor-pointer transition-all ease-in-out duration-200 rounded-md flex items-center justify-center py-3 w-full text-center h-[50px] text-white font-medium">
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
              "Upload Lecture"
            )}
          </button>
        </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
function VideoCard({
  title,
  description,
  num,
  lectureId,
  courseId,
  deleteLectureHandler,
}) {
  return (
    <div className="flex gap-4 flex-col mb-3 justify-start md:justify-between md:flex-row bg-white rounded-xl p-4 md:px-7 md:py-5 ">
      <div>
        <h2 className="text-sm font-medium">{`#${num} ${title}`}</h2>
        <p className="text-gray-500 text-sm font-medium">{description}</p>
      </div>
      <button
        onClick={() => deleteLectureHandler(courseId, lectureId)}
        className="text-[#4C00FF]"
      >
        <RiDeleteBin7Fill className="bg-[#d7c5ff] p-2 rounded-md" size={30} />
      </button>
    </div>
  );
}

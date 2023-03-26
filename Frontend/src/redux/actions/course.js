import { server } from "../store";
import axios from "axios";

export const getAllCourses =
  (category = "", keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "allCoursesRequest" });
      const data = await axios.get(
        `${server}/course?keyword=${keyword}&category=${category}`,
        {
          withCredentials: true,
        }
      );
      console.log(data.data.courses);
      dispatch({ type: "allCoursesSuccess", payload: data.data.courses });
    } catch (error) {
      dispatch({
        type: "allCoursesFail",
        payload: error.response.data.message,
      });
    }
  };

export const getCourseLectures = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getCoursesRequest" });
    const data = await axios.get(`${server}/course/${id}`, {
      withCredentials: true,
    });
    console.log(data.data.courses);
    dispatch({ type: "getCoursesSuccess", payload: data.data.lectures });
  } catch (error) {
    dispatch({
      type: "getCoursesFail",
      payload: error.response.data.message,
    });
  }
};

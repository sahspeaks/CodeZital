import express from "express";
import {
  addLecture,
  createCourse,
  deleteCourse,
  deleteLecture,
  getAllCourses,
  getCourseLectures,
} from "../controllers/courseController.js";
import { authorization, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";
const router = express.Router();

//get all courses without lecture
router.route("/course").get(getAllCourses);

//create new course - only admin
router
  .route("/createcourse")
  .post(isAuthenticated, authorization, singleUpload, createCourse);

//Add lecture, delete course,Get course detail
router
  .route("/course/:id")
  .get(isAuthenticated, getCourseLectures)
  .post(isAuthenticated, authorization, singleUpload, addLecture)
  .delete(isAuthenticated, authorization, deleteCourse);

//delete lecture
router.route("/lecture").delete(isAuthenticated, authorization, deleteLecture);

export default router;

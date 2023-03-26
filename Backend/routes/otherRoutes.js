import express from "express";
import { contact, courseRequest } from "../controllers/otherController.js";
import { authorization, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//contact
router.route("/contact").post(contact);
//request course
router.route("/requestcourse").post(courseRequest);

export default router;

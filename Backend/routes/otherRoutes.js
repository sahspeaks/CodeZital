import express from "express";
import { contact, courseRequest ,NewsltterRequest} from "../controllers/otherController.js";
import { authorization, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//contact
router.route("/contact").post(contact);
//request course
router.route("/requestcourse").post(courseRequest);
router.route("/newsletter").post(NewsltterRequest);

export default router;

import express from "express";
import {
  addToPlaylist,
  changePassword,
  deleteMyProfile,
  deleteUser,
  forgetPassword,
  getAllUsers,
  getMyProfile,
  login,
  logout,
  register,
  removeFromPlaylist,
  resetPassword,
  updateProfile,
  updateProfilePicture,
  updateRole,
} from "../controllers/userController.js";
import { authorization, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";
const router = express.Router();

//to register a new user
router.route("/register").post(singleUpload, register);

//login
router.route("/login").post(login);
//logout
router.route("/logout").get(logout);
//get my profile
router.route("/me").get(isAuthenticated, getMyProfile);
//delete my profile
router.route("/me").delete(isAuthenticated, deleteMyProfile);

//change password
router.route("/changepassword").put(isAuthenticated, changePassword);
//update profile
router.route("/updateprofile").put(isAuthenticated, updateProfile);

//update profilepircure
router
  .route("/updateprofilepicture")
  .put(isAuthenticated, singleUpload, updateProfilePicture);

//forget password
router.route("/forgetpassword").post(forgetPassword);

//reset password
router.route("/resetpassword/:token").put(resetPassword);

//addtoplaylist
router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);
//remove from playlist
router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);

//admin routes

router.route("/admin/users").get(isAuthenticated, authorization, getAllUsers);

router
  .route("/admin/user/:id")
  .put(isAuthenticated, authorization, updateRole)
  .delete(isAuthenticated, authorization, deleteUser);

export default router;

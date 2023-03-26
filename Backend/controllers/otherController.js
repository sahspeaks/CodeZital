import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendEmail } from "../utils/sendEmail.js";
import { Stats } from "../models/stats.js";
export const contact = catchAsyncError(async (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return next(new ErrorHandler("All fields are mandatory", 400));
  const to = process.env.MY_MAIL;
  const subject = "Contact from CodeZital";
  const text = `I am ${name} and my email is ${email}. \n ${message}`;

  await sendEmail(to, subject, text);
  res.status(200).json({
    success: true,
    message: "Your message has been sent.",
  });
});

export const courseRequest = catchAsyncError(async (req, res, next) => {
  const { name, email, course } = req.body;
  if (!name || !email || !course)
    return next(new ErrorHandler("All fields are mandatory", 400));
  const to = process.env.MY_MAIL;
  const subject = "Requesting for a course on CodeZital";
  const text = `I am ${name} and my email is ${email}. \n ${course}`;

  await sendEmail(to, subject, text);
  res.status(200).json({
    success: true,
    message: "Your request has been sent.",
  });
});

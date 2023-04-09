import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendEmail } from "../utils/sendEmail.js";
import { Stats } from "../models/stats.js";
export const contact = catchAsyncError(async (req, res, next) => {
  const { name, email, message } = req.body;
  // console.log(name,email,message);
  if (!name || !email || !message)
    return next(new ErrorHandler("All fields are mandatory", 400));
  const to = process.env.MY_MAIL;
  const subject = "Contact from Edumindz";
  const text = `I am ${name} and my email is ${email}. \nMessage: ${message}`;

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
  const subject = "Requesting for a course on Edumindz";
  const text = `I am ${name} and my email is ${email}. \nCourse: ${course}`;

  await sendEmail(to, subject, text);
  res.status(200).json({
    success: true,
    message: "Your request has been sent.",
  });
});
export const NewsltterRequest = catchAsyncError(async (req, res, next) => {
  const { email } = req.body;
  // console.log(name,email,message);
  if (!email)
    return next(new ErrorHandler("All fields are mandatory", 400));
  const to = process.env.MY_MAIL;
  const subject = "Request for Newsletter from Edumindz";
  const text = `My email is ${email}. \nI'm reuquesting for Edumindz newsletter.`;

  await sendEmail(to, subject, text);
  res.status(200).json({
    success: true,
    message: "Your message has been sent.",
  });
});

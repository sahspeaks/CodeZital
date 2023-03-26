import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import AdminCourses from "./components/Admin/AdminCourses/AdminCourses";
import CreateCourse from "./components/Admin/CreateCourse/CreateCourse";
import Users from "./components/Admin/Users/Users";
import ForgotPassword from "./components/auth/ForgotPassword";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ResetPassword from "./components/auth/ResetPassword";
import Contact from "./components/Contact";
import CoursePage from "./components/CoursePage/CoursePage";
import Courses from "./components/courses/Courses";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import PaymentFail from "./components/Payments/PaymentFail";
import PaymentSuccess from "./components/Payments/PaymentSuccess";
import Subscribe from "./components/Payments/Subscribe";
import ChangePassword from "./components/profile/ChangePassword";
import Profile from "./components/profile/Profile";
import UpdateProfile from "./components/profile/UpdateProfile";
import RequestCourse from "./components/RequestCourse";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { ProtectedRoute } from "protected-route-react";
import { getMyProfile } from "./redux/actions/user";
import Loader from "./components/Loader";
function App() {
  const { isAuthenticated, user, message, error, loading } = useSelector(
    (state) => state.user
  );
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
  }, [dispatch, error, message]);
  useEffect(() => {
    dispatch(getMyProfile());
  }, [dispatch]);
  return (
    
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-gray-100">
          <Header isAuthenticated={isAuthenticated} user={user} />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Profile user={user} />
                </ProtectedRoute>
              }
            />
            <Route path="/courses" element={<Courses />} />
            <Route
              path="/login"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/signup"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Register />
                </ProtectedRoute>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/course/:id"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <CoursePage />
                </ProtectedRoute>
              }
            />
            <Route path="/request" element={<RequestCourse />} />
            <Route
              path="/resetpassword/:token"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <ResetPassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/forgotpassword"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <ForgotPassword />
                </ProtectedRoute>
              }
            />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/changepassword"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ChangePassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/updateprofile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <UpdateProfile />
                </ProtectedRoute>
              }
            />
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="/paymentfail" element={<PaymentFail />} />
            {/* admin routes */}
            
            <Route
              path="/admin/admincourses"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAdmin={user && user.role === "admin"}
                  isAuthenticated={isAuthenticated}
                >
                  <AdminCourses />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAdmin={user && user.role === "admin"}
                  isAuthenticated={isAuthenticated}
                >
                  <Users />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/createcourse"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAdmin={user && user.role === "admin"}
                  isAuthenticated={isAuthenticated}
                >
                  <CreateCourse />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
          <Toaster />
        </div>
      )}
    </Router>
    
  );
}

export default App;

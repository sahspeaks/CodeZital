import { configureStore } from "@reduxjs/toolkit";
import { adminreducer } from "./reducers/adminreducer";
import { courseReducer } from "./reducers/courseReducer";
import { profileReducer, userReducer } from "./reducers/userReducer";
const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    admin: adminreducer,
  },
});

export default store;

export const server = "http://localhost:5000/api/v1";

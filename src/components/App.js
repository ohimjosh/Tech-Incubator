import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../context/AuthContext";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateProfile from "./UpdateProfile";
import Task from "./Task";
import PostBoard from "./PostBoard";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/update-profile"
            element={
              <PrivateRoute>
                <UpdateProfile />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/task"
            element={
              <PrivateRoute>
                <Task />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/post-board"
            element={
              <PrivateRoute>
                <PostBoard />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};
export default App;

// src/routes.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import "simplebar/dist/simplebar.css";
import ReactDOM from "react-dom";
import Navbar from './components/Navbar';
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import MessageExampleAttached from "./components/StudentList";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Dashboard students={students} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/students" element={<MessageExampleAttached  students={students} />} />
            <Route path="/teachers" element={<MessageExampleAttached students={teachers}/>}/>
            <Route 
              path="/courses" 
              element={<CourseComponent courses={courses} loading={coursesLoading} error={coursesError} />} 
            />
            <Route path="*" element={<NotFound />} /> {/* This acts as a catch-all route */}
    </Switch>
  );
};

export default Routes;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectListPage from "./ProjectListPage";
import ProjectShowPage from "./ProjectShowPage";
import LoginPage from "./LoginPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/projects/:projectId" element={<ProjectShowPage />} />
      </Routes>
    </Router>
  );
};
export default App;

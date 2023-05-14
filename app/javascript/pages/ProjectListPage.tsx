import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ProjectList from "../components/ProjectList";
import { Project } from "../types/project";

const ProjectListPage = (): JSX.Element => {
  const [projects, setProjects] = useState<Project[]>({} as Project[]);

  const fetchProjects = () => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.map((project: Project) => project));
      });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <Typography variant="h4" gutterBottom component="div">
        Active projects
      </Typography>
      {projects.length > 0 && <ProjectList projects={projects} />}
    </>
  );
};

export default ProjectListPage;

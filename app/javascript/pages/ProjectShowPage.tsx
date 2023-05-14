import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Project } from "../types/project";
import { ProjectComment } from "../types/ProjectComment";

const ProjectShowPage = (): JSX.Element => {
  const [project, setProject] = useState<Project>({} as Project);
  const [loaded, setLoaded] = useState<boolean>(false);
  const { projectId } = useParams();

  const fetchProject = () => {
    fetch(`/projects/${projectId}.json`)
      .then((response) => response.json())
      .then((data) => {
        setProject(data as Project);
        setLoaded(true);
      });
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <>
      {loaded && (
        <>
          <Typography variant="h4" gutterBottom component="div">
            {project.title}
          </Typography>
          <p>{project.description}</p>
          {project.project_comments.map((comment: ProjectComment) => {
            return <p>{comment.content}</p>;
          })}
        </>
      )}
    </>
  );
};

export default ProjectShowPage;

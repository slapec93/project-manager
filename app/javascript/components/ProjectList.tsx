import { Grid, Paper } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import { Project } from "../types/project";

type ProjectListProps = {
  projects: Project[];
};

const ProjectList = ({ projects }: ProjectListProps): JSX.Element => {
  return (
    <div>
      <Grid container spacing={2}>
        {projects.map((project: Project) => {
          return (
            <Grid key={`project-${project.id}`} item xs={4}>
              <Link
                key={`project-${project.id}`}
                to={`/projects/${project.id}`}
                style={{ textDecoration: "none" }}
              >
                <Paper
                  elevation={6}
                  style={{ lineHeight: "60px", textAlign: "center" }}
                >
                  {project.title}
                </Paper>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ProjectList;

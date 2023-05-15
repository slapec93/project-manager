import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import _ from "lodash";
import { Project } from "../types/project";
import CommentList from "../components/CommentList";

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

  const createComment = (comment): Promise<Response> => {
    const csrfToken = document.querySelector("[name=csrf-token]").content;

    return fetch(`/projects/${projectId}/project_comments.json`, {
      method: "POST",
      headers: {
        "X-CSRF-TOKEN": csrfToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ project_comment: { content: comment } }),
    });
  };
  const submitComment = (e) => {
    if (e.keyCode == 13) {
      createComment(e.target.value).then((response) => {
        e.target.value = "";
        fetchProject();
      });
    }
  };

  const handleStatusChange = (e) => {
    console.log(e);
    const csrfToken = document.querySelector("[name=csrf-token]").content;

    fetch(`/projects/${projectId}.json`, {
      method: "PATCH",
      headers: {
        "X-CSRF-TOKEN": csrfToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ project: { status: e.target.value } }),
    }).then((response) => {
      createComment(
        `Status changed: ${_.capitalize(project.status)} -> ${_.capitalize(
          e.target.value
        )}`
      ).then((response) => {
        fetchProject();
      });
    });
  };

  return (
    <>
      {loaded && (
        <Container>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            textAlign={"center"}
          >
            {project.title}
          </Typography>
          <p>{project.description}</p>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={project.status}
              label="Status"
              onChange={handleStatusChange}
            >
              <MenuItem value={"planned"}>Planned</MenuItem>
              <MenuItem value={"started"}>Started</MenuItem>
              <MenuItem value={"finished"}>Finished</MenuItem>
            </Select>
          </FormControl>
          <CommentList comments={project.project_comments} />
          <TextField
            style={{ paddingTop: "10px" }}
            fullWidth={true}
            helperText="Add comment (press ENTER)"
            onKeyDown={submitComment}
            variant="outlined"
          />
        </Container>
      )}
    </>
  );
};

export default ProjectShowPage;

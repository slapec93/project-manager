import { Grid, Paper, Typography } from "@mui/material";
import * as React from "react";
import { ProjectComment } from "../types/ProjectComment";

type CommentListProps = {
  comments: ProjectComment[];
};

const CommentList = ({ comments }: CommentListProps): JSX.Element => {
  return (
    <>
      {comments.map((comment: ProjectComment) => {
        return (
          <Paper
            key={`comment-${comment.id}`}
            elevation={2}
            style={{ lineHeight: "60px", paddingLeft: "10px" }}
          >
            <Typography fontWeight={"bold"}>{comment.user.username}</Typography>
            {comment.content}
          </Paper>
        );
      })}
    </>
  );
};

export default CommentList;

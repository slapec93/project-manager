import { Grid, Paper, Typography } from "@mui/material";
import * as React from "react";
import { ProjectComment } from "../types/ProjectComment";
import { Container } from "@mui/system";

type CommentListProps = {
  comments: ProjectComment[];
};

const CommentList = ({ comments }: CommentListProps): JSX.Element => {
  return (
    <>
      {comments.map((comment: ProjectComment) => {
        const createdAt = new Date(comment.created_at);

        return (
          <Paper
            key={`comment-${comment.id}`}
            elevation={2}
            style={{ lineHeight: "60px", paddingLeft: "10px" }}
          >
            <Grid container>
              <Grid
                item
                xs={6}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <Typography fontWeight={"bold"}>
                  {comment.user.username}
                </Typography>
              </Grid>
              <Grid item xs={6} textAlign={"right"}>
                {createdAt.toLocaleString()}
              </Grid>
            </Grid>

            {comment.content}
          </Paper>
        );
      })}
    </>
  );
};

export default CommentList;

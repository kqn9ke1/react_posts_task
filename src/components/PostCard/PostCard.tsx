import React, { FC } from "react";
import Box from "@mui/material/Box";
import "./PostCard.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

type PostItemType = {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
};

const PostsCard: FC<PostItemType> = ({ post }) => {
  const truncate = (content: string, before: number) => {
    return content.split(" ").slice(0, before) + "...";
  };
  return (
    <div className="container">
      <div className="card">
        <h2>{truncate(post.title, 5)}</h2>
        <p>{truncate(post.body, 40)}</p>
      </div>
    </div>
  );
};

export default PostsCard;

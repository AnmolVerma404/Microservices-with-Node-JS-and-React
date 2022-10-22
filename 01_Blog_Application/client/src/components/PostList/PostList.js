import React from "react";
import CommentList from "./CommentList";
import CommentCreate from "./CommentCreat";

const PostList = () => {
  return (
    <div>
      <CommentList></CommentList>
      <CommentCreate></CommentCreate>
    </div>
  );
};

export default PostList;
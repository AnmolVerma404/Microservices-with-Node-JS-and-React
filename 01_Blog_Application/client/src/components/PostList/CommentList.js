import React from "react";

const CommentList = ({ comments }) => {
  //We no longer need this, as we are using query service
  //* const [comments, setComments] = useState([]);
  //* const fetchData = async () => {
  //*   const res = await axios.get(
  //*     `http://localhost:4001/posts/${postID}/comments`
  //*   );
  //*   setComments(res.data);
  //* };
  //* useEffect(() => {
  //*   fetchData();
  //* }, []);

  const renderedComments = comments.map((comment) => {
    let content;
    if (comment.status === "approved") {
      content = comment.content;
    }
    if (comment.status === "pending") {
      content = "This comment is awaiting moderation";
    }
    if (comment.status === "rejected") {
      content = "This comment has been rejected";
    }
    return <li key={comment.id}>{content}</li>;
  });
  return <ul>{renderedComments}</ul>;
};

export default CommentList;

import React from "react";
import { useComments } from "../../context/CommentContext";

const LatestComment: React.FC = () => {
  const { comments } = useComments();
  const latestComment = comments[comments.length - 1];

  return (
    <div className={`latest-comment z-40`}>
      <h2>Latest Comment</h2>
      {latestComment ? <p>{latestComment.content}</p> : <p>No comments yet.</p>}
    </div>
  );
};

export default LatestComment;

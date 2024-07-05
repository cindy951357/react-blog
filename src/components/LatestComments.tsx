import React from 'react';
import { useComments } from './CommentContext';

const LatestComment: React.FC = () => {
  const { comments } = useComments();
  const latestComment = comments[comments.length - 1];

  return (
    <div>
      <h2>Latest Comment</h2>
      {latestComment ? <p>{latestComment.text}</p> : <p>No comments yet.</p>}
    </div>
  );
};

export default LatestComment;

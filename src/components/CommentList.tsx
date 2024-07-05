import React from 'react';
import { useComments } from './CommentContext';

const CommentList: React.FC = () => {
  const { comments } = useComments();

  return (
    <div>
      <h2>All Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;

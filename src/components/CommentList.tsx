import React from 'react';
import { useComments } from './CommentContext';

const CommentList: React.FC = () => {
  const { comments } = useComments();

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className='mb-4 border-l-2 border-stone-200 pl-2 leading-relaxed'>
            {comment.content}
            <span className="comment-time text-xs ml-2 text-stone-400">{comment.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;

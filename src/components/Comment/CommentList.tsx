import React from "react";
import { useComments } from "../../context/CommentContext";

const CommentList: React.FC = () => {
  const { comments } = useComments();

  return (
    <div className="comment-list flex">
      <ul className="ul-comment flex flex-col">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="li-comment md:w-full mb-4 border-stone-200 pl-2
              leading-relaxed text-xs"
          >
            {comment.content}
            <span className="comment-time flex text-xs ml-2 text-stone-400">
              {comment.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;

import React from "react";
import { useComments } from "../../context/CommentContext";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";

const CommentList: React.FC = () => {
  const commentList = useSelector((state: IRootState) => (state.comment.commentList));

  return (
    <div className="comment-list flex">
      <ul className="ul-comment flex flex-col">
        {commentList.map((comment) => (
          <li
            key={comment.id}
            className="li-comment md:w-full mb-4 
              border-b border-gray-300  
              pl-2 leading-relaxed text-xs"
          >
            {comment.content}
            <span className="comment-time flex text-xs text-stone-400">
              {comment.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;

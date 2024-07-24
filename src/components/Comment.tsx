import React from 'react';

interface CommentProps {
    commentText: string;
}
const Comment: React.FC<CommentProps> = ({ commentText }) => {
    return (
        <div className="comment">
            {commentText}
        </div>
    )
};

export default Comment;
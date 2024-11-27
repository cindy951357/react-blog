import React from "react";
import { useSelector } from "react-redux";
import { IRootState, } from '@/store';
import AddComment from "../Comment/AddComment";

const PostContentComponent: React.FC = () => {
  const currentPost = useSelector((state: IRootState) => state.post.currentPost);

  if (!currentPost) {
    return <p>Post not found.</p>;
  }

  return (
    <div
      className="post-content single-post grid
      p-6
      max-xs:grid-rows-[1fr_20fr_20fr_1fr]
      md:grid-cols-[1fr_20fr_1fr_1fr]
      gap-1 md:gap-2 xs:gap-2 h-full w-full
    "
    >
      <div className="dummy post-dummy"></div>
      <main>
        <div className="post-main flex flex-col mb-8">
          <h1 className="text-xl">{currentPost.postTitle}</h1>
          <p>{currentPost.content}</p>
          <p>{currentPost.time}</p>
          <p>{currentPost.numLikes} likes</p>
          {currentPost.imgUrls && currentPost.imgUrls[0] && currentPost.imgUrls.map((url, index) => (
            <img
              key={index}
              className="w-[200px] md:max-w-80 rounded-xl"
              src={`/images/${currentPost.imgUrls[0]}`}
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
        <AddComment postId={currentPost.id}/>
      </main>      
      <div className="dummy post-dummy col"></div>
      <div className="dummy post-dummy"></div>
    </div>
  );
};

export default PostContentComponent;
function state(state: unknown): unknown {
  throw new Error("Function not implemented.");
}


import React from "react";
import { PostContent } from "./PostContent";
import { MOCK_POST } from "../mockData";
import Image from "next/image";
import GlowButton from "./Button/GlowButton";

const PostList: React.FC = () => {
  return (
    <div className="post-list">
      {MOCK_POST.map((post: PostContent) => (
        <div key={post.id} className="post bg-white p-4 shadow-md mb-4">
          <h2 className="post-title text-xl font-bold mb-2">
            <GlowButton btnText={post.title} color="LavenderBlush" />
          </h2>
          <p className="post-time text-gray-500 text-sm mb-2">{post.time}</p>
          <p className="post-content text-gray-700 mb-2">{post.content}</p>
          {post.imgURL && (
            <Image
              src={`/images/${post.imgURL}`}
              alt={post.title}
              width={500}
              height={300}
            />
          )}
          <div className="num-likes text-right text-gray-500">
            Likes: {post.numLikes}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;

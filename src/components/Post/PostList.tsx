import React, { useEffect } from "react";
import { IPost, } from "@/interfaces/PostInterface";
import { MOCK_POSTS } from "../../mockData";
import RippleButton from "../Button/RippleButton";
import Link from "next/link";
import { usePosts, PostProvider,  } from "@/context/PostContext";

const PostList: React.FC = () => {
  const { posts, setCurrentPost, getPostById, currentPost } = usePosts();

  const handlePostClick = (postId: string) => {
    const clickedPost: IPost | undefined = getPostById(postId);
    if (clickedPost) {
      setCurrentPost(clickedPost);
    }
  };

  useEffect(() => {
    console.log("useEffect useContext posts.length", posts.length);
  }, [posts.length]);
  return (
    <div className="post-list">
      {posts.map((post: IPost) => (
        <div
          key={post.id}
          className="post bg-white p-4 mb-4 border-b border-b-gray"
        >
          <h2 className="post-title text-xl font-bold mb-2">
            <Link href={`/post/${post.id}`} legacyBehavior>
              <a onClick={() => handlePostClick(post.id)}>
                <RippleButton
                  displayText={post.postTitle}
                  withBg={false}
                  detail={true}
                  onClick={() => {}}
                />
              </a>
            </Link>
          </h2>
          <p className="post-time text-gray-500 text-sm mb-2">{post.time}</p>
          <p className="post-content text-gray-700 mb-2">{post.content}</p>
          {post.imgUrls && (
            <img
              src={`/images/${post.imgUrls[0]}`}
              className="rounded-xl w-40 md:w-80"
              alt={post.postTitle}
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

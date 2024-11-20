'use client'

import React, { memo, useEffect, useState } from "react";
import { IPost, } from "@/interfaces/PostInterface";
import RippleButton from "../Button/RippleButton";
import Link from "next/link";
// React Context API | import { usePosts,  } from "@/context/PostContext";
import { useDispatch, useSelector, } from "react-redux";
import { setCurrentPostById, } from '@/features/postSlice';
import { useRouter } from "next/router";
import { IRootState } from "@/store";

const PostList: React.FC = memo(() => {
  // React Context API | const { posts, setCurrentPost, getPostById, currentPost } = usePosts();
  const dispatch = useDispatch();
  const router = useRouter();
  const postList = useSelector((state: IRootState) => (state.post.postList));
  const [postsFromLocal, setPosts] = useState([]);
  const [imgesSrc, setImgesSrc] = useState(['']);
  
  const handlePostClick = (postId: string) => {
    dispatch(setCurrentPostById(postId));
    router.push(`/post/${postId}`);
  };
  
  const setPostsInitialState = () => {
    const postsTmp = localStorage.getItem('posts');
    // 決定來源採用自localStorage還是useContext
    const postDecided = postsTmp ? JSON.parse(postsTmp) : postList;
    // console.log(`postDecided.length ${postDecided.length}`);
    setPosts(postDecided);
  };

  const decideImagesSrc = (rawImgSrcString: string) => {
    let finalImgSrc;
    // 考慮到有一部份圖片來自server, 一部分則是來自blob
    finalImgSrc = rawImgSrcString.includes('blob') 
      ? rawImgSrcString
      : `/images/${rawImgSrcString}`;
    return finalImgSrc;
  }
  
  useEffect(() => {
    setPostsInitialState();
  }, []);
  
  return (
    <div className="post-list">
      {postsFromLocal.map((post: IPost) => (
        <div
          key={post.id}
          className="post bg-white p-4 mb-4 border-b border-b-gray"
        >
          <h2 className="post-title text-xl font-bold mb-2">
            <a onClick={() => handlePostClick(post.id)}>
              <RippleButton
                displayText={post.postTitle}
                withBg={false}
                detail={true}
                onClick={() => {}}
              />
            </a>
          </h2>
          <p className="post-time text-gray-500 text-sm mb-2">{post.time}</p>
          <p className="post-content text-gray-700 mb-2">{post.content}</p>
          {post.imgUrls && (
            <img
              src={decideImagesSrc(post.imgUrls[0])}
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
});

export default PostList;

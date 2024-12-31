'use client'

import React, { memo, useEffect, useState } from "react";
import { IPost, } from "@/interfaces/PostInterface";
import RippleButton from "../Button/RippleButton";
import { useDispatch, useSelector, } from "react-redux";
import { likePost, setCurrentPostById, setReduxPostSourceFromLocalStorage, }
 from '@/features/postSlice';
import { useRouter } from "next/router";
import { IRootState } from "@/store";
import { useTranslation } from "react-i18next";
import { PostListProps } from "@/interfaces/PostListInterface";

const PostList: React.FC<PostListProps> = memo(({ showCommentList, }) => {
  const { t } = useTranslation('PostList');
  const dispatch = useDispatch();
  const router = useRouter();
  const postList = useSelector((state: IRootState) => (state.post.postList));
  const commentList = useSelector((state: IRootState) => (state.comment.commentList));
  
  const handlePostClick = (postId: string) => {
    dispatch(setCurrentPostById(postId));
    router.push(`/post/${postId}`);
  };
  
  const setPostsInitialState = () => {
    const postsLocalstorageTmp = localStorage.getItem('postsFromRedux');
    let postDecided;
    // 決定來源採用自localStorage還是useContext
    if(postsLocalstorageTmp) {
      postDecided = JSON.parse(postsLocalstorageTmp);
      // 也要更新Redux資料
      setReduxPostSourceFromLocalStorage(postDecided);
    } else {
      postDecided = postList;
    };
  };

  const decideImagesSrc = (rawImgSrcString: string) => {
    if (!rawImgSrcString) {
      return;
    }
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
      {postList.map((post: IPost) => (
        <div key={post.id} className="post-and-comments flex flex-col py-4">
          <div
            className="post bg-white border-b border-gray-300 mb-4"
          >
            <h2 className="post-title text-xl font-bold mb-2">
              <a onClick={() => handlePostClick(post.id)}>
                <RippleButton
                  displayText={post.postTitle}
                  withBg={false}
                  detail={true}
                  onClick={() => {}}
                  isCentered={false}
                />
              </a>
            </h2>
            <p className="post-time text-gray-500 text-sm mb-2">{post.time}</p>
            <p className="post-content text-gray-700 mb-2">{post.content}</p>
            {post.imgUrls && post.imgUrls[0] && (
              <img
                src={decideImagesSrc(post.imgUrls[0].toString())}
                className="rounded-xl w-40 md:w-80"
                alt={post.postTitle}
              />
            )}
            <div className="num-likes text-right text-gray-500 w-full flex justify-end
              items-center
            ">
              <img src='./images/heart-black-outline.svg' className='w-8 h-8 flex mr-4
                cursor-pointer active:scale-125
                transform transition-transform duration-300 ease-in-out hover:scale-125'
                onClick={() => {dispatch(likePost(post.id))}}  
              />
              <strong className='flex'>Likes: {post.numLikes}</strong>
            </div>
          </div>
          {/** Conditionally render comments based on UI design*/}
          {showCommentList && <section className="comment-section flex flex-col p-2
           border-b border-b-gray">
            <strong>{t('Comments')}</strong>
            {
              // 用這一篇post去找其下所有留言評論
              post.commentIds.map(commentId => {
                const curComment = commentList.find(elem => elem.id === commentId);
                return curComment && <div key={commentId} 
                  className='one-comment my-4 border-b border-gray-300'>
                  <div className="content">
                    {curComment.content}
                  </div>
                  <span className="author mr-2">
                    {curComment.author}
                  </span>
                  <span className="time mx-2 text-stone-400">
                    {curComment.time}
                  </span>
                  </div>
              })
            }            
          </section>
          }
        </div>
      ))}
    </div>
  );
});

export default PostList;
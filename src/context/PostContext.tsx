import { MOCK_POSTS } from "@/mockData";
import React, { createContext, useState, useContext, ReactNode, SetStateAction } from "react";
import { IPost, } from "@/interfaces/PostInterface";
interface IPostContext {
  posts: IPost[];
  addPost: (post: IPost) => void;
  currentPost: IPost | null;
  setCurrentPost: (post: IPost) => void;
  getPostById: (id: string) => IPost | undefined;
}

const PostContext = createContext<IPostContext | undefined>(undefined);

export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePosts must be used within a PostProvider");
  }
  return context;
};

export const PostProvider: React.FC<{ children: ReactNode }> = ({ children, }) => {
  const [posts, setPosts] = useState<IPost[]>([...MOCK_POSTS]);
  const [currentPost, setCurrentPost] = useState<IPost | null>(null);

  const addPost = (newPost: IPost) => {
    console.log(`newPost ${newPost.content}`)
    setPosts((oldPosts) => (
      [newPost, ...oldPosts]
    ));
  };

  const getPostById = (id: string) => {
    return posts.find((p) => p.id === id);
  };

  return (
    <PostContext.Provider
      value={{ posts, addPost, currentPost, setCurrentPost, getPostById }}
    >
      {children}
    </PostContext.Provider>
  );
};

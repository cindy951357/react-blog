import { MOCK_POSTS } from "@/mockData";
import React, { createContext, useState, useContext, ReactNode } from "react";
import { PostInterface } from "@/interfaces/PostInterface";
interface PostContextProps {
  posts: PostInterface[];
  addPost: (post: PostInterface) => void;
  currentPost: PostInterface | null;
  setCurrentPost: (post: PostInterface) => void;
  getPostById: (id: number) => PostInterface | undefined;
}

const PostContext = createContext<PostContextProps | undefined>(undefined);

export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePosts must be used within a PostProvider");
  }
  return context;
};

export const PostProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [posts, setPosts] = useState<PostInterface[]>(MOCK_POSTS);
  const [currentPost, setCurrentPost] = useState<PostInterface | null>(null);

  const addPost = (post: PostInterface) => {
    setPosts([...posts, post]);
  };

  const getPostById = (id: number) => {
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

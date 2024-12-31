import { MOCK_COMMENTS } from '@/mockData';
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { IComment } from '@/interfaces/PostInterface';

interface CommentContextProps {
  comments: IComment[];
  addComment: (comment: IComment) => void;
}

const CommentContext = createContext<CommentContextProps | undefined>(undefined);

export const useComments = () => {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error('useComments must be used within a CommentProvider');
  }
  return context;
};

export const CommentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [comments, setComments] = useState<IComment[]>(MOCK_COMMENTS);

  const addComment = (comment: IComment) => {
    setComments([...comments, comment]);
  };

  return (
    <CommentContext.Provider value={{ comments, addComment }}>
      {children}
    </CommentContext.Provider>
  );
};
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Comment {
  id: number;
  text: string;
}

interface CommentContextProps {
  comments: Comment[];
  addComment: (comment: Comment) => void;
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
  const [comments, setComments] = useState<Comment[]>([{id: 1, text: 'First coment'}]);

  const addComment = (comment: Comment) => {
    setComments([...comments, comment]);
  };

  return (
    <CommentContext.Provider value={{ comments, addComment }}>
      {children}
    </CommentContext.Provider>
  );
};
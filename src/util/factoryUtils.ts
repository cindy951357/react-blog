// Factory Pattern
import { Post } from "../features/postSlice";

export const createPost = (title: string, content: string): Post => ({
  id: Date.now(),
  title,
  content,
  likes: 0,
  isFavorited: false,
});
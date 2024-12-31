import { IBookmarked, ILikable } from "./DecoratorPattern";

export interface IPost extends ILikable, IBookmarked{
  id: string;
  postTitle: string;
  content: string;
  time: string;
  imgUrls: String[];
  commentIds: Array<string>;
}

export interface IErrorPost {
  titleError: [boolean, string],
  contentError: [boolean, string],
  imageError: [[boolean, string],]
};

export interface IComment extends ILikable, IBookmarked {
  id: string;
  postId: string;
  author: string;
  time: string;
  content: string;
}

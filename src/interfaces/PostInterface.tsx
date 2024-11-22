export interface IPost {
  id: string;
  postTitle: string;
  content: string;
  time: string;
  numLikes: number;
  imgUrls: Array<any>;
  commentIds: Array<string>;
}

export interface IErrorPost {
  titleError: [boolean, string],
  contentError: [boolean, string],
  imageError: [[boolean, string],]
};

export interface IComment {
  id: string;
  author: string;
  time: string;
  content: string;
  numLikes: number;
}

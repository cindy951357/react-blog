export interface IPost {
  id: string;
  postTitle: string;
  content: string;
  time: string;
  numLikes: number;
  imgUrls: Array<string>;
}

export interface IErrorPost {
  titleError: [boolean, string],
  contentError: [boolean, string],
  imageError: [[boolean, string],]
};

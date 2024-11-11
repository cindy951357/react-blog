import PostContent from "@/components/Post/PostContent";
import { IPost } from "@/interfaces/PostInterface";
import Image from "next/image";

const Post: React.FC<IPost> = ({
  id,
  postTitle,
  content,
  time,
  numLikes,
  imgUrls,
}) => {
  return <PostContent />;
};

export default Post;

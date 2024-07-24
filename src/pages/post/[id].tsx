import PostContent from "@/components/Post/PostContent";
import { PostInterface } from "@/interfaces/PostInterface";
import Image from "next/image";

const Post: React.FC<PostInterface> = ({
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

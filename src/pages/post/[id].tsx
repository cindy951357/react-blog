import PostContent from "@/components/Post/PostContent";
import { IPost } from "@/interfaces/PostInterface";
import Image from "next/image";

const Post: React.FC<IPost> = ({
}) => {
  return <PostContent />;
};

export default Post;

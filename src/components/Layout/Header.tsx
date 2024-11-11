import { usePosts } from "@/context/PostContext";
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"] });

export default function Header() {
  const { addPost, posts, } = usePosts();

  return (
    <div
      className={`header flex justify-center items-center p-4 text-gray ${nunito.className}`}
    >
      {`Cindy's Blog`} 
      {/* {` count: ${posts.length}`} */}
    </div>
  );
}

import { useTranslation } from "next-i18next";
import CommentList from "../components/CommentList";
import PostList from "../components/PostList";

export default function Index() {
  const { t } = useTranslation("common");
  return (
    <div className="home-page grid grid-cols-[1fr_20fr_1fr_1fr] gap-1 h-full w-fullbg-slate-100 h-full">
      <div className="dummy home-dummy"></div>
      <div className="latest-posts bg-white p-4 shadow-md mr-2 rounded-xl">
        <h2 className="md:text-xl font-bold mb-4">Article List</h2>
        <ul>
          <PostList />
        </ul>
      </div>
      <div className="latest-comments bg-white p-4 shadow-md rounded-xl">
        <h2 className="md:text-xl font-bold mb-4">Latest Comments</h2>
        <ul>
          <CommentList />
        </ul>
      </div>
      <div className="dummy home-dummy"></div>
  </div>
  );
}

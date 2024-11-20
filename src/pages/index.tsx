import { useEffect, memo, } from "react";
import CommentList from "../components/Comment/CommentList";
import PostList from "../components/Post/PostList";
import { useToast } from "@/context/ToastContext";
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const locale = context.locale || 'en';
  const translations = await serverSideTranslations(locale, ['common']);
  return {
    props: {
      ...translations,
    },
  };
};



export default memo(function Index() {
  const { showToast } = useToast();

  useEffect(() => {
    showToast("Welcom to Cindy's Blog");
  }, []);

  return (
    <div
      className="home-page post-list grid
      xs:grid-rows-[1fr_20fr_20fr_1fr]
      md:grid-cols-[1fr_20fr_1fr_1fr]
      gap-1 md:gap-2 xs:gap-2 h-full
      md:w-full h-full bg-slate-100"
    >
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
});

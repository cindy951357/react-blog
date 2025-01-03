import { useEffect, } from "react";
import CommentList from "../components/Comment/CommentList";
import PostList from "../components/Post/PostList";
import { useToast } from "@/context/ToastContext";
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "react-i18next";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const locale = context.locale || 'en';
  const translations = await serverSideTranslations(locale, ['translation']);
  return {
    props: {
      ...translations,
    },
  };
};


export default function Index() {
  const { showToast } = useToast();
  const { t, ready } = useTranslation();

  useEffect(() => {
    if (ready) {
      showToast(t('Common.WebGreeting')); // 準備就緒後才執行
    }
  }, [ready]);

  return (
    <div
      className="home-page post-list grid
      max-xs:grid-rows-[1fr_20fr_20fr_1fr]
      md:grid-cols-[1fr_20fr_1fr_1fr]
      gap-1 md:gap-2 xs:gap-2 h-full
      md:w-full h-full"
    >
      <div className="dummy home-dummy"></div>
      <div className="latest-posts bg-white p-4 mr-2 rounded-xl">
        <h2 className="text-xs font-bold mb-4">Latest Articles</h2>
        <ul>
          <PostList showCommentList={false}/>
        </ul>
      </div>
      <div className="latest-comments bg-white p-4 rounded-xl">
        <h2 className="text-xs md:text-m font-bold mb-4">Latest Comments</h2>
        <ul>
          <CommentList />
        </ul>
      </div>
      <div className="dummy home-dummy"></div>
    </div>
  );
};

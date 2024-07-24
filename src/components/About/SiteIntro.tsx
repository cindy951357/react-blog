const introContent = [
  {
    title: "本網頁製作背景",
    text: "製作作品集與練習Next.js，並且加強對 ChatGPT 詠唱程式碼生成的練習。\
      之前也沒有做過部落格的網頁作品。",
  },
  {
    title: "使用技術",
    badges: ["React.js", "Next.js", "TailwindCSS", "TypeScript", "i18n"],
  },
];
const SiteIntroPage = () => {
  return (
    <div className="site-intro-component">
      <h1 className="intro-title flex p-2 rounded-xl text-lg">
        Site Introduction
      </h1>
      <p className="paragraph-1">
        {
          <h2 className="intro-title flex p-2 bg-skin rounded-xl">
            {introContent[0].title}
          </h2>
        }
        <div className="flex content p-2">{introContent[0].text}</div>
      </p>
      <p className="paragraph-1">
        {
          <h2 className="intro-title flex p-2 bg-skin rounded-xl">
            {introContent[1].title}
          </h2>
        }
        <div className="badges-wrapper flex content pt-2 flex-col">
          {introContent[1].badges?.map((badge) => (
            <span className="tech-badge flex bg-success p-4 rounded-lg mx-1 mt-1">
              {badge}
            </span>
          ))}
        </div>
      </p>
    </div>
  );
};

export default SiteIntroPage;

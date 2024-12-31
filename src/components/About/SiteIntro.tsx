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
      <h1 className="intro-title flex p-2 rounded-xs text-lg">
        Site Introduction
      </h1>
      <div className="paragraph-1">
        {
          <h2 className="intro-title flex p-2 bg-skin rounded-xs">
            {introContent[0].title}
          </h2>
        }
        <div className="flex content p-2">{introContent[0].text}</div>
      </div>
      <div className="paragraph-1">
        {
          <h2 className="intro-title flex p-2 bg-skin rounded-xs">
            {introContent[1].title}
          </h2>
        }
        <div className="badges-wrapper flex content pt-2 flex-col">
          {introContent[1].badges?.map((badge) => (
            <span className="tech-badge flex bg-lightskin p-4 rounded-xs mx-1 mt-1">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SiteIntroPage;

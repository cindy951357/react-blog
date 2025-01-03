import { useTranslation } from "react-i18next";
import { Nunito } from "next/font/google";
import UserMenu from "./UserMenu";
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"] });

export default function Header() {
  const { t } = useTranslation();

  return (
    <div className={`title-and-user-btn h-10 relative flex 
      items-center bg-gray-100 z-70
    ${nunito.className}`}>
      {/* Title 置中, 用到transform-translate*/}
      <div className="absolute left-1/2 transform -translate-x-1/2
      font-bold text-lg p-3">          
        <span className={nunito.className}>{t("Common.WebsiteName")}</span>
      </div>

      {/* UserMenu 靠右 */}
      <div className={`h-full flex-none ml-auto`}>
        <UserMenu />
      </div>
    </div>
  );
}

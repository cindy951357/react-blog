import { useTranslation } from "react-i18next";
import { Nunito } from "next/font/google";
import UserMenu from "./UserMenu";
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"] });

export default function Header() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between px-4 bg-gray-100">
      <div className={`flex-1 text-center font-bold text-lg ${nunito.className}`}>
        {t("Common.WebsiteName")}
      </div>
      <div className={`flex-none ${nunito.className}`}>
        <UserMenu />
      </div>
    </div>
  );
}

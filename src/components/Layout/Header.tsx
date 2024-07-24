import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"] });

export default function Header() {
  return (
    <div
      className={`header flex justify-center items-center p-4 text-gray ${nunito.className}`}
    >
      Cindy's Blog
    </div>
  );
}

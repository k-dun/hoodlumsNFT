import { DM_Sans } from "next/font/google";
import "./lumresearch.css";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "SomeRarity",
  description: "A tool to look up rarity of your Lum and their traits.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmsans.className}`} id="lumResearchContainer">{children}</body>
    </html>
  );
}

import { DM_Sans, Permanent_Marker } from "next/font/google";
import "./globals.css";

const dmsans = DM_Sans({ subsets: ["latin"] });
const marker = Permanent_Marker({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Hoodlums NFT",
  description: "Powered by community. Art by SomeHoodlum.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
      </head>
      <body className={dmsans.className} id="bodyContainer">{children}</body>
    </html>
  );
}

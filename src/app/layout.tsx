import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PUBG: BATTLEGROUNDS - Omon Qolish Uchun Jang Qil",
  description: "PUBG Mobile va PC uchun rasmiy o'zbek hamjamiyati va battle royale platformasi. Erangel, Miramar va boshqa xaritalarda jang qiling!",
  keywords: ["PUBG", "PUBG Mobile", "Battlegrounds", "Erangel", "Miramar", "Turnirlar", "O'zbekiston"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className="min-h-screen bg-[#08090d] text-zinc-100 antialiased selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}

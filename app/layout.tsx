import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hookify - Free AI Hook Generator",
  description:
    "Generate viral hooks for TikTok, Instagram Reels, YouTube Shorts, LinkedIn and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

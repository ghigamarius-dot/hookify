import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hookify - Generate Viral Hooks In Seconds",
  description:
    "Free viral hook generator for TikTok, Instagram Reels and YouTube Shorts creators.",
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

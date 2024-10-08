import type { Metadata } from "next";
import "./style/globals.css";

export const metadata: Metadata = {
  title: "Horizon Zero Dawn wiki",
  description:
    "A tiny wiki about weapons, machines and some details abou the game Horiozn Zero Dawn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

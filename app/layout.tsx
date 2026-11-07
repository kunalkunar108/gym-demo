import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IRONCORE FITNESS | Train Beyond Limits",
  description: "Build strength, discipline and confidence at IRONCORE FITNESS. Explore training programs, expert coaching and membership options.",
  keywords: ["gym", "fitness", "personal training", "strength training", "fitness club"],
  openGraph: {
    title: "IRONCORE FITNESS | Train Beyond Limits",
    description: "Your next level starts here.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
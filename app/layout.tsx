import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ஜீவனயம் | Tamil Personalized Story Books",
  description: "Turn your memories into a beautifully written Tamil story book.",
  keywords: ["Tamil Story Book", "Personalized Book Tamil", "Life Story Book", "Family Memory Book", "Love Story Book Tamil", "Parents Memoir Book", "House Journey Book", "Jeevanyam"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ta">
      <head>
        {/* Preload only the above-the-fold critical images */}
        <link rel="preload" as="image" href="/images/jeevanyam-logo-dark.png"/>
        <link rel="preload" as="image" href="/images/hero-memory-1.jpg"/>
      </head>
      <body>{children}</body>
    </html>
  );
}

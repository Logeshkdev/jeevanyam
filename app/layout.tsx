import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ஜீவனயம் | தனிப்பயன் கதை புத்தகங்கள்",
  description: "உங்கள் நினைவுகளை அழகான தமிழ் கதை புத்தகமாக மாற்றுங்கள். Turn your memories into a beautifully written Tamil story book.",
  keywords: ["Tamil Story Book", "Personalized Book Tamil", "Life Story Book", "Family Memory Book", "Love Story Book Tamil", "Parents Memoir Book", "House Journey Book", "Jeevanyam", "ஜீவனயம்"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ta">
      <head>
        {/* Viewport for mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>

        {/* Google Fonts — Noto Serif Tamil (headings) + Noto Sans Tamil (body) */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Tamil:wght@400;500;600;700&family=Noto+Sans+Tamil:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&display=swap"
          rel="stylesheet"
        />

        {/* Preload only the above-the-fold critical images */}
        <link rel="preload" as="image" href="/images/jeevanyam-logo-dark.png"/>
        <link rel="preload" as="image" href="/images/hero-memory-1.jpg"/>
      </head>
      <body>{children}</body>
    </html>
  );
}

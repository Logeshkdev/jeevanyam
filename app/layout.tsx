import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Noto_Sans_Tamil, Noto_Serif_Tamil } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans-latin" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif-latin" });
const notoSansTamil = Noto_Sans_Tamil({ subsets: ["tamil"], variable: "--font-sans-tamil", weight: ["400", "500", "600", "700"] });
const notoSerifTamil = Noto_Serif_Tamil({ subsets: ["tamil"], variable: "--font-serif-tamil", weight: ["400", "500", "600", "700"] });

export const viewport: Viewport = {
  themeColor: "#641f2b",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jeevanyam.in"),
  title: "ஜீவனயம் | Jeevanyam",
  description: "உங்கள் வாழ்க்கை ஒரு அழகான புத்தகமாக | Turn your life into a beautiful book",
  openGraph: {

    title: "ஜீவனயம் | Jeevanyam",
    description: "உங்கள் வாழ்க்கை ஒரு அழகான புத்தகமாக",
    url: "https://jeevanyam.in",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jeevanyam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ஜீவனயம் | Jeevanyam",
    description: "உங்கள் வாழ்க்கை ஒரு அழகான புத்தகமாக | Turn your life into a beautiful book",
    images: ["/images/og-image.png"],
  },
  appleWebApp: {
    title: "Jeevanyam",
    statusBarStyle: "default",
    capable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ta" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${notoSansTamil.variable} ${notoSerifTamil.variable} font-sans antialiased bg-cream`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

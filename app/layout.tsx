import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "நினைவு கதைகள் | Tamil Personalized Story Books",
  description: "Turn your memories into a beautifully written Tamil story book.",
  keywords: ["Tamil Story Book", "Personalized Book Tamil", "Life Story Book", "Family Memory Book", "Love Story Book Tamil", "Parents Memoir Book", "House Journey Book"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ta"><body>{children}</body></html>;
}

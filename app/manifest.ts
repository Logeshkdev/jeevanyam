import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jeevanyam | Your memories into beautiful books",
    short_name: "Jeevanyam",
    description: "Turn your life story, family memories, and legacy into thoughtfully written, beautifully designed books.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf6ed",
    theme_color: "#641f2b",
    icons: [
      {
        src: "/images/og-image.png",
        sizes: "1200x630",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}

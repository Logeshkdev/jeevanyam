import { PricingTier, ServiceItem, Testimonial } from "./types";

export const getWhatsappUrl = (message?: string) => {
  const num = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "916383393155";
  const defaultMsg = "வணக்கம்! என் கதையை ஒரு புத்தகமாக மாற்ற விரும்புகிறேன்.";
  return `https://wa.me/${num}?text=${encodeURIComponent(message || defaultMsg)}`;
};

export const SERVICES: ServiceItem[] = [
  { id: "love", taName: "காதல் கதை", enName: "Love Story", taDesc: "காதலின் முதல் சந்திப்பிலிருந்து வாழ்நாள் பயணம் வரை.", enDesc: "From your first meeting to a lifetime journey of love.", emoji: "❤️" },
  { id: "family", taName: "குடும்ப நினைவுகள்", enName: "Family Story", taDesc: "உங்கள் குடும்பத்தின் அழகிய பாரம்பரியத்தைப் பாதுகாப்போம்.", enDesc: "Preserve your family's beautiful heritage for generations.", emoji: "👨‍👩‍👧" },
  { id: "house", taName: "வீட்டின் பயணம்", enName: "House Journey", taDesc: "கனவிலிருந்து இல்லம் வரை ஒவ்வொரு அத்தியாயமும்.", enDesc: "Every chapter from a dream to the home you built.", emoji: "🏠" },
  { id: "parents", taName: "பெற்றோர் வரலாறு", enName: "Parents Memoir", taDesc: "அன்பும் தியாகமும் நிறைந்த அவர்களின் வாழ்க்கை.", enDesc: "A life of love and sacrifice, held close forever.", emoji: "👵" },
  { id: "wedding", taName: "திருமண நினைவுகள்", enName: "Wedding Story", taDesc: "உங்கள் சிறப்பான நாளை என்றும் வாழும் கதையாக மாற்றுவோம்.", enDesc: "Let your special day live on as a beautiful story.", emoji: "💍" },
  { id: "business", taName: "தொழில் பயணம்", enName: "Business Journey", taDesc: "ஒரு கனவின் தொடக்கமும் அதன் வெற்றிப் பயணமும்.", enDesc: "The beginning of a dream and the path to success.", emoji: "💼" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    ta: "என் அப்பாவின் வாழ்க்கைக் கதையை புத்தகமாகக் கொடுத்தபோது அவர் கண்களில் கண்ணீர் வந்தது.",
    en: "When we gave my father his life story as a book, there were tears in his eyes.",
    authorTa: "மீனா மற்றும் குடும்பம்",
    authorEn: "Meena & family"
  },
  {
    ta: "எங்கள் காதல் பயணத்தை புத்தகமாக மாற்றிய விதம் மிகவும் அழகாக இருந்தது — நன்றி ஜீவனயம்.",
    en: "The way they turned our journey of love into a book was truly beautiful — thank you Jeevanyam.",
    authorTa: "அருண் மற்றும் காவ்யா",
    authorEn: "Arun & Kavya"
  },
  {
    ta: "வீடு கட்டிய பயணத்தை புத்தகமாக வைத்திருப்பது எங்கள் குடும்பத்திற்கு ஒரு பொக்கிஷம்.",
    en: "Keeping our home-building journey as a book is a treasure for our family.",
    authorTa: "ராஜேஷ் குடும்பம்",
    authorEn: "Rajesh family"
  }
];

export const PRICING_TIERS: PricingTier[] = [
  { id: "starter", taName: "தொடக்கம்", enName: "Starter", features: ["Story writing", "PDF delivery"], featured: false },
  { id: "premium", taName: "அழகு", enName: "Premium", features: ["Story writing", "Premium design", "PDF delivery"], featured: true },
  { id: "luxury", taName: "பாரம்பரியம்", enName: "Luxury", features: ["Story writing", "Premium design", "Print support", "Gift-ready finish"], featured: false }
];

export const getNavLinks = (t: (ta: string, en: string) => string) => [
  { href: "#services", label: t("சேவைகள்", "Services") },
  { href: "#portfolio", label: t("புத்தகங்கள்", "Books") },
  { href: "#pricing", label: t("விலை", "Pricing") },
  { href: "#about", label: t("எங்களைப் பற்றி", "About") },
  { href: "#contact", label: t("தொடர்பு", "Contact") }
];

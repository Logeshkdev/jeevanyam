export interface ServiceItem {
  id: string;
  taName: string;
  enName: string;
  taDesc: string;
  enDesc: string;
  emoji: string;
}

export interface Testimonial {
  ta: string;
  en: string;
  authorTa: string;
  authorEn: string;
}

export interface PricingTier {
  id: string;
  taName: string;
  enName: string;
  features: string[];
  featured: boolean;
}

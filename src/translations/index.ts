import { Lang } from "@/context/LanguageContext";
import headerTranslations from "./header";
import heroTranslations from "./hero";
import testimonialsTranslations from "./testimonials";
import galleryTranslations from "./gallery";
import faqTranslations from "./faq";
import donationTranslations from "./donation";
import footerTranslations from "./footer";
import contactTranslations from "./contact";
import newsTranslations from "./news";

import aboutTranslations from "./about";

// Central translations registry — add new sections here
const allTranslations: Record<string, Record<Lang, Record<string, string>>> = {
  header: headerTranslations,
  hero: heroTranslations,
  about: aboutTranslations,
  testimonials: testimonialsTranslations,
  gallery: galleryTranslations,
  faq: faqTranslations,
  donation: donationTranslations,
  footer: footerTranslations,
  contact: contactTranslations,
  news: newsTranslations,
};

export default allTranslations;

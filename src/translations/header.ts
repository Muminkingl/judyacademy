import { Lang } from "@/context/LanguageContext";

const headerTranslations: Record<Lang, Record<string, string>> = {
  en: {
    // Top bar
    address: "40M St, Erbil, Iraq",
    email: "info@judyacademy.org",
    phone: "07504477409",
    foundationName: "Judy Academy",

    // Nav links
    home: "Home",
    gallery: "Gallery",
    faq: "FAQ",
    contact: "Contact",
    news: "News",

    // Taglines
    tagline: "Advancing Qur'anic Knowledge",
    academicTag: "for Qur'anic Research",
    estKurdistan: "Est. Kurdistan",

    // CTA
    contactUs: "Contact Us",
  },

  ku: {
    // Top bar
    address: "شەقامی ٤٠م، هەولێر، عێراق",
    email: "info@judyacademy.org",
    phone: "٠٧٥٠٤٤٧٧٤٠٩",
    foundationName: "ئەکادیمیای جودی",

    // Nav links
    home: "سەرەکی",
    gallery: "وێنەکان",
    faq: "پرسیارەکان",
    contact: "پەیوەندی",
    news: "هەواڵ",

    // Taglines
    tagline: "پەرەپێدانی زانیاریی قورئانی",
    academicTag: "بۆ توێژینەوەی قورئانی",
    estKurdistan: "لە کوردستان دامەزراوە",

    // CTA
    contactUs: "پەیوەندیمان پێوە بکە",
  },

  ar: {
    // Top bar
    address: "شارع 40م، أربيل، العراق",
    email: "info@judyacademy.org",
    phone: "٠٧٥٠٤٤٧٧٤٠٩",
    foundationName: "أكاديمية جودي",

    // Nav links
    home: "الرئيسية",
    gallery: "المعرض",
    faq: "الأسئلة",
    contact: "اتصل بنا",
    news: "الأخبار",

    // Taglines
    tagline: "نشر المعرفة القرآنية",
    academicTag: "للبحوث القرآنية",
    estKurdistan: "تأسست في كوردستان",

    // CTA
    contactUs: "تواصل معنا",
  },
};

export default headerTranslations;

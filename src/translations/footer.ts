import { Lang } from "@/context/LanguageContext";

const footerTranslations: Record<Lang, Record<string, string>> = {
  en: {
    brandName: "Judy Academy",
    brandDesc: "An academic institution dedicated to advancing scholarly research in Qur'anic studies and Islamic sciences.",

    // Column titles
    quickLinksTitle: "Quick Links",
    programsTitle: "Programs",
    contactTitle: "Contact Us",

    // Quick links (matches header nav order)
    linkHome: "Home",
    linkQuotes: "Quotes",
    linkGallery: "Gallery",
    linkFaq: "FAQ",
    linkDonate: "Donate",
    linkContact: "Contact",
    linkNews: "News",

    // Programs
    prog1: "Qur'anic Exegesis",
    prog2: "Islamic Sciences",
    prog3: "Research Fellowship",
    prog4: "Academic Dialogue",

    // Contact
    address: "Erbil, Kurdistan Region, Iraq",
    email: "info@judyacademy.org",
    phone: "07504477409",
    contactUs: "Contact Us",

    // Bottom
    copyright: "Judy Academy for Qur'anic Research and Studies. All rights reserved.",
  },

  ku: {
    brandName: "ئەکادیمیای جودی",
    brandDesc: "دامەزراوەیەکی ئەکادیمییە تایبەتە بە پەرەپێدانی توێژینەوەی زانستی لە لێکۆڵینەوە قورئانییەکان و زانستە ئیسلامییەکاندا.",

    quickLinksTitle: "لینکە خێراکان",
    programsTitle: "بەرنامەکان",
    contactTitle: "پەیوەندیمان پێوە بکە",

    linkHome: "سەرەکی",
    linkQuotes: "وتەکان",
    linkGallery: "وێنەکان",
    linkFaq: "پرسیارەکان",
    linkDonate: "بەخشین",
    linkContact: "پەیوەندی",
    linkNews: "هەواڵ",

    prog1: "تەفسیری قورئان",
    prog2: "زانستە ئیسلامییەکان",
    prog3: "هاوکاری توێژینەوە",
    prog4: "دیالۆگی ئەکادیمی",

    address: "هەولێر، هەرێمی کوردستان، عێراق",
    email: "info@judyacademy.org",
    phone: "٠٧٥٠٤٤٧٧٤٠٩",
    contactUs: "پەیوەندیمان پێوە بکە",

    copyright: "ئەکادیمیای جودی بۆ توێژینەوە و لێکۆڵینەوە قورئانییەکان. هەموو مافەکان پارێزراون.",
  },

  ar: {
    brandName: "أكاديمية جودي",
    brandDesc: "مؤسسة أكاديمية مكرسة لتعزيز البحث العلمي في الدراسات القرآنية والعلوم الإسلامية.",

    quickLinksTitle: "روابط سريعة",
    programsTitle: "البرامج",
    contactTitle: "اتصل بنا",

    linkHome: "الرئيسية",
    linkQuotes: "الاقتباسات",
    linkGallery: "المعرض",
    linkFaq: "الأسئلة",
    linkDonate: "تبرع",
    linkContact: "اتصل بنا",
    linkNews: "الأخبار",

    prog1: "تفسير القرآن",
    prog2: "العلوم الإسلامية",
    prog3: "زمالة البحوث",
    prog4: "الحوار الأكاديمي",

    address: "أربيل، إقليم كوردستان، العراق",
    email: "info@judyacademy.org",
    phone: "٠٧٥٠٤٤٧٧٤٠٩",
    contactUs: "اتصل بنا",

    copyright: "أكاديمية جودي للبحوث والدراسات القرآنية. جميع الحقوق محفوظة.",
  },
};

export default footerTranslations;

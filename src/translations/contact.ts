import { Lang } from "@/context/LanguageContext";

const contactTranslations: Record<Lang, Record<string, string>> = {
  en: {
    // Page header
    sectionLabel: "Reach Out to Us",
    heading: "Contact",
    headingAccent: "the Academy",
    subheading: "We welcome scholars, researchers, and learners to reach out regarding our programs and academic resources.",

    // Form card
    formTitle: "Academic Inquiry",
    formSubtitle: "We respond within 48 hours",

    // Form fields
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    subject: "Subject of Inquiry",
    message: "Your message or inquiry…",
    send: "Submit Inquiry",

    // Success message
    successTitle: "Inquiry Received",
    successDesc: "Our academic team will correspond with you shortly.",

    // Contact info cards
    addressTitle: "Location",
    addressValue: "40M St, Erbil, Kurdistan Region, Iraq",
    emailTitle: "Email",
    emailValue: "info@judyacademy.org",
    phoneTitle: "Phone",
    phoneValue: "07504477409",

    // Map section
    mapHeading: "Find Us",
    mapSubheading: "Visit our office in Erbil, Kurdistan Region",
  },

  ku: {
    sectionLabel: "پەیوەندیمان پێوە بکە",
    heading: "پەیوەندی بە",
    headingAccent: "ئەکادیمیاوە بکە",
    subheading: "بەخێرهاتنی زانایان و توێژەران و فێرخوازان دەکەین بۆ پەیوەندیکردنیان سەبارەت بە بەرنامەکانمان و سەرچاوە ئەکادیمییەکان.",

    formTitle: "نامەیەکی ئەکادیمی",
    formSubtitle: "لە ماوەی ٤٨ کاتژمێردا وەڵامت دەدەینەوە",

    name: "ناوی تەواو",
    email: "ناونیشانی ئیمەیڵ",
    phone: "ژمارەی مۆبایل",
    subject: "بابەتی پەیوەندی",
    message: "پەیام یان پرسیارەکەت...",
    send: "ناردنی داواکاری",

    successTitle: "داواکارییەکە گەیشت",
    successDesc: "تیمی ئەکادیمی ئێمە بەزوویی وەڵامت دەداتەوە.",

    addressTitle: "ناونیشان",
    addressValue: "شەقامی ٤٠م، هەولێر، هەرێمی کوردستان، عێراق",
    emailTitle: "ئیمەیڵ",
    emailValue: "info@judyacademy.org",
    phoneTitle: "مۆبایل",
    phoneValue: "٠٧٥٠٤٤٧٧٤٠٩",

    mapHeading: "بماندۆزەوە",
    mapSubheading: "سەردانی مەڵبەندەکەمان بکە لە هەولێر، هەرێمی کوردستان",
  },

  ar: {
    sectionLabel: "تواصل معنا",
    heading: "اتصل بـ",
    headingAccent: "الأكاديمية",
    subheading: "نرحب بالعلماء والباحثين والمتعلمين للتواصل معنا بخصوص برامجنا ومواردنا الأكاديمية.",

    formTitle: "استفسار أكاديمي",
    formSubtitle: "سنرد خلال ٤٨ ساعة",

    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    subject: "موضوع الاستفسار",
    message: "رسالتك أو استفسارك...",
    send: "إرسال الاستفسار",

    successTitle: "تم استلام الطلب",
    successDesc: "سيتواصل معك فريقنا الأكاديمي قريباً.",

    addressTitle: "الموقع",
    addressValue: "شارع 40م، أربيل، إقليم كوردستان، العراق",
    emailTitle: "البريد الإلكتروني",
    emailValue: "info@judyacademy.org",
    phoneTitle: "الهاتف",
    phoneValue: "٠٧٥٠٤٤٧٧٤٠٩",

    mapHeading: "موقعنا",
    mapSubheading: "قم بزيارة مكتبنا في أربيل، إقليم كوردستان",
  },
};

export default contactTranslations;

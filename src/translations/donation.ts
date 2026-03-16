import { Lang } from "@/context/LanguageContext";

const donationTranslations: Record<Lang, Record<string, string>> = {
  en: {
    // Section header
    sectionLabel: "Donation Methods",
    headingPrefix: "How to",
    headingAccent: "Donate",
    description: "Choose the method that works best for you. Every dirham reaches those who need it most.",

    // Card 1 — FIB
    title1: "Send your donations",
    subtitle1: "Through FIB",
    desc1: "First Islamic Bank of Iraq (FIB) is one of the ways that Judy Academy uses to receive and process contributions immediately for our academic programs.",
    tag1: "Bank Transfer",
    cta1: "Donate via FIB",

    // Card 2 — FastPay
    title2: "Send your donations",
    subtitle2: "Through FastPay",
    desc2: "FastPay is one of the methods used by Judy Academy to receive contributions that are processed immediately to support our scholars and programs.",
    tag2: "Mobile Wallet",
    cta2: "Donate via FastPay",

    // Shared
    contactNumber: "Contact Number",
  },

  ku: {
    sectionLabel: "ڕێگاکانی بەخشین",
    headingPrefix: "چۆن",
    headingAccent: "پشتگیریمان دەکەیت ؟",
    description: "ئەو ڕێگایەی کە باشترە بۆ تۆ هەڵبژێرە. هەموو دینارێک دەگاتە ئەوانەی پێویستییان پێیەتی.",

    title1: "بەخشینەکانت بنێرە",
    subtitle1: "لە ڕێگەی FIB",
    desc1: "بانکی ئیسلامی یەکەمی عێراق (FIB) یەکێکە لەو ڕێگایانەی ئەکادیمیای جودی بەکاری دەهێنێت بۆ وەرگرتنی بەخشینەکانتان کە دوای ناردن دەستبەجێ بەکاردەهێنرێن بۆ بەرنامە ئەکادیمییەکانمان.",
    tag1: "گواستنەوەی بانکی",
    cta1: "بەخشین لە ڕێگای FIB",

    title2: "بەخشینەکانت بنێرە",
    subtitle2: "لە ڕێگەی FastPay",
    desc2: "فاستپەی یەکێکە لەو ڕێگایانەی ئەکادیمیای جودی بەکاری دەهێنێت بۆ وەرگرتنی بەخشینەکانتان کە دوای ناردن دەستبەجێ بەکاردەهێنرێن بۆ پاڵپشتی توێژەران و بەرنامەکانمان.",
    tag2: "جزدانی مۆبایل",
    cta2: "بەخشین لە ڕێگای FastPay",

    contactNumber: "ژمارەی پەیوەندی",
  },

  ar: {
    sectionLabel: "طرق التبرع",
    headingPrefix: "كيف",
    headingAccent: "تتبرع",
    description: "اختر الطريقة الأنسب لك. كل دينار يصل إلى من هم في أمس الحاجة إليه.",

    title1: "أرسل تبرعاتك",
    subtitle1: "عبر FIB",
    desc1: "المصرف الإسلامي العراقي الأول (FIB) هو إحدى الطرق التي تستخدمها أكاديمية جودي لاستلام مساهماتكم التي يتم معالجتها فوراً لدعم برامجنا الأكاديمية.",
    tag1: "تحويل بنكي",
    cta1: "تبرع عبر FIB",

    title2: "أرسل تبرعاتك",
    subtitle2: "عبر FastPay",
    desc2: "فاست باي هي إحدى الطرق التي تستخدمها أكاديمية جودي لاستلام مساهماتكم التي يتم معالجتها فوراً لدعم الباحثين وبرامجنا.",
    tag2: "محفظة إلكترونية",
    cta2: "تبرع عبر FastPay",

    contactNumber: "رقم التواصل",
  },
};

export default donationTranslations;

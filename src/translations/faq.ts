import { Lang } from "@/context/LanguageContext";

const faqTranslations: Record<Lang, Record<string, string>> = {
  en: {
    // Section header
    sectionLabel: "Common Questions",
    headingLine1: "Questions people",
    headingAccent: "ask us most",
    headerNote: "Can't find your answer here? Reach out directly — we reply to every message with care.",

    // FAQ 1
    q1: "Does Judy Academy belong to any political party?",
    a1: "No. Judy Academy is fully independent — not affiliated with any political party. We are a dedicated academic institution carrying out research projects without discrimination.",
    tag1: "Independence",

    // FAQ 2
    q2: "How can I send donations from outside Kurdistan or Iraq?",
    a2: "International donors can transfer via the organization's bank account. Within the Kurdistan Region and Iraq, you can send through FastPay, FIB, or visit us in person. We'll walk you through every step.",
    tag2: "Donations",

    // FAQ 3
    q3: "Does the Academy support individual researchers?",
    a3: "Our primary focus is advancing Qur'anic research and Islamic sciences. We provide research fellowships, host academic events, and support scholars across the Kurdistan Region.",
    tag3: "Programs",

    // FAQ 4
    q4: "How can I sponsor an orphan?",
    a4: "Simply call our listed phone numbers or send an email through the website. Our team will respond promptly and guide you through the full sponsorship process with clarity and care.",
    tag4: "Sponsorship",

    // Right panel
    stillHaveQuestions: "Still have questions?",
    panelDescription: "Our team is ready to answer anything about sponsorships, donations, or our ongoing programs. No question is too small.",
    askQuestion: "ASK A QUESTION",

    // Quick stats
    statVal1: "4",
    statLabel1: "Governorates served",
    statVal2: "20+",
    statLabel2: "Years of service",
    statVal3: "100%",
    statLabel3: "Non-political",
    statVal4: "∞",
    statLabel4: "Lives touched",
  },

  ku: {
    sectionLabel: "پرسیارە باوەکان",
    headingLine1: "ئەو پسیارانەی",
    headingAccent: "زۆر لێمان دەکرێت",
    headerNote: "وەڵامەکەت لێرە نەدۆزیەوە؟ ڕاستەوخۆ پەیوەندیمان پێوە بکە",
    q1: "ئایا ئەکادیمیای جودی سەر بە پارتێکی سیاسییەوەیە؟",
    a1: "نەخێر. ئەکادیمیای جودی بەتەواوی سەربەخۆیە — سەر بە هیچ پارتێکی سیاسییەوە نییە. ئێمە دامەزراوەیەکی ئەکادیمیین و پڕۆژەکانمان بەبێ جیاوازی جێبەجێ دەکەین.",
    tag1: "سەربەخۆیی",

    q2: "چۆن بەخشینەکانم لە دەرەوەی کوردستان یان عێراقەوە بنێرم؟",
    a2: "بەخشەرانی نێودەوڵەتی دەتوانن لە ڕێگەی حسابی بانکی ڕێکخراوەکەوە ناردنی پارە بکەن. لەناو هەرێمی کوردستان و عێراقدا، لە ڕێگەی فاستپەی، FIB یان سەردانمان بکەن. ئێمە ڕێنماییتان دەکەین لە هەموو هەنگاوێکدا.",
    tag2: "بەخشین",

    q3: "ئایا یارمەتی نەخۆشانیش دەدەن، یان تەنها پڕۆژەی تایبەت؟",
    a3: "سەرنجی سەرەکیمان لە ئێستادا کەفاڵەت و پشتیوانیکردنی هەتیوانە لە ٤ پارێزگادا. بەشێک لە یارمەتییەکانمان بۆ نەخۆشانیشە. لە ماوەی ساڵانی ڕابردوودا بەرنامەی جۆراوجۆرمان جێبەجێکردووە.",
    tag3: "بەرنامەکان",

    q4: "چۆن دەتوانم کەفیلی هەتیوێک ببم؟",
    a4: "تەنها پەیوەندی بکە بە ژمارە تەلەفۆنەکانمانەوە یان ئیمەیڵ بنێرە لە ڕێگەی ماڵپەڕەکەوە. تیممان بەزوویی وەڵامتان دەداتەوە و ڕێنماییتان دەکات لە هەموو پرۆسەی کەفاڵەتدا.",
    tag4: "کەفاڵەت",

    stillHaveQuestions: "هێشتا پرسیارت هەیە؟",
    panelDescription: "تیممان ئامادەیە وەڵامی هەموو پرسیارێک بداتەوە سەبارەت بە کەفاڵەت، بەخشین، یان بەرنامە بەردەوامەکانمان. هیچ پرسیارێک بچووک نییە.",
    askQuestion: "پرسیارێک بکە",

    statVal1: "٤",
    statLabel1: "پارێزگای خزمەتکراو",
    statVal2: "+٢٠",
    statLabel2: "ساڵی خزمەت",
    statVal3: "١٠٠%",
    statLabel3: "ناسیاسی",
    statVal4: "∞",
    statLabel4: "ژیانی کاریگەرکراو",
  },

  ar: {
    sectionLabel: "الأسئلة الشائعة",
    headingLine1: "الأسئلة التي",
    headingAccent: "تُطرح أكثر",
    headerNote: "لم تجد إجابتك هنا؟ تواصل معنا مباشرة — نرد على كل رسالة باهتمام.",

    q1: "هل تنتمي أكاديمية جودي لأي حزب سياسي؟",
    a1: "لا. أكاديمية جودي مستقلة تماماً — غير مرتبطة بأي حزب سياسي. نحن مؤسسة أكاديمية ننفذ مشاريع بحثية دون أي تمييز.",
    tag1: "الاستقلالية",

    q2: "كيف يمكنني إرسال التبرعات من خارج كوردستان أو العراق؟",
    a2: "يمكن للمتبرعين الدوليين التحويل عبر الحساب البنكي للمنظمة. داخل إقليم كوردستان والعراق، يمكنكم الإرسال عبر FastPay أو FIB أو زيارتنا شخصياً. سنرشدكم في كل خطوة.",
    tag2: "التبرعات",

    q3: "هل تساعدون المرضى أم فقط مشاريع محددة؟",
    a3: "تركيزنا الأساسي اليوم هو كفالة ودعم الأيتام عبر 4 محافظات. جزء من مساعداتنا يدعم المرضى أيضاً. أدرنا برامج متعددة على مر السنين ونستمر في التطوير.",
    tag3: "البرامج",

    q4: "كيف يمكنني كفالة يتيم؟",
    a4: "ببساطة اتصل بأرقام هواتفنا المدرجة أو أرسل بريداً إلكترونياً عبر الموقع. سيرد فريقنا فوراً ويرشدك خلال عملية الكفالة بوضوح واهتمام.",
    tag4: "الكفالة",

    stillHaveQuestions: "لا تزال لديك أسئلة؟",
    panelDescription: "فريقنا مستعد للإجابة عن أي شيء يتعلق بالكفالات أو التبرعات أو برامجنا المستمرة. لا يوجد سؤال صغير.",
    askQuestion: "اطرح سؤالاً",

    statVal1: "٤",
    statLabel1: "محافظات مخدومة",
    statVal2: "+٢٠",
    statLabel2: "سنة خدمة",
    statVal3: "١٠٠%",
    statLabel3: "غير سياسية",
    statVal4: "∞",
    statLabel4: "حياة تأثّرت",
  },
};

export default faqTranslations;

import { Lang } from "@/context/LanguageContext";

const galleryTranslations: Record<Lang, Record<string, string>> = {
  en: {
    title: "Gallery of Excellence",
    sectionLabel: "Academy Archive",
    description: "Visual highlights from our academic sessions, research programs, and scholarly events in Kurdistan.",

    // Stats
    stat1Value: "205+",
    stat1Label: "Research Papers",
    stat2Value: "20+",
    stat2Label: "Academic Programs",
    stat3Value: "122+",
    stat3Label: "Scholarly Monographs",
    stat4Value: "536+",
    stat5Value: "13",
    stat5Label: "Global Partnerships",
    photosLabel: "Photographs",
  },

  ku: {
    title: "پێشانگای نایابی",
    sectionLabel: "ئەرشیفی ئەکادیمیا",
    description: "گرینگترین دیمەنەکانی دانیشتنە ئەکادیمییەکان و بەرنامە توێژینەوەییەکانمان لە کوردستان.",

    stat1Value: "٢٠٥+",
    stat1Label: "توێژینەوەی زانستی",
    stat2Value: "٢٠+",
    stat2Label: "بەرنامەی ئەکادیمی",
    stat3Value: "١٢٢+",
    stat3Label: "پەرتووکی زانستی",
    stat4Value: "٥٣٦+",
    stat4Label: "زانایانی تۆمارکراو",
    stat5Value: "١٣",
    stat5Label: "هاوبەشی جیهانی",
    photosLabel: "وێنە",
  },

  ar: {
    title: "معرض التميز",
    sectionLabel: "أرشيف الأكاديمية",
    description: "أبرز اللقطات من جلساتنا الأكاديمية وبرامجنا البحثية وفعالياتنا العلمية في كوردستان.",

    stat1Value: "٢٠٥+",
    stat1Label: "أبحاث علمية",
    stat2Value: "٢٠+",
    stat2Label: "برامج أكاديمية",
    stat3Value: "١٢٢+",
    stat3Label: "مؤلفات علمية",
    stat4Value: "٥٣٦+",
    stat4Label: "باحثون مسجلون",
    stat5Value: "١٣",
    stat5Label: "شراكات عالمية",
    photosLabel: "صورة",
  },
};

export default galleryTranslations;

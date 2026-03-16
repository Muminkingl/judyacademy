import { Lang } from "@/context/LanguageContext";

const newsTranslations: Record<Lang, Record<string, string>> = {
  en: {
    badge: "Academic Publications",
    title: "News &",
    titleAccent: "Insights",
    subtitle: "Research updates, academic events, and scholarly insights from Judy Academy and the wider field of Qur'anic studies.",
    noPostsTitle: "No Publications Yet",
    noPostsSubtitle: "Check back soon for academic updates.",
    latest: "Latest",
    minRead: "min read",
    min: "min",
    readFullStory: "Read Full Article",
    readPost: "Read Article",
    moreArticles: "More Publications",
  },
  ku: {
    badge: "بڵاوکراوە ئەکادیمییەکان",
    title: "هەواڵ و",
    titleAccent: "تێڕوانینەکان",
    subtitle: "نوێکارییەکانی توێژینەوە، چالاکییە ئەکادیمییەکان، و تێڕوانینە زانستییەکان لە ئەکادیمیای جودی و کایەی لێکۆڵینەوە قورئانییەکان.",
    noPostsTitle: "هێشتا هیچ بڵاوکراوەیەک نییە",
    noPostsSubtitle: "بەم زوانە بۆ نوێکارییە ئەکادیمییەکان سەردان بکەنەوە.",
    latest: "نوێترین",
    minRead: "خولەک خوێندنەوە",
    min: "خولەک",
    readFullStory: "تەواوی بابەتەکە بخوێنەوە",
    readPost: "بابەتەکە بخوێنەوە",
    moreArticles: "بڵاوکراوەی زیاتر",
  },
  ar: {
    badge: "منشورات أكاديمية",
    title: "الأخبار و",
    titleAccent: "الآفاق",
    subtitle: "تحديثات الأبحاث، والفعاليات الأكاديمية، والرؤى العلمية من أكاديمية جودي ومجال الدراسات القرآنية الأوسع.",
    noPostsTitle: "لا توجد منشورات بعد",
    noPostsSubtitle: "تحقق مرة أخرى قريباً للحصول على التحديثات الأكاديمية.",
    latest: "الأحدث",
    minRead: "دقيقة للقراءة",
    min: "دقيقة",
    readFullStory: "اقرأ المقال كاملاً",
    readPost: "اقرأ المقال",
    moreArticles: "المزيد من المنشورات",
  },
};

export default newsTranslations;

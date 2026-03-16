"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HandHeart, Users, BookOpen, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";


export default function About() {
  const { dir, t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: BookOpen,
      title: t("about", "feature1Title"),
      description: t("about", "feature1Desc"),
    },
    {
      icon: Users,
      title: t("about", "feature2Title"),
      description: t("about", "feature2Desc"),
    },
    {
      icon: ShieldCheck,
      title: t("about", "feature3Title"),
      description: t("about", "feature3Desc"),
    },
    {
      icon: HandHeart,
      title: t("about", "feature4Title"),
      description: t("about", "feature4Desc"),
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-background" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
            {t("about", "sectionLabel")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-5">
            {t("about", "heading")}{" "}
            <span className="text-primary">{t("about", "headingAccent")}</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("about", "description")}
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

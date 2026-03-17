"use client";

import { motion } from "framer-motion";
import { ShieldX, ArrowLeft, LogOut } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function ForbiddenPage() {
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.replace("/login");
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center px-4"
      style={{
        background: "linear-gradient(160deg, #1a0f0a 0%, #2a1810 40%, #1c120d 100%)",
      }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative text-center max-w-md"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
          className="mx-auto mb-8 w-24 h-24 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, rgba(220,60,60,0.15) 0%, rgba(180,40,40,0.1) 100%)",
            border: "2px solid rgba(220,60,60,0.25)",
          }}
        >
          <ShieldX className="w-12 h-12 text-red-400/80" strokeWidth={1.5} />
        </motion.div>

        {/* Error code */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-8xl font-black mb-2 tracking-tight"
          style={{
            background: "linear-gradient(135deg, #dc3c3c 0%, #8b2020 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          403
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-bold mb-3"
          style={{ color: "#f5edd8" }}
        >
          Access Denied
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm leading-relaxed mb-8"
          style={{ color: "rgba(245,237,216,0.5)" }}
        >
          You don&apos;t have permission to access the admin panel.
          <br />
          Only authorized administrators can view this page.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="h-px w-48 mx-auto mb-8"
          style={{ background: "linear-gradient(90deg, transparent, rgba(200,153,42,0.3), transparent)" }}
        />

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, #c8992a 0%, #a67b1e 100%)",
              color: "#1a0f0a",
              boxShadow: "0 4px 20px -4px rgba(200,153,42,0.4)",
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <button
            onClick={handleSignOut}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.05)",
              color: "rgba(245,237,216,0.7)",
              border: "1px solid rgba(245,237,216,0.1)",
            }}
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

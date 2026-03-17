"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { isAdminAllowed } from "@/lib/admin-whitelist";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        // Check whitelist before redirecting to admin
        if (isAdminAllowed(session.user.email)) {
          router.replace("/admin");
        } else {
          router.replace("/forbidden");
        }
      } else {
        router.replace("/login");
      }
    });
  }, [router]);

  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ background: "linear-gradient(160deg, #1a0f0a 0%, #2a1810 55%, #1c120d 100%)" }}
    >
      <div className="text-center">
        <div className="w-10 h-10 border-3 border-[#c8992a] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm font-medium" style={{ color: "rgba(245,237,216,0.5)" }}>
          Authenticating...
        </p>
      </div>
    </div>
  );
}

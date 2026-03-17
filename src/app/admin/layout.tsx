"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { isAdminAllowed } from "@/lib/admin-whitelist";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) {
        router.replace("/login");
      } else if (!isAdminAllowed(session.user.email)) {
        router.replace("/forbidden");
      } else {
        setAuthorized(true);
      }
      setChecking(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!session) {
          router.replace("/login");
        } else if (!isAdminAllowed(session.user.email)) {
          router.replace("/forbidden");
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [router]);

  if (checking) {
    return (
      <div
        className="flex min-h-screen items-center justify-center"
        style={{ background: "linear-gradient(160deg, #1a0f0a 0%, #2a1810 55%, #1c120d 100%)" }}
      >
        <div className="text-center">
          <div
            className="w-10 h-10 rounded-full animate-spin mx-auto mb-4"
            style={{ border: "3px solid rgba(200,153,42,0.2)", borderTopColor: "#c8992a" }}
          />
          <p className="text-sm font-medium" style={{ color: "rgba(245,237,216,0.5)" }}>
            Verifying access...
          </p>
        </div>
      </div>
    );
  }

  if (!authorized) return null;

  return <>{children}</>;
}

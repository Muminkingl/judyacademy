"use client";

import AdminDashboard from "@/components/mvpblocks/index";
import { ThemeProvider } from "next-themes";

export default function AdminPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <AdminDashboard />
    </ThemeProvider>
  );
}

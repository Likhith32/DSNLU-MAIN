import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AccessibilityToolbar } from "@/components/AccessibilityToolbar";

// 🔥 NEW
import { AdminProvider } from "@/contexts/AdminContext";
import { AdminBar } from "@/components/AdminBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DSNLU - Damodaram Sanjivayya National Law University",
  description:
    "Premier National Law University in Visakhapatnam, India. Yato Dharmastato Jayah.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* 🔥 ADMIN CONTEXT START */}
        <AdminProvider>

          <Navbar />
          <AccessibilityToolbar />

          {/* 🔥 ADMIN MODE BAR (shows only if admin logged in) */}
          <AdminBar />

          <main className="flex-grow pt-20">
            {children}
          </main>

          <Footer />

        </AdminProvider>
        {/* 🔥 ADMIN CONTEXT END */}
      </body>
    </html>
  );
}

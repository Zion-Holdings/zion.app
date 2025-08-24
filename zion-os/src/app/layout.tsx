import "./globals.css";
import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "@/contexts/AuthContext";
import { OnboardingWalkthrough } from "@/components/OnboardingWalkthrough";
import { LayoutWrapper } from "@/components/LayoutWrapper";

export const metadata = {
  title: "Zion Tech Group - AI-Powered Enterprise Solutions & Autonomous Systems",
  description: "Leading provider of AI-powered enterprise solutions, autonomous business systems, quantum computing, and next-generation technology services. Transform your business with cutting-edge AI technology.",
  keywords: "AI, artificial intelligence, autonomous systems, quantum computing, enterprise solutions, business automation, AI consulting, technology services",
  authors: [{ name: "Zion Tech Group" }],
  openGraph: {
    title: "Zion Tech Group - AI-Powered Enterprise Solutions",
    description: "Leading provider of AI-powered enterprise solutions and autonomous systems",
    url: "https://ziontechgroup.com",
    siteName: "Zion Tech Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion Tech Group - AI-Powered Enterprise Solutions",
    description: "Leading provider of AI-powered enterprise solutions and autonomous systems",
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
        <SessionProvider>
          <AuthProvider>
            <LayoutWrapper>
              <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
            </LayoutWrapper>
            <OnboardingWalkthrough />
          </AuthProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
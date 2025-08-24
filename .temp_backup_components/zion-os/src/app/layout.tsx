import "./globals.css";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Zion Tech Group - AI-Powered Technology Solutions",
  description: "Leading provider of AI-powered technology solutions, autonomous systems, quantum computing, and enterprise innovation. Transform your business with cutting-edge AI technology.",
  keywords: "AI, artificial intelligence, autonomous systems, quantum computing, enterprise technology, Zion Tech Group",
  authors: [{ name: "Zion Tech Group" }],
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
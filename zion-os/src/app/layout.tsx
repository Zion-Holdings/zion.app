import "./globals.css";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Zion Tech Group - AI-Powered Technology Solutions",
  description: "Leading provider of AI-powered technology solutions, autonomous systems, quantum computing, and innovative business platforms. Transform your business with cutting-edge AI technology.",
  keywords: "AI, artificial intelligence, autonomous systems, quantum computing, technology solutions, business automation",
  authors: [{ name: "Zion Tech Group" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Zion Tech Group - AI-Powered Technology Solutions",
    description: "Leading provider of AI-powered technology solutions, autonomous systems, quantum computing, and innovative business platforms.",
    type: "website",
    url: "https://ziontechgroup.com",
    siteName: "Zion Tech Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion Tech Group - AI-Powered Technology Solutions",
    description: "Leading provider of AI-powered technology solutions, autonomous systems, quantum computing, and innovative business platforms.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Sidebar />
        <Header />
        <main className="min-h-screen lg:ml-64">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
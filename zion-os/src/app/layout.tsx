import "./globals.css";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Zion Tech Group - AI-Powered Technology Solutions",
  description: "Leading provider of AI-powered technology solutions, autonomous business platforms, and cutting-edge innovation services. Transform your business with Zion Tech Group.",
  keywords: "AI, artificial intelligence, autonomous business, technology solutions, Zion Tech Group",
  authors: [{ name: "Zion Tech Group" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
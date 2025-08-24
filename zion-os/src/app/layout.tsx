import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Zion Tech Group - AI-Powered Digital Economy Solutions",
  description: "Launch sovereign AI-powered digital economies with one click. Advanced AI automation, quantum computing, and autonomous business solutions for the future.",
  keywords: "AI automation, quantum computing, digital economy, autonomous business, Zion Tech Group, AI consciousness, blockchain, cybersecurity",
  authors: [{ name: "Zion Tech Group" }],
  creator: "Zion Tech Group",
  publisher: "Zion Tech Group",
  robots: "index, follow",
  metadataBase: new URL('https://ziontechgroup.com'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ziontechgroup.com",
    siteName: "Zion Tech Group",
    title: "Zion Tech Group - AI-Powered Digital Economy Solutions",
    description: "Launch sovereign AI-powered digital economies with one click. Advanced AI automation, quantum computing, and autonomous business solutions for the future.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zion Tech Group - AI-Powered Digital Economy Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion Tech Group - AI-Powered Digital Economy Solutions",
    description: "Launch sovereign AI-powered digital economies with one click. Advanced AI automation, quantum computing, and autonomous business solutions for the future.",
    images: ["/og-image.jpg"],
    creator: "@ziontechgroup",
    site: "@ziontechgroup",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ziontechgroup.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="google-site-verification" content="your-verification-code" />
        <meta name="msvalidate.01" content="your-verification-code" />
      </head>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
        <nav className="border-b border-white/10 sticky top-0 z-50 bg-zinc-900/50 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
            <a href="/" className="font-semibold">Zion Tech Group</a>
            <a href="/services" className="text-sm opacity-80 hover:opacity-100">Services</a>
            <a href="/about" className="text-sm opacity-80 hover:opacity-100">About</a>
            <a href="/careers" className="text-sm opacity-80 hover:opacity-100">Careers</a>
            <a href="/contact" className="text-sm opacity-80 hover:opacity-100">Contact</a>
            <a href="/multiverse/launch" className="text-sm opacity-80 hover:opacity-100">Launch</a>
            <a href="/admin/os-deploy" className="text-sm opacity-80 hover:opacity-100">Admin Deploy</a>
            <a href="/admin/instances" className="text-sm opacity-80 hover:opacity-100">Instances</a>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
        <footer className="border-t border-white/10 bg-zinc-900/50 mt-16">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Zion Tech Group</h3>
                <p className="text-sm opacity-80">Pioneering the future of AI-powered digital economies.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="text-sm space-y-2 opacity-80">
                  <li><a href="/services" className="hover:opacity-100">AI Automation</a></li>
                  <li><a href="/services" className="hover:opacity-100">Quantum Computing</a></li>
                  <li><a href="/services" className="hover:opacity-100">Blockchain Solutions</a></li>
                  <li><a href="/services" className="hover:opacity-100">Cybersecurity</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="text-sm space-y-2 opacity-80">
                  <li><a href="/about" className="hover:opacity-100">About Us</a></li>
                  <li><a href="/careers" className="hover:opacity-100">Careers</a></li>
                  <li><a href="/contact" className="hover:opacity-100">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <ul className="text-sm space-y-2 opacity-80">
                  <li><a href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">LinkedIn</a></li>
                  <li><a href="https://twitter.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">Twitter</a></li>
                  <li><a href="https://github.com/Zion-Holdings" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">GitHub</a></li>
                  <li><a href="mailto:info@ziontechgroup.com" className="hover:opacity-100">Email</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm opacity-80">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
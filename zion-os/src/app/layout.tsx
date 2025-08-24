import "./globals.css";
import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "@/contexts/AuthContext";
import { OnboardingWalkthrough } from "@/components/OnboardingWalkthrough";
import { LayoutWrapper } from "@/components/LayoutWrapper";

export const metadata = {
  title: "Zion OS",
  description: "Unified deployment protocol for Zion ecosystems",
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
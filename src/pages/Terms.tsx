import { SEO } from "@/components/SEO";
import TermsOfService from "@/legal/TermsOfService";
import { AppLayout } from "@/layout";

export default function Terms() {
  return (
    <AppLayout>
      <SEO
        title="Terms of Service | Zion Tech Group"
        description="The terms and conditions for using the Zion Tech Group platform."
        canonical="https://ziontechgroup.com/terms"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <TermsOfService />
        </div>
      </main>
    </AppLayout>
  );
}

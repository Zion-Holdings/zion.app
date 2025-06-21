import { SEO } from "@/components/SEO";
import TermsOfService from "@/legal/TermsOfService";

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="The terms and conditions for using the Zion platform."
        canonical="https://app.ziontechgroup.com/terms"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <TermsOfService />
        </div>
      </main>
    </>
  );
}

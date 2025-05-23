import { AppLayout } from "@/layout/AppLayout";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Terms() {
  return (
    <AppLayout>
      <SEO
        title="Terms of Service"
        description="The terms and conditions for using the Zion platform."
        canonical="https://app.ziontechgroup.com/terms"
      />
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <GradientHeading>Terms of Service</GradientHeading>
        <div className="mt-6 space-y-4 text-zion-slate-light">
          <p>
            Welcome to Zion. These Terms of Service outline the rules and
            regulations for the use of our platform. By accessing Zion, you
            agree to comply with these terms. If you disagree with any part,
            you may not use our services.
          </p>
          <p>
            This page is a simplified placeholder. The full legal text will be
            provided in a future update. For now, please use common sense and
            respect others while using the platform.
          </p>
        </div>
      </div>
    </AppLayout>
  );
}

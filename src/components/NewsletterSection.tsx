
import { GradientHeading } from "@/components/GradientHeading";
import { EnhancedNewsletterForm } from "@/components/EnhancedNewsletterForm";
import { cn } from "@/lib/utils";

interface NewsletterSectionProps {
  className?: string;
  style?: React.CSSProperties;
}

export function NewsletterSection({ className, style }: NewsletterSectionProps) {
  return (
    <section
      className={cn("py-20 bg-zion-blue-dark", className)}
      style={style}
      id="newsletter"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <GradientHeading>Stay Informed</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl mb-8">
            Subscribe to our newsletter for the latest updates on Zion's services, Google trending tech news, and marketplace opportunities.
          </p>
          <div className="max-w-md mx-auto">
            <EnhancedNewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
}

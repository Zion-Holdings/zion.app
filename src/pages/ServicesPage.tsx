import { TrustedBySection } from "@/components/TrustedBySection";
import ErrorBoundary from "@/components/GlobalErrorBoundary";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import ServicesList from '@/components/ServicesList';


export default function ServicesPage() {
  return (
    <ErrorBoundary>
      <>
      <div className="bg-zion-blue-dark py-4 px-4 md:px-8 mb-6 border-b border-zion-blue-light">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-white text-lg font-medium">Featured Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link to="/it-onsite-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                Global IT Onsite Services
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <ServicesList />
      <div className="bg-zion-blue-dark py-8 text-center">
        <p className="text-white">
          New to Zion? Learn more{' '}
          <Link to="/about" className="text-zion-cyan underline">about our mission</Link>{' '}
          or <Link to="/contact" className="text-zion-cyan underline">contact our team</Link> for custom solutions.
        </p>
      </div>
      <TrustedBySection />
    </>
    </ErrorBoundary>
  );
}

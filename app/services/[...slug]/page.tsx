import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Service Details | Zion Tech Group",
  description: "AI-powered service details and consultation booking",
};

// Generate static params for top services
export async function generateStaticParams() {
  const services = [
    { slug: "ai-analytics-healthcare" },
    { slug: "autonomous-cloud-platform" },
    { slug: "smart-automation-suite" },
    { slug: "predictive-data-analytics" },
    { slug: "intelligent-security-suite" },
  ];
  return services;
}

interface ServicePageProps {
  params: {
    slug: string[];
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const { slug } = params;
  const serviceSlug = slug.join("/");
  
  // Service title mapping
  const serviceMap: Record<string, { title: string; description: string }> = {
    "ai-analytics-healthcare": {
      title: "AI Analytics for Healthcare",
      description: "Predictive analytics, patient outcome prediction, and clinical decision support."
    },
    "autonomous-cloud-platform": {
      title: "Autonomous Cloud Platform",
      description: "Serverless infrastructure, auto-scaling, and intelligent resource management."
    },
    "smart-automation-suite": {
      title: "Smart Automation Suite",
      description: "Workflow automation, process optimization, and AI-driven operations."
    },
    "predictive-data-analytics": {
      title: "Predictive Data Analytics",
      description: "Machine learning models, forecasting, and data-driven insights."
    },
    "intelligent-security-suite": {
      title: "Intelligent Security Suite",
      description: "Threat detection, compliance monitoring, and automated incident response."
    }
  };

  const service = serviceMap[serviceSlug];

  if (!service) {
    // Fallback: render service not found with Calendly booking
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center">
        <div className="text-center p-8 max-w-2xl">
          <h1 className="text-3xl font-bold text-white mb-4">
            Service Not Found
          </h1>
          <p className="text-slate-300 mb-6">
            The requested service is being processed. Let us help you with a custom solution.
          </p>
          <a
            href="https://calendly.com/kleber-ziontechgroup/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Schedule a Consultation
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-6">{service.title}</h1>
        <p className="text-slate-300 text-lg mb-8">{service.description}</p>
        
        <div className="bg-slate-900/50 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Get Started</h2>
          <p className="text-slate-400 mb-6">
            Our team will contact you within 24 hours to discuss your requirements.
          </p>
          <a
            href="https://calendly.com/kleber-ziontechgroup/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </main>
  );
}
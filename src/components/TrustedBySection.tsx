import { GradientHeading } from "./GradientHeading";
import React, { useState } from 'react'; // Ensure React and useState are imported
import Image from 'next/image'; // Import next/image

// Real company logos for trusted partners - with more reliable image URLs
const trustedCompanies = [
  {
    name: "NVIDIA",
    logo: "/logos/nvidia-logo.svg",
    alt: "NVIDIA logo"
  },
  {
    name: "American Express",
    logo: "/logos/amex-logo.svg",
    alt: "American Express logo"
  },
  {
    name: "Walt Disney",
    logo: "/logos/disney-logo.svg",
    alt: "Walt Disney logo"
  },
  {
    name: "AMD",
    logo: "/logos/amd-logo.svg",
    alt: "AMD logo"
  },
  {
    name: "Apple",
    logo: "/logos/apple-logo.svg",
    alt: "Apple logo"
  },
  {
    name: "EA Games",
    logo: "/logos/ea-logo.svg",
    alt: "EA Games logo"
  },
  {
    name: "Louis Vuitton",
    logo: "/logos/lv-logo.svg",
    alt: "Louis Vuitton logo"
  },
  {
    name: "Nike",
    logo: "/logos/nike-logo.svg",
    alt: "Nike logo"
  },
  {
    name: "Pandora",
    logo: "/logos/pandora-logo.svg",
    alt: "Pandora logo"
  },
  {
    name: "Huawei",
    logo: "/logos/huawei-logo.svg",
    alt: "Huawei logo"
  },
  {
    name: "Johnson & Johnson",
    logo: "/logos/jnj-logo.svg",
    alt: "Johnson & Johnson logo"
  },
  {
    name: "Universal",
    logo: "/logos/universal-logo.svg",
    alt: "Universal Studios logo"
  },
  {
    name: "Ubisoft",
    logo: "/logos/ubisoft-logo.svg",
    alt: "Ubisoft logo"
  },
  {
    name: "Bayer",
    logo: "/logos/bayer-logo.svg",
    alt: "Bayer logo"
  },
  {
    name: "Avaya",
    logo: "/logos/avaya-logo.svg",
    alt: "Avaya logo"
  },
  {
    name: "Silicon Valley Bank",
    logo: "/logos/svb-logo.svg",
    alt: "Silicon Valley Bank logo"
  },
  {
    name: "Dell",
    logo: "/logos/dell-logo.svg",
    alt: "Dell logo"
  },
  {
    name: "Lenovo",
    logo: "/logos/lenovo-logo.svg",
    alt: "Lenovo logo"
  },
  {
    name: "Citi Bank",
    logo: "/logos/citi-logo.svg",
    alt: "Citi Bank logo"
  },
  {
    name: "Thomson Reuters",
    logo: "/logos/thomson-reuters-logo.svg",
    alt: "Thomson Reuters logo"
  }
];

// Sub-component for individual company logo
const CompanyLogo = ({ company }: { company: typeof trustedCompanies[0] }) => {
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    if (!hasError) {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className="text-white font-semibold text-center text-xs">
        {company.name}
      </div>
    );
  }

  return (
    <Image
      src={company.logo}
      alt={company.alt}
      width={120} // Approximate width, adjust as needed
      height={40}  // Approximate height for a logo, adjust as needed
      sizes="(max-width: 768px) 30vw, 120px" // Example sizes
      className="max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert"
      onError={handleImageError}
      priority={false} // These are not LCP images
    />
  );
};

export function TrustedBySection() {
  return (
    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <GradientHeading className="mb-2">Trusted By Industry Leaders</GradientHeading>
          <p className="text-zion-slate-light">Join the growing network of companies relying on Zion's marketplace</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center max-w-7xl mx-auto">
          {trustedCompanies.map((company, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center bg-zion-blue-light p-5 rounded-lg border border-zion-purple/10 h-20 transition-all duration-300 hover:border-zion-purple/30 hover:bg-zion-blue group"
            >
              <CompanyLogo company={company} /> {/* Use the sub-component */}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-zion-slate-light text-sm">And many more enterprises worldwide...</p>
        </div>
      </div>
    </section>
  );
}

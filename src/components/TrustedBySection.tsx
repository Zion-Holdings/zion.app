import React from 'react';

const trustedCompanies = [
  { name: 'TechCorp', logo: '🏢' },
  { name: 'InnovateLab', logo: '🔬' },
  { name: 'DigitalFlow', logo: '💻' },
  { name: 'CloudTech', logo: '☁️' },
  { name: 'DataSync', logo: '📊' },
  { name: 'SecureNet', logo: '🔒' },
];

export function TrustedBySection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-muted-foreground mb-2">
            Trusted By Leading Companies
          </h2>
          <p className="text-muted-foreground">
            Join hundreds of businesses that trust Zion Tech Group for their technology needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {trustedCompanies.map((company, index) => (
            <div
              key={company.name}
              className="flex flex-col items-center justify-center p-4 bg-background rounded-lg border border-border hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-2">{company.logo}</div>
              <div className="text-sm font-medium text-center text-muted-foreground">
                {company.name}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            * Company names are representative examples
          </p>
        </div>
      </div>
    </section>
  );
}
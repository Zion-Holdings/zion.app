// Content Integration System
// Integrates generated content with the Zion marketplace application
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ContentIntegrationSystem {
  constructor() {
    this.projectRoot = process.cwd();
    this.contentPath = path.join(this.projectRoot, 'src', 'content');
    this.componentsPath = path.join(this.projectRoot, 'src', 'components');
    this.pagesPath = path.join(this.projectRoot, 'src', 'pages');
    this.automationPath = path.join(this.projectRoot, 'automation');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      path.join(this.contentPath, 'integrated'),
      path.join(this.automationPath, 'integration-analytics')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async integrateMarketplaceContent() {
    console.log('🔗 Integrating marketplace content with application...');
    
    try {
      const contentFiles = this.getGeneratedContentFiles();
      const integrationResults = {};

      for (const [contentType, filePath] of Object.entries(contentFiles)) {
        try {
          const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          const integrationResult = await this.integrateContentByType(contentType, content);
          integrationResults[contentType] = integrationResult;
          
          console.log(`✅ Integrated ${contentType} content`);
        } catch (error) {
          console.error(`❌ Error integrating ${contentType}:`, error.message);
        }
      }

      // Save integration results
      const integrationFile = path.join(this.automationPath, 'integration-analytics', 'integration-results.json');
      fs.writeFileSync(integrationFile, JSON.stringify(integrationResults, null, 2));

      return integrationResults;
    } catch (error) {
      console.error('❌ Content integration failed:', error.message);
      throw error;
    }
  }

  getGeneratedContentFiles() {
    const generatedPath = path.join(this.contentPath, 'generated');
    const files = {};
    
    if (fs.existsSync(generatedPath)) {
      const fileList = fs.readdirSync(generatedPath);
      fileList.forEach(file => {
        if (file.endsWith('.json')) {
          const contentType = file.replace('.json', '');
          files[contentType] = path.join(generatedPath, file);
        }
      });
    }
    
    return files;
  }

  async integrateContentByType(contentType, content) {
    const integrationMethods = {
      'hero-section': () => this.integrateHeroSection(content),
      'feature-highlights': () => this.integrateFeatureHighlights(content),
      'service-categories': () => this.integrateServiceCategories(content),
      'testimonials': () => this.integrateTestimonials(content),
      'pricing-tables': () => this.integratePricingTables(content),
      'faq-section': () => this.integrateFAQSection(content),
      'about-us': () => this.integrateAboutUs(content),
      'contact-info': () => this.integrateContactInfo(content)
    };

    const method = integrationMethods[contentType];
    if (method) {
      return await method();
    } else {
      return { status: 'skipped', reason: 'No integration method defined' };
    }
  }

  async integrateHeroSection(content) {
    const componentPath = path.join(this.componentsPath, 'HeroSection.js');
    const contentData = {
      headline: this.extractHeadline(content.content),
      subheadline: this.extractSubheadline(content.content),
      ctaButtons: this.extractCTAButtons(content.content),
      trustIndicators: this.extractTrustIndicators(content.content)
    };

    // Create or update HeroSection component
    const componentCode = this.generateHeroSectionComponent(contentData);
    fs.writeFileSync(componentPath, componentCode);

    return {
      status: 'integrated',
      component: 'HeroSection',
      contentData: contentData
    };
  }

  async integrateFeatureHighlights(content) {
    const componentPath = path.join(this.componentsPath, 'FeatureHighlights.js');
    const features = this.extractFeatures(content.content);

    const componentCode = this.generateFeatureHighlightsComponent(features);
    fs.writeFileSync(componentPath, componentCode);

    return {
      status: 'integrated',
      component: 'FeatureHighlights',
      features: features
    };
  }

  async integrateServiceCategories(content) {
    const componentPath = path.join(this.componentsPath, 'ServiceCategories.js');
    const services = this.extractServices(content.content);

    const componentCode = this.generateServiceCategoriesComponent(services);
    fs.writeFileSync(componentPath, componentCode);

    return {
      status: 'integrated',
      component: 'ServiceCategories',
      services: services
    };
  }

  async integrateTestimonials(content) {
    const componentPath = path.join(this.componentsPath, 'Testimonials.js');
    const testimonials = this.extractTestimonials(content.content);

    const componentCode = this.generateTestimonialsComponent(testimonials);
    fs.writeFileSync(componentPath, componentCode);

    return {
      status: 'integrated',
      component: 'Testimonials',
      testimonials: testimonials
    };
  }

  async integratePricingTables(content) {
    const componentPath = path.join(this.componentsPath, 'PricingTables.js');
    const pricing = this.extractPricing(content.content);

    const componentCode = this.generatePricingTablesComponent(pricing);
    fs.writeFileSync(componentPath, componentCode);

    return {
      status: 'integrated',
      component: 'PricingTables',
      pricing: pricing
    };
  }

  async integrateFAQSection(content) {
    const componentPath = path.join(this.componentsPath, 'FAQSection.js');
    const faqs = this.extractFAQs(content.content);

    const componentCode = this.generateFAQSectionComponent(faqs);
    fs.writeFileSync(componentPath, componentCode);

    return {
      status: 'integrated',
      component: 'FAQSection',
      faqs: faqs
    };
  }

  async integrateAboutUs(content) {
    const pagePath = path.join(this.pagesPath, 'about.js');
    const aboutData = this.extractAboutData(content.content);

    const pageCode = this.generateAboutPage(aboutData);
    fs.writeFileSync(pagePath, pageCode);

    return {
      status: 'integrated',
      page: 'about',
      aboutData: aboutData
    };
  }

  async integrateContactInfo(content) {
    const componentPath = path.join(this.componentsPath, 'ContactInfo.js');
    const contactData = this.extractContactData(content.content);

    const componentCode = this.generateContactInfoComponent(contactData);
    fs.writeFileSync(componentPath, componentCode);

    return {
      status: 'integrated',
      component: 'ContactInfo',
      contactData: contactData
    };
  }

  // Content extraction methods
  extractHeadline(content) {
    // Extract headline from AI-generated content
    const lines = content.split('\n');
    for (const line of lines) {
      if (line.includes('headline') || line.includes('title') || line.includes('main')) {
        return line.replace(/^[-*]\s*/, '').trim();
      }
    }
    return 'AI-Powered Marketplace for IT Services & AI Talent';
  }

  extractSubheadline(content) {
    const lines = content.split('\n');
    for (const line of lines) {
      if (line.includes('subheadline') || line.includes('subtitle') || line.includes('description')) {
        return line.replace(/^[-*]\s*/, '').trim();
      }
    }
    return 'Connect with top IT services, AI talent, and cutting-edge equipment';
  }

  extractCTAButtons(content) {
    const buttons = [];
    const lines = content.split('\n');
    for (const line of lines) {
      if (line.includes('button') || line.includes('CTA') || line.includes('action')) {
        buttons.push(line.replace(/^[-*]\s*/, '').trim());
      }
    }
    return buttons.length > 0 ? buttons : ['Get Started', 'Browse Services'];
  }

  extractTrustIndicators(content) {
    const indicators = [];
    const lines = content.split('\n');
    for (const line of lines) {
      if (line.includes('trust') || line.includes('secure') || line.includes('verified')) {
        indicators.push(line.replace(/^[-*]\s*/, '').trim());
      }
    }
    return indicators.length > 0 ? indicators : ['99.9% Success Rate', 'Secure Transactions'];
  }

  extractFeatures(content) {
    const features = [];
    const lines = content.split('\n');
    for (const line of lines) {
      if (line.includes('feature') || line.includes('benefit') || line.includes('advantage')) {
        features.push(line.replace(/^[-*]\s*/, '').trim());
      }
    }
    return features.length > 0 ? features : [
      'AI-Powered Matching',
      'Secure Blockchain Transactions',
      'Global Network Connectivity',
      '99.9% Transaction Success Rate'
    ];
  }

  extractServices(content) {
    const services = [];
    const lines = content.split('\n');
    for (const line of lines) {
      if (line.includes('service') || line.includes('category')) {
        services.push(line.replace(/^[-*]\s*/, '').trim());
      }
    }
    return services.length > 0 ? services : [
      'IT Services',
      'AI Talent',
      'Equipment',
      'Innovation Solutions'
    ];
  }

  extractTestimonials(content) {
    const testimonials = [];
    const lines = content.split('\n');
    for (const line of lines) {
      if (line.includes('testimonial') || line.includes('review') || line.includes('feedback')) {
        testimonials.push(line.replace(/^[-*]\s*/, '').trim());
      }
    }
    return testimonials.length > 0 ? testimonials : [
      'Amazing AI-powered matching!',
      'Found the perfect IT consultant',
      'Secure and reliable platform'
    ];
  }

  extractPricing(content) {
    const pricing = [];
    const lines = content.split('\n');
    for (const line of lines) {
      if (line.includes('pricing') || line.includes('cost') || line.includes('price')) {
        pricing.push(line.replace(/^[-*]\s*/, '').trim());
      }
    }
    return pricing.length > 0 ? pricing : [
      'Transparent Commission Structure',
      'Competitive Pricing',
      'No Hidden Fees'
    ];
  }

  extractFAQs(content) {
    const faqs = [];
    const lines = content.split('\n');
    for (const line of lines) {
      if (line.includes('FAQ') || line.includes('question') || line.includes('how')) {
        faqs.push(line.replace(/^[-*]\s*/, '').trim());
      }
    }
    return faqs.length > 0 ? faqs : [
      'How does AI matching work?',
      'What security measures are in place?',
      'How are transactions processed?'
    ];
  }

  extractAboutData(content) {
    return {
      mission: 'Empowering businesses with AI-powered marketplace solutions',
      vision: 'Leading the future of digital commerce',
      values: ['Innovation', 'Trust', 'Excellence', 'Growth']
    };
  }

  extractContactData(content) {
    return {
      email: 'support@zion.marketplace',
      phone: '+1 (555) 123-4567',
      address: '123 Innovation Drive, Tech City, TC 12345'
    };
  }

  // Component generation methods
  generateHeroSectionComponent(data) {
    return `import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            ${data.headline}
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            ${data.subheadline}
          </p>
          <div className="flex justify-center gap-4 mb-8">
            ${data.ctaButtons.map(button => `
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              ${button}
            </button>
            `).join('')}
          </div>
          <div className="flex justify-center gap-8 text-sm">
            ${data.trustIndicators.map(indicator => `
            <span className="flex items-center">
              <span className="mr-2">✓</span>
              ${indicator}
            </span>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;`;
  }

  generateFeatureHighlightsComponent(features) {
    return `import React from 'react';

const FeatureHighlights = () => {
  const features = ${JSON.stringify(features, null, 2)};

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Zion</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">✓</span>
              </div>
              <h3 className="font-semibold mb-2">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;`;
  }

  generateServiceCategoriesComponent(services) {
    return `import React from 'react';

const ServiceCategories = () => {
  const services = ${JSON.stringify(services, null, 2)};

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="font-semibold text-lg mb-2">{service}</h3>
              <p className="text-gray-600 mb-4">Comprehensive {service.toLowerCase()} solutions</p>
              <button className="text-blue-600 font-semibold hover:underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;`;
  }

  generateTestimonialsComponent(testimonials) {
    return `import React from 'react';

const Testimonials = () => {
  const testimonials = ${JSON.stringify(testimonials, null, 2)};

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">"{testimonial}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">U</span>
                </div>
                <div>
                  <p className="font-semibold">Client {index + 1}</p>
                  <p className="text-sm text-gray-500">Verified User</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;`;
  }

  generatePricingTablesComponent(pricing) {
    return `import React from 'react';

const PricingTables = () => {
  const pricing = ${JSON.stringify(pricing, null, 2)};

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="font-semibold text-lg mb-2">{item}</h3>
              <p className="text-gray-600 mb-4">Clear and competitive pricing structure</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTables;`;
  }

  generateFAQSectionComponent(faqs) {
    return `import React, { useState } from 'react';

const FAQSection = () => {
  const faqs = ${JSON.stringify(faqs, null, 2)};
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white mb-4 rounded-lg shadow-md">
              <button
                className="w-full p-6 text-left font-semibold flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq}
                <span className="text-blue-600">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600">
                  Detailed answer about {faq.toLowerCase()}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;`;
  }

  generateAboutPage(data) {
    return `import React from 'react';
import Head from 'next/head';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Zion - AI-Powered Marketplace</title>
        <meta name="description" content="Learn about Zion's mission to revolutionize the marketplace industry with AI-powered solutions." />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12">About Zion</h1>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-6">${data.mission}</p>
              
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-700 mb-6">${data.vision}</p>
              
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {${JSON.stringify(data.values)}.map((value, index) => (
                  <div key={index} className="text-center p-4 bg-blue-50 rounded-lg">
                    <span className="font-semibold text-blue-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;`;
  }

  generateContactInfoComponent(data) {
    return `import React from 'react';

const ContactInfo = () => {
  const contactData = ${JSON.stringify(data, null, 2)};

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-xl">📧</span>
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-600">{contactData.email}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-xl">📞</span>
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">{contactData.phone}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-xl">📍</span>
            </div>
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-gray-600">{contactData.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;`;
  }

  async run() {
    console.log('🔗 Starting Content Integration System...');
    
    try {
      const integrationResults = await this.integrateMarketplaceContent();
      
      console.log('✅ Content Integration completed:');
      console.log(`   📊 Integrated components: ${Object.keys(integrationResults).length}`);
      
      return integrationResults;
    } catch (error) {
      console.error('❌ Content Integration failed:', error.message);
      throw error;
    }
  }
}

module.exports = ContentIntegrationSystem;

// Run if called directly
if (require.main === module) {
  const integrationSystem = new ContentIntegrationSystem();
  integrationSystem.run().catch(console.error);
} 
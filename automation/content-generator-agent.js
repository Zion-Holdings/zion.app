const fs = require('fs').promises;
const path = require('path');
const axios = require('axios');

class ContentGeneratorAgent {
  constructor() {
    this.contentTemplates = {
      about: {
        title: 'About Zion Tech Group',
        sections: [
          {
            heading: 'Who We Are',
            content: 'Zion Tech Group is a leading technology solutions provider specializing in innovative digital transformation services. We help businesses leverage cutting-edge technology to achieve their goals and stay ahead in the digital landscape.'
          },
          {
            heading: 'Our Mission',
            content: 'To empower organizations with transformative technology solutions that drive growth, efficiency, and competitive advantage in an ever-evolving digital world.'
          },
          {
            heading: 'Our Vision',
            content: 'To be the trusted technology partner for businesses seeking innovative, reliable, and scalable solutions that accelerate their digital transformation journey.'
          },
          {
            heading: 'Our Values',
            content: 'Innovation, Excellence, Integrity, Collaboration, and Customer Success form the foundation of everything we do.'
          }
        ]
      },
      services: {
        title: 'Our Services',
        sections: [
          {
            heading: 'Digital Transformation',
            content: 'Comprehensive digital transformation services to modernize your business operations, improve efficiency, and enhance customer experiences.'
          },
          {
            heading: 'Cloud Solutions',
            content: 'Scalable cloud infrastructure and migration services to optimize your IT operations and reduce costs while improving performance.'
          },
          {
            heading: 'AI & Machine Learning',
            content: 'Custom AI and machine learning solutions to automate processes, gain insights from data, and create intelligent business applications.'
          },
          {
            heading: 'Cybersecurity',
            content: 'Advanced security solutions to protect your digital assets, ensure compliance, and safeguard your business from evolving threats.'
          },
          {
            heading: 'Custom Software Development',
            content: 'Tailored software solutions designed to meet your specific business needs and drive operational excellence.'
          }
        ]
      },
      contact: {
        title: 'Contact Us',
        sections: [
          {
            heading: 'Get In Touch',
            content: 'Ready to transform your business with innovative technology solutions? Contact our team of experts today.'
          },
          {
            heading: 'Contact Information',
            content: 'Email: info@ziontechgroup.com\nPhone: +1 (555) 123-4567\nAddress: 123 Tech Street, Innovation City, IC 12345'
          },
          {
            heading: 'Business Hours',
            content: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM\nSunday: Closed'
          }
        ]
      },
      blog: {
        title: 'Latest Insights',
        sections: [
          {
            heading: 'Technology Trends',
            content: 'Stay updated with the latest technology trends and insights that can impact your business strategy and digital transformation initiatives.'
          },
          {
            heading: 'Industry News',
            content: 'Discover industry-specific news and developments that could influence your technology decisions and business growth.'
          },
          {
            heading: 'Expert Perspectives',
            content: 'Gain valuable insights from our technology experts on emerging technologies, best practices, and strategic recommendations.'
          }
        ]
      }
    };
  }

  async generateMissingContent(analysisReport) {
    console.log('🎨 Starting content generation...');
    
    const generatedContent = [];
    
    for (const missingPage of analysisReport.summary.missingContent) {
      const content = await this.generatePageContent(missingPage);
      if (content) {
        generatedContent.push(content);
      }
    }
    
    // Generate additional content based on analysis
    const additionalContent = await this.generateAdditionalContent(analysisReport);
    generatedContent.push(...additionalContent);
    
    // Save generated content
    await this.saveGeneratedContent(generatedContent);
    
    console.log(`✅ Generated content for ${generatedContent.length} pages`);
    return generatedContent;
  }

  async generatePageContent(missingPage) {
    const url = missingPage.url;
    const pathname = new URL(url).pathname;
    
    // Determine content type based on URL
    let contentType = 'generic';
    if (pathname.includes('/about')) contentType = 'about';
    else if (pathname.includes('/services')) contentType = 'services';
    else if (pathname.includes('/contact')) contentType = 'contact';
    else if (pathname.includes('/blog')) contentType = 'blog';
    else if (pathname.includes('/products')) contentType = 'products';
    
    const template = this.contentTemplates[contentType] || this.generateGenericTemplate(pathname);
    
    return {
      url: url,
      contentType: contentType,
      title: template.title,
      metaDescription: this.generateMetaDescription(template),
      content: template,
      generatedAt: new Date()
    };
  }

  generateGenericTemplate(pathname) {
    const pageName = pathname.split('/').pop() || 'page';
    const title = pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-/g, ' ');
    
    return {
      title: title,
      sections: [
        {
          heading: `Welcome to ${title}`,
          content: `This page provides comprehensive information about ${title.toLowerCase()} and how Zion Tech Group can help you with your technology needs.`
        },
        {
          heading: 'Our Expertise',
          content: 'With years of experience in technology solutions, we bring deep expertise and innovative approaches to every project we undertake.'
        },
        {
          heading: 'Why Choose Us',
          content: 'Our commitment to excellence, customer satisfaction, and cutting-edge technology makes us the ideal partner for your digital transformation journey.'
        }
      ]
    };
  }

  generateMetaDescription(template) {
    const firstSection = template.sections[0];
    const content = firstSection.content;
    return content.length > 160 ? content.substring(0, 157) + '...' : content;
  }

  async generateAdditionalContent(analysisReport) {
    const additionalContent = [];
    
    // Generate SEO-optimized content for pages with poor SEO scores
    const pagesNeedingSEO = analysisReport.contentAnalysis.filter(page => 
      !page.seo.hasOpenGraph || !page.seo.metaTags['description']
    );
    
    for (const page of pagesNeedingSEO) {
      const seoContent = await this.generateSEOContent(page);
      if (seoContent) {
        additionalContent.push(seoContent);
      }
    }
    
    // Generate missing meta descriptions
    const pagesWithoutMeta = analysisReport.contentAnalysis.filter(page => 
      !page.metaDescription
    );
    
    for (const page of pagesWithoutMeta) {
      const metaContent = this.generateMetaDescriptionForPage(page);
      if (metaContent) {
        additionalContent.push(metaContent);
      }
    }
    
    return additionalContent;
  }

  async generateSEOContent(page) {
    const url = page.url;
    const pathname = new URL(url).pathname;
    
    // Generate Open Graph tags
    const ogTags = {
      'og:title': page.title || 'Zion Tech Group',
      'og:description': page.metaDescription || 'Leading technology solutions provider',
      'og:type': 'website',
      'og:url': url,
      'og:site_name': 'Zion Tech Group'
    };
    
    // Generate Twitter Card tags
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': page.title || 'Zion Tech Group',
      'twitter:description': page.metaDescription || 'Leading technology solutions provider',
      'twitter:site': '@ziontechgroup'
    };
    
    return {
      url: url,
      contentType: 'seo',
      ogTags: ogTags,
      twitterTags: twitterTags,
      generatedAt: new Date()
    };
  }

  generateMetaDescriptionForPage(page) {
    const url = page.url;
    const pathname = new URL(url).pathname;
    
    let description = '';
    
    if (pathname.includes('/about')) {
      description = 'Learn about Zion Tech Group, a leading technology solutions provider specializing in digital transformation, cloud solutions, and innovative technology services.';
    } else if (pathname.includes('/services')) {
      description = 'Explore our comprehensive technology services including digital transformation, cloud solutions, AI & machine learning, cybersecurity, and custom software development.';
    } else if (pathname.includes('/contact')) {
      description = 'Contact Zion Tech Group for innovative technology solutions. Get in touch with our experts to discuss your digital transformation needs.';
    } else if (pathname.includes('/blog')) {
      description = 'Stay updated with the latest technology trends, industry insights, and expert perspectives from Zion Tech Group.';
    } else {
      description = 'Zion Tech Group - Your trusted partner for innovative technology solutions and digital transformation services.';
    }
    
    return {
      url: url,
      contentType: 'meta_description',
      description: description,
      generatedAt: new Date()
    };
  }

  async saveGeneratedContent(content) {
    const contentPath = path.join(__dirname, 'generated-content', 'content-generation-report.json');
    await fs.mkdir(path.dirname(contentPath), { recursive: true });
    
    const report = {
      timestamp: new Date(),
      totalGenerated: content.length,
      content: content,
      summary: {
        byType: this.groupContentByType(content),
        recommendations: this.generateContentRecommendations(content)
      }
    };
    
    await fs.writeFile(contentPath, JSON.stringify(report, null, 2));
    console.log(`📝 Content generation report saved to: ${contentPath}`);
  }

  groupContentByType(content) {
    const grouped = {};
    content.forEach(item => {
      const type = item.contentType;
      if (!grouped[type]) grouped[type] = [];
      grouped[type].push(item);
    });
    return grouped;
  }

  generateContentRecommendations(content) {
    const recommendations = [];
    
    const contentTypes = Object.keys(this.groupContentByType(content));
    
    if (contentTypes.includes('about')) {
      recommendations.push({
        type: 'content',
        priority: 'high',
        message: 'About page content generated',
        action: 'Review and customize the generated about page content'
      });
    }
    
    if (contentTypes.includes('services')) {
      recommendations.push({
        type: 'content',
        priority: 'high',
        message: 'Services page content generated',
        action: 'Review and customize the generated services content'
      });
    }
    
    if (contentTypes.includes('seo')) {
      recommendations.push({
        type: 'seo',
        priority: 'medium',
        message: 'SEO content generated',
        action: 'Implement the generated Open Graph and Twitter Card tags'
      });
    }
    
    return recommendations;
  }

  async createPageFiles(content) {
    console.log('📄 Creating page files...');
    
    for (const item of content) {
      if (item.contentType === 'about' || item.contentType === 'services' || 
          item.contentType === 'contact' || item.contentType === 'blog') {
        await this.createPageFile(item);
      }
    }
  }

  async createPageFile(contentItem) {
    const url = contentItem.url;
    const pathname = new URL(url).pathname;
    const fileName = pathname === '/' ? 'index' : pathname.slice(1).replace(/\//g, '-');
    
    const pageContent = this.generatePageComponent(contentItem);
    const filePath = path.join(__dirname, '..', 'pages', `${fileName}.tsx`);
    
    try {
      await fs.writeFile(filePath, pageContent);
      console.log(`✅ Created page file: ${filePath}`);
    } catch (error) {
      console.error(`❌ Error creating page file ${filePath}:`, error.message);
    }
  }

  generatePageComponent(contentItem) {
    const { title, sections } = contentItem.content;
    
    return `import React from 'react';
import Head from 'next/head';

const ${this.getComponentName(contentItem.url)} = () => {
  return (
    <>
      <Head>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${this.generateMetaDescription(contentItem.content)}" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${this.generateMetaDescription(contentItem.content)}" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="${contentItem.url}" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${title}" />
        <meta name="twitter:description" content="${this.generateMetaDescription(contentItem.content)}" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">${title}</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            ${sections.map(section => `
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">${section.heading}</h2>
              <p className="text-gray-600 leading-relaxed">${section.content}</p>
            </section>
            `).join('')}
          </div>
        </div>
      </div>
    </>
  );
};

export default ${this.getComponentName(contentItem.url)};
`;
  }

  getComponentName(url) {
    const pathname = new URL(url).pathname;
    const name = pathname === '/' ? 'Home' : pathname.slice(1).split('/').map(part => 
      part.charAt(0).toUpperCase() + part.slice(1)
    ).join('');
    return name || 'Page';
  }
}

module.exports = ContentGeneratorAgent; 
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Services - Zion Tech Solutions</title>
        <meta name="description" content="Explore the services we offer" />
      </Head>
      <main>
        <h1>Services</h1>
        <p>Our service offerings:</p>
        <ul>
          <li><Link href="/services/ai-model-development-chat"><a>AiModelDevelopmentChat</a></Link></li>
          <li><Link href="/services/ai-seo-auditor"><a>AiSeoAuditor</a></Link></li>
          <li><Link href="/services/api-development-chat"><a>ApiDevelopmentChat</a></Link></li>
          <li><Link href="/services/business-intelligence-chat"><a>BusinessIntelligenceChat</a></Link></li>
          <li><Link href="/services/cloud-migration-services-chat"><a>CloudMigrationServicesChat</a></Link></li>
          <li><Link href="/services/customer-support-chatbot"><a>CustomerSupportChatbot</a></Link></li>
          <li><Link href="/services/database-design-chat"><a>DatabaseDesignChat</a></Link></li>
          <li><Link href="/services/data-pipeline-engineering-chat"><a>DataPipelineEngineeringChat</a></Link></li>
          <li><Link href="/services/instagram-content-scheduler"><a>InstagramContentScheduler</a></Link></li>
          <li><Link href="/services/landing-page-generator"><a>LandingPageGenerator</a></Link></li>
          <li><Link href="/services/mobile-app-development-chat"><a>MobileAppDevelopmentChat</a></Link></li>
          <li><Link href="/services/network-security-chat"><a>NetworkSecurityChat</a></Link></li>
          <li><Link href="/services/performance-optimization-chat"><a>PerformanceOptimizationChat</a></Link></li>
          <li><Link href="/services/price-intelligence-service"><a>PriceIntelligenceService</a></Link></li>
          <li><Link href="/services/quality-assurance-testing-chat"><a>QualityAssuranceTestingChat</a></Link></li>
          <li><Link href="/services/security-auditing-chat"><a>SecurityAuditingChat</a></Link></li>
          <li><Link href="/services/system-administration-chat"><a>SystemAdministrationChat</a></Link></li>
          <li><Link href="/services/technical-documentation-chat"><a>TechnicalDocumentationChat</a></Link></li>
          <li><Link href="/services/ui-ux-design-chat"><a>UiUxDesignChat</a></Link></li>
          <li><Link href="/services/web-application-development-chat"><a>WebApplicationDevelopmentChat</a></Link></li>
        </ul>
      </main>
    </div>
  );
};

export default Index;

import type { NextPage } from 'next';
import ModernLayout from '../components/layout/ModernLayout';import Head from 'next/head';
import Link from 'next/link';

const ApiPage: NextPage = () => {
  
  return (
    <div>
      <div>
      <Head>
        <title>API Documentation - Zion</title>
        <meta name="description" content="API documentation and integration guides" />
        <link rel="icon" href="/favicon.ico" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>
      
      <div className="min-h-screen bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue>
        <div className="container-responsive" py-40>
          <div className="text-center" mb-16>
            <h1 className="text-responsive-4xl:font-bold" text-high-contrast mb-6">
              API Documentation
            </h1>
            <p className="text-responsive-lg:text-high-contrast-secondary max-w-2xl:mx-auto>
              Comprehensive API documentation and integration guides for developers
            </p>
          </div>
          
          <div className="grid" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>
            <div className="bg-cyber-card" p-8 rounded-lg:border border-cyber-border>
              <h3 className="text-xl" font-semibold text-high-contrast mb-4">REST API</h3>
              <p className="text-high-contrast-secondary mb-4>
                Access our comprehensive REST API for marketplace integration
              </p>
              <Link href=/api-docs className="text-neon-blue" hover:text-neon-purple />
                View Documentation →
              </Link>
            </div>
            
            <div className="bg-cyber-card" p-8 rounded-lg:border border-cyber-border">
              <h3 className="text-xl font-semibold text-high-contrast mb-4>Webhooks</h3>
              <p className="text-high-contrast-secondary" mb-4>
                Set up webhooks for real-time notifications and updates
              </p>
              <Link href=/webhook-management" className="text-neon-blue hover:text-neon-purple />
                Configure Webhooks →
              </Link>
            </div>
            
            <div className="bg-cyber-card" p-8 rounded-lg:border border-cyber-border>
              <h3 className="text-xl" font-semibold text-high-contrast mb-4>SDK</h3>
              <p className="text-high-contrast-secondary" mb-4">
                Download our SDKs for popular programming languages
              </p>
              <Link href="/docs" className="text-neon-blue hover:text-neon-purple" />
                Download SDK →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>

  </div>

  </div>

}
};

export default ApiPage
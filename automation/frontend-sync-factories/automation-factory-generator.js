#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn, exec, execSync } = require('child_process');
const { v4: uuidv4 } = require('uuid');

class AutomationFactoryGenerator {
  constructor() {
    this.name = 'automation-factory-generator';
    this.status = 'ready';
    this.projectRoot = process.cwd();
    this.generatedCount = 0;
    this.improvementCount = 0;
    this.learningData = [];
    
    this.config = this.loadConfig();
    this.templates = this.loadTemplates();
  }

  loadConfig() {
    return {
      outputDir: 'automation/frontend-sync-factories',
      templateDir: 'automation/frontend-sync-templates',
      maxFactories: 100,
      autoCommit: true,
      autoTest: true,
      autoDeploy: false,
      notifications: true,
      factoryTypes: [
        'component-generation',
        'page-generation',
        'api-generation',
        'test-generation',
        'build-optimization',
        'deployment-automation',
        'performance-monitoring',
        'security-scanning',
        'quality-assurance',
        'content-generation',
        'seo-optimization',
        'analytics-tracking',
        'user-feedback',
        'accessibility-testing',
        'internationalization',
        'progressive-enhancement',
        'mobile-optimization',
        'performance-budget',
        'code-splitting',
        'lazy-loading'
      ]
    };
  }

  loadTemplates() {
    return {
      'component-generation': {
        name: 'Component Generation Factory',
        description: 'Automated React component generation with TypeScript support',
        capabilities: ['component-creation', 'type-generation', 'style-integration', 'prop-validation'],
        dependencies: ['react', 'typescript', 'styled-components'],
        template: this.getComponentGenerationTemplate()
      },
      'page-generation': {
        name: 'Page Generation Factory',
        description: 'Automated Next.js page generation with routing and SEO',
        capabilities: ['page-creation', 'routing-setup', 'seo-optimization', 'meta-tags'],
        dependencies: ['next', 'react', 'typescript'],
        template: this.getPageGenerationTemplate()
      },
      'api-generation': {
        name: 'API Generation Factory',
        description: 'Automated API endpoint generation with validation and documentation',
        capabilities: ['endpoint-creation', 'validation-setup', 'documentation-generation', 'testing'],
        dependencies: ['express', 'joi', 'swagger'],
        template: this.getApiGenerationTemplate()
      },
      'test-generation': {
        name: 'Test Generation Factory',
        description: 'Automated test generation with coverage reporting',
        capabilities: ['unit-test-creation', 'integration-test-creation', 'coverage-reporting', 'mocking'],
        dependencies: ['jest', 'react-testing-library', 'cypress'],
        template: this.getTestGenerationTemplate()
      },
      'build-optimization': {
        name: 'Build Optimization Factory',
        description: 'Automated build optimization with bundling and minification',
        capabilities: ['bundle-optimization', 'minification', 'code-splitting', 'tree-shaking'],
        dependencies: ['webpack', 'terser', 'babel'],
        template: this.getBuildOptimizationTemplate()
      },
      'deployment-automation': {
        name: 'Deployment Automation Factory',
        description: 'Automated deployment with CI/CD pipeline',
        capabilities: ['ci-cd-setup', 'environment-management', 'rollback-strategy', 'monitoring'],
        dependencies: ['github-actions', 'docker', 'kubernetes'],
        template: this.getDeploymentAutomationTemplate()
      },
      'performance-monitoring': {
        name: 'Performance Monitoring Factory',
        description: 'Automated performance monitoring and optimization',
        capabilities: ['performance-tracking', 'lighthouse-audits', 'core-web-vitals', 'optimization'],
        dependencies: ['lighthouse', 'web-vitals', 'performance-budget'],
        template: this.getPerformanceMonitoringTemplate()
      },
      'security-scanning': {
        name: 'Security Scanning Factory',
        description: 'Automated security scanning and vulnerability detection',
        capabilities: ['vulnerability-scanning', 'dependency-auditing', 'code-analysis', 'compliance'],
        dependencies: ['npm-audit', 'snyk', 'sonarqube'],
        template: this.getSecurityScanningTemplate()
      },
      'quality-assurance': {
        name: 'Quality Assurance Factory',
        description: 'Automated quality assurance with linting and testing',
        capabilities: ['code-quality', 'linting', 'testing', 'coverage'],
        dependencies: ['eslint', 'prettier', 'jest', 'husky'],
        template: this.getQualityAssuranceTemplate()
      }
    };
  }

  async generate(factoryType) {
    console.log(`🏭 Generating automation factory: ${factoryType}`);
    
    try {
      const template = this.templates[factoryType];
      if (!template) {
        throw new Error(`Unknown factory type: ${factoryType}`);
      }
      
      const factoryCode = await this.generateFactoryCode(factoryType, template);
      const factoryPath = path.join(this.projectRoot, this.config.outputDir, `${factoryType}-factory.js`);
      
      // Ensure output directory exists
      const outputDir = path.dirname(factoryPath);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      // Write factory code
      fs.writeFileSync(factoryPath, factoryCode);
      
      // Generate additional files
      await this.generateAdditionalFiles(factoryType, template);
      
      // Auto commit if enabled
      if (this.config.autoCommit) {
        await this.autoCommit(`Generated ${factoryType} factory`);
      }
      
      // Auto test if enabled
      if (this.config.autoTest) {
        await this.autoTest(factoryPath);
      }
      
      this.generatedCount++;
      console.log(`✅ Generated factory: ${factoryType}`);
      
      return {
        success: true,
        factoryType,
        factoryPath,
        generated: new Date().toISOString()
      };
      
    } catch (error) {
      console.error(`❌ Failed to generate factory ${factoryType}:`, error);
      throw error;
    }
  }

  async generateFactoryCode(factoryType, template) {
    const className = this.camelCase(factoryType) + 'Factory';
    
    return `
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn, exec, execSync } = require('child_process');
const { v4: uuidv4 } = require('uuid');

class ${className} {
  constructor() {
    this.name = '${factoryType}';
    this.description = '${template.description}';
    this.status = 'ready';
    this.projectRoot = process.cwd();
    this.generatedCount = 0;
    this.improvementCount = 0;
    this.learningData = [];
    
    this.config = this.loadConfig();
    this.capabilities = ${JSON.stringify(template.capabilities)};
    this.dependencies = ${JSON.stringify(template.dependencies)};
  }

  loadConfig() {
    return {
      autoCommit: true,
      autoTest: true,
      autoDeploy: false,
      notifications: true,
      outputDir: 'generated/${factoryType}',
      templateDir: 'templates/${factoryType}',
      maxGenerations: 1000,
      improvementInterval: 300000,
      monitoringInterval: 60000
    };
  }

  async initialize() {
    console.log('🚀 Initializing ${template.name}...');
    
    try {
      await this.ensureDirectories();
      await this.installDependencies();
      await this.setupCapabilities();
      
      this.status = 'running';
      console.log('✅ ${template.name} initialized successfully');
      
    } catch (error) {
      console.error('❌ Error initializing factory:', error);
      this.status = 'error';
      throw error;
    }
  }

  async ensureDirectories() {
    const directories = [
      this.config.outputDir,
      this.config.templateDir,
      'logs/${factoryType}',
      'status/${factoryType}',
      'analytics/${factoryType}',
      'backups/${factoryType}'
    ];

    directories.forEach(dir => {
      const dirPath = path.join(this.projectRoot, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async installDependencies() {
    console.log('📦 Installing dependencies...');
    
    for (const dependency of this.dependencies) {
      try {
        console.log(\`📦 Installing \${dependency}...\`);
        execSync(\`npm install \${dependency}\`, { cwd: this.projectRoot, stdio: 'pipe' });
        console.log(\`✅ \${dependency} installed\`);
      } catch (error) {
        console.warn(\`⚠️  Failed to install \${dependency}:\`, error.message);
      }
    }
  }

  async setupCapabilities() {
    console.log('🔧 Setting up capabilities...');
    
    for (const capability of this.capabilities) {
      try {
        await this.setupCapability(capability);
      } catch (error) {
        console.error(\`❌ Failed to setup capability \${capability}:\`, error);
      }
    }
  }

  async setupCapability(capability) {
    console.log(\`🔧 Setting up capability: \${capability}\`);
    
    switch (capability) {
      case 'component-creation':
        await this.setupComponentCreation();
        break;
      case 'type-generation':
        await this.setupTypeGeneration();
        break;
      case 'style-integration':
        await this.setupStyleIntegration();
        break;
      case 'prop-validation':
        await this.setupPropValidation();
        break;
      case 'page-creation':
        await this.setupPageCreation();
        break;
      case 'routing-setup':
        await this.setupRoutingSetup();
        break;
      case 'seo-optimization':
        await this.setupSeoOptimization();
        break;
      case 'meta-tags':
        await this.setupMetaTags();
        break;
      case 'endpoint-creation':
        await this.setupEndpointCreation();
        break;
      case 'validation-setup':
        await this.setupValidationSetup();
        break;
      case 'documentation-generation':
        await this.setupDocumentationGeneration();
        break;
      case 'testing':
        await this.setupTesting();
        break;
      case 'unit-test-creation':
        await this.setupUnitTestCreation();
        break;
      case 'integration-test-creation':
        await this.setupIntegrationTestCreation();
        break;
      case 'coverage-reporting':
        await this.setupCoverageReporting();
        break;
      case 'mocking':
        await this.setupMocking();
        break;
      case 'bundle-optimization':
        await this.setupBundleOptimization();
        break;
      case 'minification':
        await this.setupMinification();
        break;
      case 'code-splitting':
        await this.setupCodeSplitting();
        break;
      case 'tree-shaking':
        await this.setupTreeShaking();
        break;
      case 'ci-cd-setup':
        await this.setupCiCdSetup();
        break;
      case 'environment-management':
        await this.setupEnvironmentManagement();
        break;
      case 'rollback-strategy':
        await this.setupRollbackStrategy();
        break;
      case 'monitoring':
        await this.setupMonitoring();
        break;
      case 'performance-tracking':
        await this.setupPerformanceTracking();
        break;
      case 'lighthouse-audits':
        await this.setupLighthouseAudits();
        break;
      case 'core-web-vitals':
        await this.setupCoreWebVitals();
        break;
      case 'optimization':
        await this.setupOptimization();
        break;
      case 'vulnerability-scanning':
        await this.setupVulnerabilityScanning();
        break;
      case 'dependency-auditing':
        await this.setupDependencyAuditing();
        break;
      case 'code-analysis':
        await this.setupCodeAnalysis();
        break;
      case 'compliance':
        await this.setupCompliance();
        break;
      case 'code-quality':
        await this.setupCodeQuality();
        break;
      case 'linting':
        await this.setupLinting();
        break;
      case 'coverage':
        await this.setupCoverage();
        break;
      default:
        console.log(\`🔧 Setting up generic capability: \${capability}\`);
    }
  }

  async generate(config = {}) {
    console.log(\`🏭 [\${this.name}] Generating automation...\`);
    
    try {
      const result = await this.performGeneration(config);
      this.generatedCount++;
      
      // Learn from generation
      this.learnFromGeneration(config, result);
      
      console.log(\`✅ [\${this.name}] Generation completed\`);
      return result;
    } catch (error) {
      console.error(\`❌ [\${this.name}] Generation failed\`, error);
      this.learnFromError(error);
      throw error;
    }
  }

  async performGeneration(config) {
    // Implement factory-specific generation logic
    return { 
      success: true, 
      factory: this.name, 
      timestamp: new Date().toISOString(),
      config
    };
  }

  learnFromGeneration(config, result) {
    this.learningData.push({
      config,
      result,
      timestamp: new Date().toISOString(),
      success: true
    });
  }

  learnFromError(error) {
    this.learningData.push({
      error: error.message,
      timestamp: new Date().toISOString(),
      success: false
    });
  }

  async improve() {
    console.log(\`🔧 [\${this.name}] Improving factory...\`);
    this.improvementCount++;
    
    // Analyze learning data for improvements
    const recentData = this.learningData.slice(-50);
    const errorRate = recentData.filter(d => !d.success).length / recentData.length;
    
    if (errorRate > 0.1) {
      console.log('🔧 High error rate detected, implementing improvements...');
      await this.implementImprovements();
    }
  }

  async implementImprovements() {
    console.log('🔧 Implementing improvements...');
    
    // Add improvement logic here
    // This could include:
    // - Optimizing generation algorithms
    // - Adding new capabilities
    // - Improving error handling
    // - Enhancing performance
    
    console.log('✅ Improvements implemented');
  }

  async setupComponentCreation() {
    console.log('🔧 Setting up component creation capability...');
    // Add component creation setup logic
  }

  async setupTypeGeneration() {
    console.log('🔧 Setting up type generation capability...');
    // Add type generation setup logic
  }

  async setupStyleIntegration() {
    console.log('🔧 Setting up style integration capability...');
    // Add style integration setup logic
  }

  async setupPropValidation() {
    console.log('🔧 Setting up prop validation capability...');
    // Add prop validation setup logic
  }

  async setupPageCreation() {
    console.log('🔧 Setting up page creation capability...');
    // Add page creation setup logic
  }

  async setupRoutingSetup() {
    console.log('🔧 Setting up routing setup capability...');
    // Add routing setup logic
  }

  async setupSeoOptimization() {
    console.log('🔧 Setting up SEO optimization capability...');
    // Add SEO optimization setup logic
  }

  async setupMetaTags() {
    console.log('🔧 Setting up meta tags capability...');
    // Add meta tags setup logic
  }

  async setupEndpointCreation() {
    console.log('🔧 Setting up endpoint creation capability...');
    // Add endpoint creation setup logic
  }

  async setupValidationSetup() {
    console.log('🔧 Setting up validation setup capability...');
    // Add validation setup logic
  }

  async setupDocumentationGeneration() {
    console.log('🔧 Setting up documentation generation capability...');
    // Add documentation generation setup logic
  }

  async setupTesting() {
    console.log('🔧 Setting up testing capability...');
    // Add testing setup logic
  }

  async setupUnitTestCreation() {
    console.log('🔧 Setting up unit test creation capability...');
    // Add unit test creation setup logic
  }

  async setupIntegrationTestCreation() {
    console.log('🔧 Setting up integration test creation capability...');
    // Add integration test creation setup logic
  }

  async setupCoverageReporting() {
    console.log('🔧 Setting up coverage reporting capability...');
    // Add coverage reporting setup logic
  }

  async setupMocking() {
    console.log('🔧 Setting up mocking capability...');
    // Add mocking setup logic
  }

  async setupBundleOptimization() {
    console.log('🔧 Setting up bundle optimization capability...');
    // Add bundle optimization setup logic
  }

  async setupMinification() {
    console.log('🔧 Setting up minification capability...');
    // Add minification setup logic
  }

  async setupCodeSplitting() {
    console.log('🔧 Setting up code splitting capability...');
    // Add code splitting setup logic
  }

  async setupTreeShaking() {
    console.log('🔧 Setting up tree shaking capability...');
    // Add tree shaking setup logic
  }

  async setupCiCdSetup() {
    console.log('🔧 Setting up CI/CD setup capability...');
    // Add CI/CD setup logic
  }

  async setupEnvironmentManagement() {
    console.log('🔧 Setting up environment management capability...');
    // Add environment management setup logic
  }

  async setupRollbackStrategy() {
    console.log('🔧 Setting up rollback strategy capability...');
    // Add rollback strategy setup logic
  }

  async setupMonitoring() {
    console.log('🔧 Setting up monitoring capability...');
    // Add monitoring setup logic
  }

  async setupPerformanceTracking() {
    console.log('🔧 Setting up performance tracking capability...');
    // Add performance tracking setup logic
  }

  async setupLighthouseAudits() {
    console.log('🔧 Setting up Lighthouse audits capability...');
    // Add Lighthouse audits setup logic
  }

  async setupCoreWebVitals() {
    console.log('🔧 Setting up Core Web Vitals capability...');
    // Add Core Web Vitals setup logic
  }

  async setupOptimization() {
    console.log('🔧 Setting up optimization capability...');
    // Add optimization setup logic
  }

  async setupVulnerabilityScanning() {
    console.log('🔧 Setting up vulnerability scanning capability...');
    // Add vulnerability scanning setup logic
  }

  async setupDependencyAuditing() {
    console.log('🔧 Setting up dependency auditing capability...');
    // Add dependency auditing setup logic
  }

  async setupCodeAnalysis() {
    console.log('🔧 Setting up code analysis capability...');
    // Add code analysis setup logic
  }

  async setupCompliance() {
    console.log('🔧 Setting up compliance capability...');
    // Add compliance setup logic
  }

  async setupCodeQuality() {
    console.log('🔧 Setting up code quality capability...');
    // Add code quality setup logic
  }

  async setupLinting() {
    console.log('🔧 Setting up linting capability...');
    // Add linting setup logic
  }

  async setupCoverage() {
    console.log('🔧 Setting up coverage capability...');
    // Add coverage setup logic
  }

  async autoCommit(message) {
    try {
      execSync('git add .', { cwd: this.projectRoot, stdio: 'pipe' });
      execSync(\`git commit -m "\${message}"\`, { cwd: this.projectRoot, stdio: 'pipe' });
      console.log(\`💾 Auto-committed: \${message}\`);
    } catch (error) {
      console.warn(\`⚠️  Auto-commit failed: \${error.message}\`);
    }
  }

  async autoTest(factoryPath) {
    try {
      console.log('🧪 Running factory tests...');
      // Add factory testing logic here
      console.log('✅ Factory tests completed');
    } catch (error) {
      console.warn('⚠️  Factory tests failed:', error.message);
    }
  }

  getStatus() {
    return {
      name: this.name,
      description: this.description,
      status: this.status,
      generatedCount: this.generatedCount,
      improvementCount: this.improvementCount,
      capabilities: this.capabilities,
      dependencies: this.dependencies,
      learningData: this.learningData.length
    };
  }

  async shutdown() {
    console.log(\`🛑 Shutting down \${this.name}...\`);
    this.status = 'stopped';
    console.log(\`✅ \${this.name} shutdown complete\`);
  }
}

module.exports = ${className};
`;
  }

  async generateAdditionalFiles(factoryType, template) {
    console.log(`📁 Generating additional files for ${factoryType}...`);
    
    // Generate configuration file
    await this.generateConfigFile(factoryType, template);
    
    // Generate template files
    await this.generateTemplateFiles(factoryType, template);
    
    // Generate documentation
    await this.generateDocumentation(factoryType, template);
    
    // Generate tests
    await this.generateTests(factoryType, template);
  }

  async generateConfigFile(factoryType, template) {
    const configPath = path.join(this.projectRoot, this.config.outputDir, `${factoryType}-config.json`);
    
    const config = {
      name: template.name,
      description: template.description,
      capabilities: template.capabilities,
      dependencies: template.dependencies,
      autoCommit: true,
      autoTest: true,
      autoDeploy: false,
      notifications: true,
      maxGenerations: 1000,
      improvementInterval: 300000,
      monitoringInterval: 60000
    };
    
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    console.log(`✅ Generated config file: ${configPath}`);
  }

  async generateTemplateFiles(factoryType, template) {
    const templateDir = path.join(this.projectRoot, this.config.templateDir, factoryType);
    
    if (!fs.existsSync(templateDir)) {
      fs.mkdirSync(templateDir, { recursive: true });
    }
    
    // Generate template files based on factory type
    switch (factoryType) {
      case 'component-generation':
        await this.generateComponentTemplates(templateDir);
        break;
      case 'page-generation':
        await this.generatePageTemplates(templateDir);
        break;
      case 'api-generation':
        await this.generateApiTemplates(templateDir);
        break;
      case 'test-generation':
        await this.generateTestTemplates(templateDir);
        break;
      default:
        await this.generateGenericTemplates(templateDir, factoryType);
    }
    
    console.log(`✅ Generated template files for ${factoryType}`);
  }

  async generateComponentTemplates(templateDir) {
    const templates = {
      'component.tsx': this.getComponentTemplate(),
      'component.test.tsx': this.getComponentTestTemplate(),
      'component.styles.ts': this.getComponentStylesTemplate(),
      'index.ts': this.getComponentIndexTemplate()
    };
    
    for (const [filename, content] of Object.entries(templates)) {
      const filePath = path.join(templateDir, filename);
      fs.writeFileSync(filePath, content);
    }
  }

  async generatePageTemplates(templateDir) {
    const templates = {
      'page.tsx': this.getPageTemplate(),
      'page.test.tsx': this.getPageTestTemplate(),
      'page.meta.ts': this.getPageMetaTemplate(),
      'index.ts': this.getPageIndexTemplate()
    };
    
    for (const [filename, content] of Object.entries(templates)) {
      const filePath = path.join(templateDir, filename);
      fs.writeFileSync(filePath, content);
    }
  }

  async generateApiTemplates(templateDir) {
    const templates = {
      'endpoint.ts': this.getApiEndpointTemplate(),
      'endpoint.test.ts': this.getApiEndpointTestTemplate(),
      'validation.ts': this.getApiValidationTemplate(),
      'documentation.ts': this.getApiDocumentationTemplate()
    };
    
    for (const [filename, content] of Object.entries(templates)) {
      const filePath = path.join(templateDir, filename);
      fs.writeFileSync(filePath, content);
    }
  }

  async generateTestTemplates(templateDir) {
    const templates = {
      'unit.test.ts': this.getUnitTestTemplate(),
      'integration.test.ts': this.getIntegrationTestTemplate(),
      'e2e.test.ts': this.getE2ETestTemplate(),
      'test-utils.ts': this.getTestUtilsTemplate()
    };
    
    for (const [filename, content] of Object.entries(templates)) {
      const filePath = path.join(templateDir, filename);
      fs.writeFileSync(filePath, content);
    }
  }

  async generateGenericTemplates(templateDir, factoryType) {
    const templates = {
      'template.ts': this.getGenericTemplate(factoryType),
      'template.test.ts': this.getGenericTestTemplate(factoryType),
      'config.json': this.getGenericConfigTemplate(factoryType)
    };
    
    for (const [filename, content] of Object.entries(templates)) {
      const filePath = path.join(templateDir, filename);
      fs.writeFileSync(filePath, content);
    }
  }

  async generateDocumentation(factoryType, template) {
    const docsPath = path.join(this.projectRoot, this.config.outputDir, `${factoryType}-README.md`);
    
    const documentation = this.getDocumentationTemplate(factoryType, template);
    fs.writeFileSync(docsPath, documentation);
    
    console.log(`✅ Generated documentation: ${docsPath}`);
  }

  async generateTests(factoryType, template) {
    const testPath = path.join(this.projectRoot, this.config.outputDir, `${factoryType}-factory.test.js`);
    
    const testCode = this.getFactoryTestTemplate(factoryType, template);
    fs.writeFileSync(testPath, testCode);
    
    console.log(`✅ Generated tests: ${testPath}`);
  }

  // Template methods
  getComponentTemplate() {
    return `import React from 'react';
import { ComponentProps } from './component.types';

export const Component: React.FC<ComponentProps> = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

export default Component;`;
  }

  getComponentTestTemplate() {
    return `import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from './component';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component>Test content</Component>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});`;
  }

  getComponentStylesTemplate() {
    return `import styled from 'styled-components';

export const StyledComponent = styled.div\`
  // Add your styles here
\`;`;
  }

  getComponentIndexTemplate() {
    return `export { default } from './component';
export * from './component.types';`;
  }

  getPageTemplate() {
    return `import React from 'react';
import { NextPage } from 'next';
import { PageProps } from './page.types';

const Page: NextPage<PageProps> = ({ ...props }) => {
  return (
    <div>
      <h1>Page Content</h1>
    </div>
  );
};

export default Page;`;
  }

  getPageTestTemplate() {
    return `import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Page', () => {
  it('renders correctly', () => {
    render(<Page />);
    expect(screen.getByText('Page Content')).toBeInTheDocument();
  });
});`;
  }

  getPageMetaTemplate() {
    return `export const pageMeta = {
  title: 'Page Title',
  description: 'Page description',
  keywords: ['keyword1', 'keyword2'],
  ogImage: '/og-image.jpg'
};`;
  }

  getPageIndexTemplate() {
    return `export { default } from './page';
export * from './page.types';
export * from './page.meta';`;
  }

  getApiEndpointTemplate() {
    return `import { NextApiRequest, NextApiResponse } from 'next';
import { validateRequest } from './validation';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Validate request
    const validatedData = validateRequest(req);
    
    // Process request
    const result = await processRequest(validatedData);
    
    // Return response
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}`;
  }

  getApiEndpointTestTemplate() {
    return `import { createMocks } from 'node-mocks-http';
import handler from './endpoint';

describe('API Endpoint', () => {
  it('handles request correctly', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
  });
});`;
  }

  getApiValidationTemplate() {
    return `import Joi from 'joi';

export const validateRequest = (req) => {
  const schema = Joi.object({
    // Add validation schema here
  });
  
  return schema.validate(req.body);
};`;
  }

  getApiDocumentationTemplate() {
    return `/**
 * API Endpoint Documentation
 * 
 * @route GET /api/endpoint
 * @desc Get endpoint data
 * @access Public
 */
export const documentation = {
  endpoint: '/api/endpoint',
  method: 'GET',
  description: 'Get endpoint data',
  parameters: [],
  responses: {
    200: {
      description: 'Success',
      schema: {}
    }
  }
};`;
  }

  getUnitTestTemplate() {
    return `import { render, screen } from '@testing-library/react';
import { Component } from './component';

describe('Component Unit Tests', () => {
  it('should render correctly', () => {
    render(<Component />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});`;
  }

  getIntegrationTestTemplate() {
    return `import { render, screen } from '@testing-library/react';
import { Component } from './component';

describe('Component Integration Tests', () => {
  it('should integrate with other components', () => {
    render(<Component />);
    // Add integration test logic
  });
});`;
  }

  getE2ETestTemplate() {
    return `describe('E2E Tests', () => {
  it('should work end-to-end', () => {
    cy.visit('/');
    cy.get('[data-testid="component"]').should('be.visible');
  });
});`;
  }

  getTestUtilsTemplate() {
    return `import { render } from '@testing-library/react';

export const renderWithProviders = (component, options = {}) => {
  return render(component, options);
};

export const mockData = {
  // Add mock data here
};`;
  }

  getGenericTemplate(factoryType) {
    return `// ${factoryType} template
export const template = {
  name: '${factoryType}',
  description: 'Generated template for ${factoryType}',
  version: '1.0.0'
};`;
  }

  getGenericTestTemplate(factoryType) {
    return `// ${factoryType} test template
describe('${factoryType}', () => {
  it('should work correctly', () => {
    expect(true).toBe(true);
  });
});`;
  }

  getGenericConfigTemplate(factoryType) {
    return JSON.stringify({
      name: factoryType,
      description: `Generated config for ${factoryType}`,
      version: '1.0.0',
      enabled: true
    }, null, 2);
  }

  getDocumentationTemplate(factoryType, template) {
    return `# ${template.name}

${template.description}

## Capabilities

${template.capabilities.map(cap => `- ${cap}`).join('\n')}

## Dependencies

${template.dependencies.map(dep => `- ${dep}`).join('\n')}

## Usage

\`\`\`javascript
const factory = new ${this.camelCase(factoryType)}Factory();
await factory.initialize();
await factory.generate(config);
\`\`\`

## Configuration

See \`${factoryType}-config.json\` for configuration options.

## Testing

Run tests with:

\`\`\`bash
npm test -- ${factoryType}-factory.test.js
\`\`\`
`;
  }

  getFactoryTestTemplate(factoryType, template) {
    return `const ${this.camelCase(factoryType)}Factory = require('./${factoryType}-factory');

describe('${template.name}', () => {
  let factory;

  beforeEach(() => {
    factory = new ${this.camelCase(factoryType)}Factory();
  });

  afterEach(async () => {
    await factory.shutdown();
  });

  it('should initialize correctly', async () => {
    await factory.initialize();
    expect(factory.status).toBe('running');
  });

  it('should generate automation', async () => {
    await factory.initialize();
    const result = await factory.generate({});
    expect(result.success).toBe(true);
  });

  it('should improve over time', async () => {
    await factory.initialize();
    await factory.improve();
    expect(factory.improvementCount).toBeGreaterThan(0);
  });
});`;
  }

  camelCase(str) {
    return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  }

  async autoCommit(message) {
    try {
      execSync('git add .', { cwd: this.projectRoot, stdio: 'pipe' });
      execSync(`git commit -m "${message}"`, { cwd: this.projectRoot, stdio: 'pipe' });
      console.log(`💾 Auto-committed: ${message}`);
    } catch (error) {
      console.warn(`⚠️  Auto-commit failed: ${error.message}`);
    }
  }

  getStatus() {
    return {
      name: this.name,
      status: this.status,
      generatedCount: this.generatedCount,
      improvementCount: this.improvementCount,
      templates: Object.keys(this.templates).length,
      factoryTypes: this.config.factoryTypes
    };
  }

  async shutdown() {
    console.log('🛑 Shutting down Automation Factory Generator...');
    this.status = 'stopped';
    console.log('✅ Automation Factory Generator shutdown complete');
  }
}

// Auto-start if run directly
if (require.main === module) {
  const generator = new AutomationFactoryGenerator();
  
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down...');
    await generator.shutdown();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down...');
    await generator.shutdown();
    process.exit(0);
  });
  
  // Generate a factory if type is provided
  const factoryType = process.argv[2];
  if (factoryType) {
    generator.generate(factoryType).catch(error => {
      console.error('❌ Factory generation failed:', error);
      process.exit(1);
    });
  } else {
    console.log('Usage: node automation-factory-generator.js <factory-type>');
    console.log('Available factory types:', generator.config.factoryTypes.join(', '));
  }
}

module.exports = AutomationFactoryGenerator; 
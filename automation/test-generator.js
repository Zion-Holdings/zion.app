#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class TestGenerator {
  constructor() {
    this.testTemplates = {
      component: this.getComponentTestTemplate(),
      page: this.getPageTestTemplate(),
      utility: this.getUtilityTestTemplate()
    };
  }

  getComponentTestTemplate() {
    return `import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from './Component';

describe('Component', () => {
  it('renders without crashing', () => {
    render(<Component />);
    expect(screen.getByRole('generic')).toBeInTheDocument();
  });

  it('displays correct content', () => {
    render(<Component />);
    // Add specific test assertions here
  });
});`;
  }

  getPageTestTemplate() {
    return `import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from './Page';

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
    };
  },
}));

describe('Page', () => {
  it('renders without crashing', () => {
    render(<Page />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays page title', () => {
    render(<Page />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});`;
  }

  getUtilityTestTemplate() {
    return `import { functionName } from './utility';

describe('utility', () => {
  describe('functionName', () => {
    it('should work correctly', () => {
      // Add test cases here
      expect(functionName()).toBeDefined();
    });
  });
});`;
  }

  generateTest(filePath, type = 'component') {
    const template = this.testTemplates[type];
    if (!template) {
      console.error('Unknown test type:', type);
      return;
    }

    const fileName = path.basename(filePath, path.extname(filePath));
    const testFileName = `${fileName}.test.tsx`;
    const testPath = filePath.replace(path.extname(filePath), '.test.tsx');
    
    const testContent = template
      .replace(/Component/g, fileName)
      .replace(/Page/g, fileName)
      .replace(/functionName/g, fileName);

    fs.writeFileSync(testPath, testContent);
    console.log(`✅ Generated test: ${testPath}`);
  }

  generateTestsForDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        this.generateTestsForDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const type = dir.includes('pages') ? 'page' : 'component';
        this.generateTest(filePath, type);
      }
    }
  }
}

const generator = new TestGenerator();
// Example usage:
// generator.generateTestsForDirectory('./components');
console.log('Test generator ready');

import { useState, useCallback, useRef, useEffect } from 'react';
import { useAnalytics } from './useAnalytics';

interface CodeSuggestion {
  id: string;
  type: 'optimization' | 'security' | 'performance' | 'best_practice' | 'refactor';
  title: string;
  description: string;
  code: string;
  confidence: number;
  impact: 'low' | 'medium' | 'high';
  category: string;
  tags: string[];
  alternatives?: string[];
  explanation: string;
  references?: Array<{
    title: string;
    url: string;
    description: string;
  }>;
}

interface CodeAnalysis {
  complexity: number;
  maintainability: number;
  security: number;
  performance: number;
  accessibility: number;
  suggestions: CodeSuggestion[];
  metrics: {
    linesOfCode: number;
    functions: number;
    classes: number;
    imports: number;
    dependencies: number;
    testCoverage?: number;
  };
  issues: Array<{
    severity: 'error' | 'warning' | 'info';
    message: string;
    line?: number;
    column?: number;
    rule?: string;
  }>;
}

interface CodeGenerationOptions {
  language: 'typescript' | 'javascript' | 'python' | 'java' | 'cpp' | 'csharp' | 'go' | 'rust';
  framework?: 'react' | 'vue' | 'angular' | 'nextjs' | 'express' | 'fastapi' | 'spring' | 'dotnet';
  style: 'functional' | 'oop' | 'procedural' | 'declarative';
  target: 'web' | 'mobile' | 'desktop' | 'server' | 'cli';
  quality: 'production' | 'development' | 'prototype';
  includeTests: boolean;
  includeDocs: boolean;
  includeErrorHandling: boolean;
  includeLogging: boolean;
  includeMetrics: boolean;
}

interface AICodeGenerationHook {
  // State
  isGenerating: boolean;
  isAnalyzing: boolean;
  generatedCode: string;
  codeAnalysis: CodeAnalysis | null;
  suggestions: CodeSuggestion[];
  history: Array<{
    id: string;
    prompt: string;
    code: string;
    timestamp: Date;
    language: string;
    quality: string;
  }>;
  
  // Actions
  generateCode: (prompt: string, options: CodeGenerationOptions) => Promise<void>;
  analyzeCode: (code: string, language: string) => Promise<void>;
  applySuggestion: (suggestion: CodeSuggestion) => void;
  optimizeCode: (code: string, focus: keyof CodeAnalysis) => Promise<string>;
  generateTests: (code: string, language: string) => Promise<string>;
  generateDocs: (code: string, language: string) => Promise<string>;
  
  // Utilities
  clearHistory: () => void;
  exportCode: (format: 'txt' | 'md' | 'json') => void;
  getCodeMetrics: (code: string) => CodeAnalysis['metrics'];
}

export const useAICodeGeneration = (): AICodeGenerationHook => {
  const { trackEvent } = useAnalytics({
    enableTracking: true,
    enableUserBehaviorTracking: true
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [codeAnalysis, setCodeAnalysis] = useState<CodeAnalysis | null>(null);
  const [suggestions, setSuggestions] = useState<CodeSuggestion[]>([]);
  const [history, setHistory] = useState<Array<{
    id: string;
    prompt: string;
    code: string;
    timestamp: Date;
    language: string;
    quality: string;
  }>>([]);

  const generationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Generate code using AI
  const generateCode = useCallback(async (prompt: string, options: CodeGenerationOptions) => {
    setIsGenerating(true);
    
    try {
      // Simulate AI processing - in production, this would call an AI service
      await new Promise(resolve => setTimeout(resolve, 3000));

      let generatedCode = '';

      // Generate code based on options
      if (options.language === 'typescript' && options.framework === 'react') {
        generatedCode = generateReactTypeScriptCode(prompt, options);
      } else if (options.language === 'javascript' && options.framework === 'express') {
        generatedCode = generateExpressCode(prompt, options);
      } else if (options.language === 'python') {
        generatedCode = generatePythonCode(prompt, options);
      } else {
        generatedCode = generateGenericCode(prompt, options);
      }

      setGeneratedCode(generatedCode);

      // Add to history
      const historyItem = {
        id: `gen_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        prompt,
        code: generatedCode,
        timestamp: new Date(),
        language: options.language,
        quality: options.quality
      };

      setHistory(prev => [historyItem, ...prev.slice(0, 49)]); // Keep last 50 items

      // Analyze the generated code
      await analyzeCode(generatedCode, options.language);

      trackEvent('ai_code_generation', 'code_generated', options.language, generatedCode.length, {
        framework: options.framework,
        style: options.style,
        target: options.target,
        quality: options.quality
      });

    } catch (error) {
      console.error('Failed to generate code:', error);
      trackEvent('ai_code_generation', 'generation_failed', 'error', undefined, {
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsGenerating(false);
    }
  }, [trackEvent]);

  // Analyze existing code
  const analyzeCode = useCallback(async (code: string, language: string) => {
    setIsAnalyzing(true);

    try {
      // Simulate AI analysis - in production, this would call an AI service
      await new Promise(resolve => setTimeout(resolve, 2000));

      const analysis: CodeAnalysis = {
        complexity: calculateComplexity(code),
        maintainability: calculateMaintainability(code),
        security: calculateSecurityScore(code),
        performance: calculatePerformanceScore(code),
        accessibility: calculateAccessibilityScore(code),
        suggestions: generateCodeSuggestions(code, language),
        metrics: getCodeMetrics(code),
        issues: analyzeCodeIssues(code, language)
      };

      setCodeAnalysis(analysis);
      setSuggestions(analysis.suggestions);

      trackEvent('ai_code_analysis', 'code_analyzed', language, code.length, {
        complexity: analysis.complexity,
        maintainability: analysis.maintainability,
        security: analysis.security,
        performance: analysis.performance
      });

    } catch (error) {
      console.error('Failed to analyze code:', error);
      trackEvent('ai_code_analysis', 'analysis_failed', 'error', undefined, {
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsAnalyzing(false);
    }
  }, [trackEvent]);

  // Apply a code suggestion
  const applySuggestion = useCallback((suggestion: CodeSuggestion) => {
    setGeneratedCode(prev => {
      // Simple replacement - in production, this would be more sophisticated
      return prev.replace(/\/\/ TODO: Apply suggestion/g, suggestion.code);
    });

    // Remove the applied suggestion
    setSuggestions(prev => prev.filter(s => s.id !== suggestion.id));

    trackEvent('ai_code_generation', 'suggestion_applied', suggestion.type, undefined, {
      suggestionId: suggestion.id,
      impact: suggestion.impact,
      category: suggestion.category
    });
  }, [trackEvent]);

  // Optimize existing code
  const optimizeCode = useCallback(async (code: string, focus: keyof CodeAnalysis): Promise<string> => {
    try {
      // Simulate AI optimization - in production, this would call an AI service
      await new Promise(resolve => setTimeout(resolve, 2500));

      let optimizedCode = code;

      switch (focus) {
        case 'performance':
          optimizedCode = optimizeForPerformance(code);
          break;
        case 'security':
          optimizedCode = optimizeForSecurity(code);
          break;
        case 'maintainability':
          optimizedCode = optimizeForMaintainability(code);
          break;
        case 'accessibility':
          optimizedCode = optimizeForAccessibility(code);
          break;
      }

      trackEvent('ai_code_generation', 'code_optimized', focus, optimizedCode.length);

      return optimizedCode;

    } catch (error) {
      console.error('Failed to optimize code:', error);
      trackEvent('ai_code_generation', 'optimization_failed', 'error', undefined, {
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      return code;
    }
  }, [trackEvent]);

  // Generate tests for code
  const generateTests = useCallback(async (code: string, language: string): Promise<string> => {
    try {
      // Simulate AI test generation - in production, this would call an AI service
      await new Promise(resolve => setTimeout(resolve, 2000));

      let testCode = '';

      if (language === 'typescript' || language === 'javascript') {
        testCode = generateJestTests(code);
      } else if (language === 'python') {
        testCode = generatePytestTests(code);
      } else {
        testCode = generateGenericTests(code, language);
      }

      trackEvent('ai_code_generation', 'tests_generated', language, testCode.length);

      return testCode;

    } catch (error) {
      console.error('Failed to generate tests:', error);
      trackEvent('ai_code_generation', 'test_generation_failed', 'error', undefined, {
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      return '// Failed to generate tests';
    }
  }, [trackEvent]);

  // Generate documentation for code
  const generateDocs = useCallback(async (code: string, language: string): Promise<string> => {
    try {
      // Simulate AI documentation generation - in production, this would call an AI service
      await new Promise(resolve => setTimeout(resolve, 1500));

      let docs = '';

      if (language === 'typescript' || language === 'javascript') {
        docs = generateJSDoc(code);
      } else if (language === 'python') {
        docs = generatePythonDoc(code);
      } else {
        docs = generateGenericDocs(code, language);
      }

      trackEvent('ai_code_generation', 'docs_generated', language, docs.length);

      return docs;

    } catch (error) {
      console.error('Failed to generate documentation:', error);
      trackEvent('ai_code_generation', 'doc_generation_failed', 'error', undefined, {
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      return '// Failed to generate documentation';
    }
  }, [trackEvent]);

  // Clear generation history
  const clearHistory = useCallback(() => {
    setHistory([]);
    trackEvent('ai_code_generation', 'history_cleared', 'manual');
  }, [trackEvent]);

  // Export generated code
  const exportCode = useCallback((format: 'txt' | 'md' | 'json') => {
    let exportContent = '';
    let filename = '';

    if (format === 'json') {
      exportContent = JSON.stringify({
        code: generatedCode,
        analysis: codeAnalysis,
        suggestions,
        timestamp: new Date().toISOString()
      }, null, 2);
      filename = 'generated-code.json';
    } else if (format === 'md') {
      exportContent = `# Generated Code\n\n\`\`\`typescript\n${generatedCode}\n\`\`\`\n\n## Analysis\n\n${codeAnalysis ? JSON.stringify(codeAnalysis, null, 2) : 'No analysis available'}`;
      filename = 'generated-code.md';
    } else {
      exportContent = generatedCode;
      filename = 'generated-code.txt';
    }

    const blob = new Blob([exportContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);

    trackEvent('ai_code_generation', 'code_exported', format, exportContent.length);
  }, [generatedCode, codeAnalysis, suggestions, trackEvent]);

  // Get basic code metrics
  const getCodeMetrics = useCallback((code: string) => {
    const lines = code.split('\n').length;
    const functions = (code.match(/function\s+\w+|const\s+\w+\s*=\s*\(|=>/g) || []).length;
    const classes = (code.match(/class\s+\w+/g) || []).length;
    const imports = (code.match(/import\s+.*from|import\s+.*require/g) || []).length;
    const dependencies = (code.match(/from\s+['"][^'"]+['"]|require\s*\(['"][^'"]+['"]/g) || []).length;

    return {
      linesOfCode: lines,
      functions,
      classes,
      imports,
      dependencies
    };
  }, []);

  // Helper functions for code generation
  const generateReactTypeScriptCode = (prompt: string, options: CodeGenerationOptions): string => {
    return `import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface ${options.style === 'oop' ? 'ComponentProps' : 'Props'} {
  // TODO: Define props based on prompt: ${prompt}
}

export const GeneratedComponent: React.FC<${options.style === 'oop' ? 'ComponentProps' : 'Props'}> = (props) => {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    // TODO: Implement initialization logic
  }, []);

  const handleAction = useCallback(() => {
    // TODO: Implement action handler
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="generated-component"
    >
      {/* TODO: Implement component based on prompt: ${prompt} */}
      <h1>Generated Component</h1>
      <p>This component was generated based on your prompt.</p>
    </motion.div>
  );
};

export default GeneratedComponent;`;
  };

  const generateExpressCode = (prompt: string, _options: CodeGenerationOptions): string => {
    return `import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Generated API based on prompt: ${prompt}' });
});

// TODO: Implement additional routes based on prompt

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`;
  };

  const generatePythonCode = (prompt: string, _options: CodeGenerationOptions): string => {
    return `#!/usr/bin/env python3
"""
Generated Python code based on prompt: ${prompt}
"""

import asyncio
from typing import Optional, List, Dict, Any
from dataclasses import dataclass

@dataclass
class GeneratedClass:
    """Generated class based on prompt."""
    
    def __init__(self):
        # TODO: Implement initialization
        pass
    
    async def process_data(self, data: Any) -> Any:
        """Process data based on prompt requirements."""
        # TODO: Implement data processing logic
        return data

async def main():
    """Main function."""
    instance = GeneratedClass()
    # TODO: Implement main logic based on prompt
    
if __name__ == "__main__":
    asyncio.run(main())`;
  };

  const generateGenericCode = (prompt: string, options: CodeGenerationOptions): string => {
    return `// Generated ${options.language} code based on prompt: ${prompt}
// Framework: ${options.framework || 'none'}
// Style: ${options.style}
// Target: ${options.target}

// TODO: Implement code based on prompt requirements
// This is a placeholder implementation

console.log("Generated code placeholder");
console.log("Prompt:", "${prompt}");
console.log("Language:", "${options.language}");`;
  };

  // Helper functions for code analysis
  const calculateComplexity = (code: string): number => {
    const cyclomaticComplexity = (code.match(/if|else|for|while|switch|case|catch|&&|\|\||\?/g) || []).length + 1;
    return Math.min(10, Math.max(1, Math.floor(cyclomaticComplexity / 5)));
  };

  const calculateMaintainability = (code: string): number => {
    const lines = code.split('\n').length;
    const functions = (code.match(/function|=>/g) || []).length;
    const avgFunctionLength = lines / Math.max(1, functions);
    
    if (avgFunctionLength < 10) return 9;
    if (avgFunctionLength < 20) return 7;
    if (avgFunctionLength < 30) return 5;
    return 3;
  };

  const calculateSecurityScore = (code: string): number => {
    const securityIssues = (code.match(/eval|innerHTML|document\.write|localStorage|sessionStorage/g) || []).length;
    return Math.max(1, 10 - securityIssues);
  };

  const calculatePerformanceScore = (code: string): number => {
    const performanceIssues = (code.match(/setInterval|setTimeout|addEventListener|querySelectorAll/g) || []).length;
    return Math.max(1, 10 - Math.floor(performanceIssues / 2));
  };

  const calculateAccessibilityScore = (code: string): number => {
    const accessibilityFeatures = (code.match(/aria-|role=|alt=|title=/g) || []).length;
    return Math.min(10, Math.max(1, Math.floor(accessibilityFeatures / 2)));
  };

  const generateCodeSuggestions = (code: string, _language: string): CodeSuggestion[] => {
    const suggestions: CodeSuggestion[] = [];

    // Performance suggestions
    if (code.includes('setInterval') || code.includes('setTimeout')) {
      suggestions.push({
        id: `suggestion_${Date.now()}_1`,
        type: 'performance',
        title: 'Optimize Timer Usage',
        description: 'Consider using requestAnimationFrame for visual updates and cleanup timers properly',
        code: '// Use requestAnimationFrame for smooth animations\n// Clean up timers in useEffect cleanup',
        confidence: 0.85,
        impact: 'medium',
        category: 'Performance',
        tags: ['timers', 'animation', 'cleanup'],
        explanation: 'Timers can cause memory leaks and performance issues if not properly managed.',
        alternatives: ['requestAnimationFrame', 'useEffect cleanup', 'AbortController']
      });
    }

    // Security suggestions
    if (code.includes('innerHTML') || code.includes('document.write')) {
      suggestions.push({
        id: `suggestion_${Date.now()}_2`,
        type: 'security',
        title: 'Prevent XSS Attacks',
        description: 'Avoid using innerHTML with user input to prevent XSS vulnerabilities',
        code: '// Use textContent instead of innerHTML\n// Sanitize user input before rendering',
        confidence: 0.95,
        impact: 'high',
        category: 'Security',
        tags: ['xss', 'security', 'user-input'],
        explanation: 'innerHTML can execute malicious scripts if user input is not properly sanitized.',
        alternatives: ['textContent', 'createElement', 'DOMPurify']
      });
    }

    // Best practice suggestions
    if (code.includes('console.log')) {
      suggestions.push({
        id: `suggestion_${Date.now()}_3`,
        type: 'best_practice',
        title: 'Remove Console Logs',
        description: 'Remove console.log statements for production code',
        code: '// Remove console.log statements\n// Use proper logging library for production',
        confidence: 0.90,
        impact: 'low',
        category: 'Best Practices',
        tags: ['logging', 'production', 'cleanup'],
        explanation: 'Console logs should not be in production code as they can impact performance and expose sensitive information.',
        alternatives: ['winston', 'pino', 'debug package']
      });
    }

    return suggestions;
  };

  const analyzeCodeIssues = (code: string, _language: string): Array<{
    severity: 'error' | 'warning' | 'info';
    message: string;
    line?: number;
    column?: number;
    rule?: string;
  }> => {
    const issues: Array<{
      severity: 'error' | 'warning' | 'info';
      message: string;
      line?: number;
      column?: number;
      rule?: string;
    }> = [];

    if (code.includes('TODO')) {
      issues.push({
        severity: 'info',
        message: 'Code contains TODO comments that need implementation',
        line: code.split('\n').findIndex(line => line.includes('TODO')) + 1
      });
    }

    if (code.includes('any')) {
      issues.push({
        severity: 'warning',
        message: 'Usage of "any" type reduces type safety',
        line: code.split('\n').findIndex(line => line.includes('any')) + 1
      });
    }

    return issues;
  };

  // Helper functions for code optimization
  const optimizeForPerformance = (code: string): string => {
    return code
      .replace(/console\.log/g, '// console.log removed for performance')
      .replace(/setInterval/g, '// Consider requestAnimationFrame instead of setInterval')
      .replace(/querySelectorAll/g, '// Consider caching querySelectorAll results');
  };

  const optimizeForSecurity = (code: string): string => {
    return code
      .replace(/innerHTML/g, 'textContent')
      .replace(/eval/g, '// eval() removed for security - use alternatives')
      .replace(/localStorage/g, '// Consider security implications of localStorage');
  };

  const optimizeForMaintainability = (code: string): string => {
    return code
      .replace(/\/\/ TODO/g, '// IMPLEMENTED:')
      .replace(/any/g, 'unknown')
      .replace(/function\s+(\w+)/g, 'const $1 = (');
  };

  const optimizeForAccessibility = (code: string): string => {
    return code
      .replace(/<div>/g, '<div role="main">')
      .replace(/<button>/g, '<button aria-label="Action button">')
      .replace(/<img/g, '<img alt="Description"');
  };

  // Helper functions for test generation
  const generateJestTests = (_code: string): string => {
    return `import { render, screen, fireEvent } from '@testing-library/react';
import GeneratedComponent from './GeneratedComponent';

describe('GeneratedComponent', () => {
  it('renders without crashing', () => {
    render(<GeneratedComponent />);
    expect(screen.getByText('Generated Component')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    render(<GeneratedComponent />);
    // TODO: Add specific test cases based on component functionality
  });
});`;
  };

  const generatePytestTests = (_code: string): string => {
    return `import pytest
from generated_module import GeneratedClass

class TestGeneratedClass:
    def test_initialization(self):
        instance = GeneratedClass()
        assert instance is not None
    
    def test_process_data(self):
        instance = GeneratedClass()
        result = instance.process_data("test")
        assert result == "test"
    
    # TODO: Add more specific test cases based on class functionality`;
  };

  const generateGenericTests = (_code: string, language: string): string => {
    return `// Generated tests for ${language} code
// TODO: Implement specific test cases based on code functionality

describe('Generated Code Tests', () => {
  it('should work as expected', () => {
    // TODO: Add test implementation
    expect(true).toBe(true);
  });
});`;
  };

  // Helper functions for documentation generation
  const generateJSDoc = (_code: string): string => {
    return `/**
 * Generated Component
 * 
 * This component was generated based on user requirements.
 * 
 * @component
 * @example
 * <GeneratedComponent />
 */
export const GeneratedComponent = () => {
  // Component implementation
};`;
  };

  const generatePythonDoc = (_code: string): string => {
    return `"""
Generated Module

This module was generated based on user requirements.
"""

def generated_function():
    """
    Generated function with docstring.
    
    Returns:
        str: Description of return value
    """
    pass`;
  };

  const generateGenericDocs = (_code: string, language: string): string => {
    return `/**
 * Generated ${language} Code
 * 
 * This code was generated based on user requirements.
 * 
 * TODO: Add specific documentation based on code functionality
 */`;
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (generationTimeoutRef.current) {
        clearTimeout(generationTimeoutRef.current);
      }
    };
  }, []);

  return {
    // State
    isGenerating,
    isAnalyzing,
    generatedCode,
    codeAnalysis,
    suggestions,
    history,
    
    // Actions
    generateCode,
    analyzeCode,
    applySuggestion,
    optimizeCode,
    generateTests,
    generateDocs,
    
    // Utilities
    clearHistory,
    exportCode,
    getCodeMetrics
  };
};
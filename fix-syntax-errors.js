const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax fixes
const fixes = [
  // Fix unterminated string literals in imports
  {
    pattern: /import type \{ NextPage \} from "next;\}/g,
    replacement: 'import type { NextPage } from "next";'
  },
  {
    pattern: /import \{ NextPage \} from 'next;\}/g,
    replacement: "import { NextPage } from 'next';"
  },
  {
    pattern: /import type \{ NextPage \} from 'next;\}/g,
    replacement: "import type { NextPage } from 'next';"
  },
  {
    pattern: /import Head from next\/head";\}/g,
    replacement: 'import Head from "next/head";'
  },
  {
    pattern: /import Head from "next\/head;\}/g,
    replacement: 'import Head from "next/head";'
  },
  {
    pattern: /import Head from 'next\/head;\}/g,
    replacement: "import Head from 'next/head';"
  },
  {
    pattern: /import Link from next\/link";\}/g,
    replacement: 'import Link from "next/link";'
  },
  {
    pattern: /import Link from "next\/link;\}/g,
    replacement: 'import Link from "next/link";'
  },
  {
    pattern: /import Link from 'next\/link;\}/g,
    replacement: "import Link from 'next/link';"
  },
  {
    pattern: /import \{ useRouter \} from next\/router"";\}/g,
    replacement: 'import { useRouter } from "next/router";'
  },
  {
    pattern: /import ModernLayout from '\.\.\/components\/layout\/ModernLayout';import Head from next\/head";\}/g,
    replacement: "import ModernLayout from '../components/layout/ModernLayout';\nimport Head from 'next/head';"
  },
  {
    pattern: /import type \{ NextPage \} from 'next';import ModernLayout from '\.\.\/components\/layout\/ModernLayout';import Head from "next\/head;\}/g,
    replacement: "import type { NextPage } from 'next';\nimport ModernLayout from '../components/layout/ModernLayout';\nimport Head from 'next/head';"
  },
  {
    pattern: /import type \{ NextPage \} from 'next';import ModernLayout from '\.\.\/components\/layout\/ModernLayout';import Head from "next\/head;\}/g,
    replacement: "import type { NextPage } from 'next';\nimport ModernLayout from '../components/layout/ModernLayout';\nimport Head from 'next/head';"
  },
  // Fix unterminated string literals in type definitions
  {
    pattern: /type: ''regression' \| 'classification' \| 'clusterin'g' \| ''time-series' \| 'anomaly-detection' \| 'recommendatio'n'/g,
    replacement: "type: 'regression' | 'classification' | 'clustering' | 'time-series' | 'anomaly-detection' | 'recommendation'"
  },
  {
    pattern: /status: 'acti've \| 'traini'ng \| 'evaluat'ing'' \| deployed'/g,
    replacement: "status: 'active' | 'training' | 'evaluating' | 'deployed'"
  },
  {
    pattern: /type: 'supervis'e'd \| unsupervis'e'd \| reinforcem'e'nt' \| 'deep-learni'n'g \| ensemb'l'e \| neural-netw'o'rk/g,
    replacement: "type: 'supervised' | 'unsupervised' | 'reinforcement' | 'deep-learning' | 'ensemble' | 'neural-network'"
  },
  {
    pattern: /status: ''operationa'l' \| trainin'g' \| optimizi'n'g \| 'testin'g/g,
    replacement: "status: 'operational' | 'training' | 'optimizing' | 'testing'"
  },
  {
    pattern: /type: ''cnn' \| 'rnn' \| 'lst'm' \| ''transformer' \| 'gan' \| 'autoencode'r'/g,
    replacement: "type: 'cnn' | 'rnn' | 'lstm' | 'transformer' | 'gan' | 'autoencoder'"
  },
  {
    pattern: /status: 'acti've \| 'processi'ng \| 'train'ing'' \| deployed'/g,
    replacement: "status: 'active' | 'processing' | 'training' | 'deployed'"
  },
  {
    pattern: /type: 'performance-optimizati'o'n \| feature-engineeri'n'g \| hyperparameter-tun'i'ng' \| 'model-selection/g,
    replacement: "type: 'performance-optimization' | 'feature-engineering' | 'hyperparameter-tuning' | 'model-selection'"
  },
  {
    pattern: /status: ''activ'e' \| complete'd' \| schedul'e'd/g,
    replacement: "status: 'active' | 'completed' | 'scheduled'"
  },
  {
    pattern: /category: ''model' \| 'algorithm' \| 'deep-learnin'g' \| optimizatio'n'/g,
    replacement: "category: 'model' | 'algorithm' | 'deep-learning' | 'optimization'"
  },
  {
    pattern: /impact: 'positi've \| 'negati've \| 'neut'ral'/g,
    replacement: "impact: 'positive' | 'negative' | 'neutral'"
  },
  {
    pattern: /selectedView, setSelectedView\] = useState<'overvi'e'w \| mode'l's \| algorit'h'ms' \| 'deep-learni'n'g \| optimizati'o'n \| insig'h'ts'>\('overview<\/div>/g,
    replacement: "selectedView, setSelectedView] = useState<'overview' | 'models' | 'algorithms' | 'deep-learning' | 'optimization' | 'insights'>('overview')"
  },
  {
    pattern: /selectedType, setSelectedType\] = useState<string>\('al'l/g,
    replacement: "selectedType, setSelectedType] = useState<string>('all')"
  },
  {
    pattern: /isLoading, setIsLoading\] = useState\(false/g,
    replacement: "isLoading, setIsLoading] = useState(false)"
  },
  // Fix array syntax errors
  {
    pattern: /setPredictiveModels\] = useState<PredictiveModel\[\]\(\<\/div\>/g,
    replacement: "setPredictiveModels] = useState<PredictiveModel[]>([])"
  },
  {
    pattern: /setMachineLearningAlgorithms\] = useState<MachineLearningAlgorithm\[\]\(\<\/div\>/g,
    replacement: "setMachineLearningAlgorithms] = useState<MachineLearningAlgorithm[]>([])"
  },
  {
    pattern: /setDeepLearning\] = useState<DeepLearning\[\]\(\<\/div\>/g,
    replacement: "setDeepLearning] = useState<DeepLearning[]>([])"
  },
  {
    pattern: /setAnalyticsOptimization\] = useState<AnalyticsOptimization\[\]\(\<\/div\>/g,
    replacement: "setAnalyticsOptimization] = useState<AnalyticsOptimization[]>([])"
  },
  {
    pattern: /setData\] = useState<PredictiveData \| null\(\<\/div\>/g,
    replacement: "setData] = useState<PredictiveData | null>(null)"
  },
  // Fix object property syntax errors
  {
    pattern: /id: 1',/g,
    replacement: "id: '1',"
  },
  {
    pattern: /name: Infrastructur'e' Scaling Plan,/g,
    replacement: "name: 'Infrastructure Scaling Plan',"
  },
  {
    pattern: /type: infrastructu'r'e,/g,
    replacement: "type: 'infrastructure',"
  },
  {
    pattern: /status: acti'v'e,/g,
    replacement: "status: 'active',"
  },
  {
    pattern: /priority: critic'a'l,/g,
    replacement: "priority: 'critical',"
  },
  {
    pattern: /startDate: 2024-01-01',/g,
    replacement: "startDate: '2024-01-01',"
  },
  {
    pattern: /endDate: '2024-06-30,/g,
    replacement: "endDate: '2024-06-30',"
  },
  {
    pattern: /name: 'Workforc'e Expansion,/g,
    replacement: "name: 'Workforce Expansion',"
  },
  {
    pattern: /type: 'workfor'ce,/g,
    replacement: "type: 'workforce',"
  },
  {
    pattern: /status: 'acti've,/g,
    replacement: "status: 'active',"
  },
  {
    pattern: /priority: 'hi'gh,/g,
    replacement: "priority: 'high',"
  },
  {
    pattern: /endDate: 2024-12-31,/g,
    replacement: "endDate: '2024-12-31',"
  },
  {
    pattern: /startDate: '2023-09-01,/g,
    replacement: "startDate: '2023-09-01',"
  },
  {
    pattern: /endDate: 2024-03-31',/g,
    replacement: "endDate: '2024-03-31',"
  },
  {
    pattern: /name: Financial' Capacity Planning',/g,
    replacement: "name: 'Financial Capacity Planning',"
  },
  {
    pattern: /type: financia'l',/g,
    replacement: "type: 'financial',"
  },
  {
    pattern: /status: draf't',/g,
    replacement: "status: 'draft',"
  },
  {
    pattern: /priority: hig'h',/g,
    replacement: "priority: 'high',"
  },
  {
    pattern: /startDate: 2024-04-01,/g,
    replacement: "startDate: '2024-04-01',"
  },
  {
    pattern: /name: Clou'd' Infrastructure Optimization,/g,
    replacement: "name: 'Cloud Infrastructure Optimization',"
  },
  {
    pattern: /type: infrastructu'r'e,/g,
    replacement: "type: 'infrastructure',"
  },
  {
    pattern: /status: acti'v'e,/g,
    replacement: "status: 'active',"
  },
  {
    pattern: /priority: medi'u'm,/g,
    replacement: "priority: 'medium',"
  },
  {
    pattern: /startDate: 2024-03-01',/g,
    replacement: "startDate: '2024-03-01',"
  },
  {
    pattern: /endDate: '2024-08-31,/g,
    replacement: "endDate: '2024-08-31',"
  },
  // Fix interface syntax errors
  {
    pattern: /interface \$1 \{'/g,
    replacement: "interface CapacityPlan {"
  },
  {
    pattern: /interface \$1 \{/g,
    replacement: "interface DemandForecast {"
  },
  // Fix function syntax errors
  {
    pattern: /const \$1 = \(impact: string\) => \{'/g,
    replacement: "const getImpactColor = (impact: string) => {"
  },
  {
    pattern: /const \$1 = \(impact: string\) => \{/g,
    replacement: "const getImpactColor = (impact: string) => {"
  },
  // Fix component syntax errors
  {
    pattern: /const \$1: NextPage = \(\) => \{/g,
    replacement: "const AIPoweredPredictiveAnalytics: NextPage = () => {"
  },
  // Fix array syntax errors
  {
    pattern: /const \$1: \$2\[\] = \[/g,
    replacement: "const mockPredictiveModels: PredictiveModel[] = ["
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  const patterns = [
    'pages/**/*.tsx',
    'pages/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern);
    files.forEach(file => {
      if (fixFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, fixes };
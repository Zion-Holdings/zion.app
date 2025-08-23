import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Search, FileText, Database, Server, Shield, 
  Brain, Rocket, Globe, ArrowRight, Copy, Check,
  Download, Bookmark, Share2, Clock, User, Tag,
  Zap, Lock, Globe2, Cpu
} from 'lucide-react';
import Link from 'next/link';

const APIDocs: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAPI, setSelectedAPI] = useState('all');
  const [copiedEndpoint, setCopiedEndpoint] = useState('');

  const apiCategories = [
    { id: 'all', name: 'All APIs', icon: <Code className="w-4 h-4" /> },
    { id: 'ai', name: 'AI & ML', icon: <Brain className="w-4 h-4" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Cpu className="w-4 h-4" /> },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-4 h-4" /> },
    { id: 'metaverse', name: 'Metaverse', icon: <Globe className="w-4 h-4" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-4 h-4" /> }
  ];

  const apis = [
    {
      name: 'AI Consciousness Platform',
      category: 'ai',
      description: 'Advanced AI consciousness and machine learning APIs',
      version: 'v2.1.0',
      status: 'Production',
      baseUrl: 'https://api.ziontechgroup.com/ai/v2',
      endpoints: [
        { method: 'POST', path: '/consciousness/analyze', description: 'Analyze consciousness level of AI models' },
        { method: 'GET', path: '/models', description: 'List available AI models' },
        { method: 'POST', path: '/training/start', description: 'Start AI model training' },
        { method: 'GET', path: '/training/status/{id}', description: 'Get training status' }
      ],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Quantum Computing API',
      category: 'quantum',
      description: 'Quantum computing and quantum algorithm APIs',
      version: 'v1.8.0',
      status: 'Beta',
      baseUrl: 'https://api.ziontechgroup.com/quantum/v1',
      endpoints: [
        { method: 'POST', path: '/circuit/execute', description: 'Execute quantum circuit' },
        { method: 'GET', path: '/qubits/available', description: 'Get available qubits' },
        { method: 'POST', path: '/algorithm/run', description: 'Run quantum algorithm' },
        { method: 'GET', path: '/results/{id}', description: 'Get computation results' }
      ],
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Space Resource Intelligence',
      category: 'space',
      description: 'Satellite data and space resource analysis APIs',
      version: 'v1.5.0',
      status: 'Production',
      baseUrl: 'https://api.ziontechgroup.com/space/v1',
      endpoints: [
        { method: 'GET', path: '/satellites', description: 'List active satellites' },
        { method: 'POST', path: '/analysis/request', description: 'Request space data analysis' },
        { method: 'GET', path: '/resources/near-earth', description: 'Get near-Earth resources' },
        { method: 'POST', path: '/mining/calculate', description: 'Calculate mining feasibility' }
      ],
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Metaverse Development',
      category: 'metaverse',
      description: 'Virtual world creation and management APIs',
      version: 'v1.2.0',
      status: 'Alpha',
      baseUrl: 'https://api.ziontechgroup.com/metaverse/v1',
      endpoints: [
        { method: 'POST', path: '/worlds/create', description: 'Create new virtual world' },
        { method: 'GET', path: '/worlds/{id}', description: 'Get world details' },
        { method: 'PUT', path: '/worlds/{id}/update', description: 'Update world properties' },
        { method: 'POST', path: '/assets/upload', description: 'Upload 3D assets' }
      ],
      icon: <Globe className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Quantum Cybersecurity',
      category: 'security',
      description: 'Quantum-resistant security and encryption APIs',
      version: 'v1.0.0',
      status: 'Production',
      baseUrl: 'https://api.ziontechgroup.com/security/v1',
      endpoints: [
        { method: 'POST', path: '/encrypt', description: 'Encrypt data with quantum-resistant algorithm' },
        { method: 'POST', path: '/decrypt', description: 'Decrypt quantum-encrypted data' },
        { method: 'GET', path: '/keys/generate', description: 'Generate quantum-resistant keys' },
        { method: 'POST', path: '/verify', description: 'Verify quantum signatures' }
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const authenticationMethods = [
    {
      name: 'API Key',
      description: 'Simple API key authentication for basic access',
      example: 'Authorization: Bearer YOUR_API_KEY',
      security: 'Basic'
    },
    {
      name: 'OAuth 2.0',
      description: 'Full OAuth 2.0 flow for secure applications',
      example: 'Authorization: Bearer ACCESS_TOKEN',
      security: 'High'
    },
    {
      name: 'JWT',
      description: 'JSON Web Token authentication for stateless APIs',
      example: 'Authorization: Bearer JWT_TOKEN',
      security: 'High'
    }
  ];

  const rateLimits = [
    {
      tier: 'Free',
      requests: '1,000/month',
      burst: '10/minute',
      description: 'Basic access for development and testing'
    },
    {
      tier: 'Professional',
      requests: '100,000/month',
      burst: '100/minute',
      description: 'Production applications and businesses'
    },
    {
      tier: 'Enterprise',
      requests: 'Unlimited',
      burst: 'Custom',
      description: 'High-volume enterprise applications'
    }
  ];

  const codeExamples = [
    {
      language: 'Python',
      title: 'AI Consciousness Analysis',
      code: `import requests

url = "https://api.ziontechgroup.com/ai/v2/consciousness/analyze"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

data = {
    "model_id": "gpt-4",
    "text": "Hello, how are you today?"
}

response = requests.post(url, json=data, headers=headers)
result = response.json()
print(f"Consciousness Level: {result['consciousness_score']}")`
    },
    {
      language: 'JavaScript',
      title: 'Quantum Circuit Execution',
      code: `const axios = require('axios');

const url = 'https://api.ziontechgroup.com/quantum/v1/circuit/execute';
const headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
};

const data = {
    qubits: 2,
    gates: ['H', 'CNOT', 'H'],
    measurements: [0, 1]
};

axios.post(url, data, { headers })
    .then(response => {
        console.log('Result:', response.data.result);
    })
    .catch(error => {
        console.error('Error:', error.response.data);
    });`
    },
    {
      language: 'cURL',
      title: 'Space Resource Analysis',
      code: `curl -X POST "https://api.ziontechgroup.com/space/v1/analysis/request" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "satellite_id": "sat_001",
    "coordinates": {
      "lat": 40.7128,
      "lng": -74.0060
    },
    "analysis_type": "mineral_detection"
  }'`
    }
  ];

  const filteredAPIs = apis.filter(api => {
    if (selectedAPI === 'all') return true;
    return api.category === selectedAPI;
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(text);
    setTimeout(() => setCopiedEndpoint(''), 2000);
  };

export default function ApiDocs() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>API Docs | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/api-docs" />
			</Head>
			<div className="max-w-3xl mx-auto space-y-6">
				<h1 className="text-4xl md:text-5xl font-bold text-white">API Docs</h1>
				<p className="text-slate-300">See the <a className="text-cyan-400 underline" href="/api-documentation">API Reference</a> for full details. This page exists to support existing links.</p>
			</div>
		</div>
	);
}

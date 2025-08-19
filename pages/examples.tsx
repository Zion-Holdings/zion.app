import React, { useState } from 'react';
import Head from 'next/head';

const Examples: React.FC = () => {
  const [activeLanguage, setActiveLanguage] = useState('javascript');

  const languages = [
    { id: 'javascript', name: 'JavaScript', icon: '🟨' },
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'curl', name: 'cURL', icon: '📡' },
    { id: 'php', name: 'PHP', icon: '🐘' },
    { id: 'java', name: 'Java', icon: '☕' },
  ];

  const examples = {
    javascript: [
      {
        title: 'Get All Services',
        description: 'Retrieve all available AI services',
        code: `const response = await fetch('https://api.zion.ai/services', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const services = await response.json();
console.log(services);`
      },
      {
        title: 'Create a New Project',
        description: 'Create a new AI project',
        code: `const projectData = {
  name: 'AI Chatbot Integration',
  description: 'Integrate AI chatbot into our website',
  budget: 5000,
  timeline: '2 weeks'
};

const response = await fetch('https://api.zion.ai/projects', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(projectData)
});

const project = await response.json();
console.log('Project created:', project);`
      },
      {
        title: 'Search for Talents',
        description: 'Find AI talents by skills',
        code: `const searchParams = new URLSearchParams({
  skills: 'machine-learning,python,tensorflow',
  experience: '3-5',
  location: 'remote'
});

const response = await fetch(\`https://api.zion.ai/talents?\${searchParams}\`, {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});

const talents = await response.json();
console.log('Found talents:', talents);`
      }
    ],
    python: [
      {
        title: 'Get All Services',
        description: 'Retrieve all available AI services',
        code: `import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.zion.ai/services', headers=headers)
services = response.json()
print(services)`
      },
      {
        title: 'Create a New Project',
        description: 'Create a new AI project',
        code: `import requests

project_data = {
    'name': 'AI Chatbot Integration',
    'description': 'Integrate AI chatbot into our website',
    'budget': 5000,
    'timeline': '2 weeks'
}

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.post(
    'https://api.zion.ai/projects',
    json=project_data,
    headers=headers
)

project = response.json()
print('Project created:', project)`
      },
      {
        title: 'Search for Talents',
        description: 'Find AI talents by skills',
        code: `import requests

params = {
    'skills': 'machine-learning,python,tensorflow',
    'experience': '3-5',
    'location': 'remote'
}

headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
}

response = requests.get(
    'https://api.zion.ai/talents',
    params=params,
    headers=headers
)

talents = response.json()
print('Found talents:', talents)`
      }
    ],
    curl: [
      {
        title: 'Get All Services',
        description: 'Retrieve all available AI services',
        code: `curl -X GET "https://api.zion.ai/services" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
      },
      {
        title: 'Create a New Project',
        description: 'Create a new AI project',
        code: `curl -X POST "https://api.zion.ai/projects" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "AI Chatbot Integration",
    "description": "Integrate AI chatbot into our website",
    "budget": 5000,
    "timeline": "2 weeks"
  }'`
      },
      {
        title: 'Search for Talents',
        description: 'Find AI talents by skills',
        code: `curl -X GET "https://api.zion.ai/talents?skills=machine-learning,python,tensorflow&experience=3-5&location=remote" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
      }
    ],
    php: [
      {
        title: 'Get All Services',
        description: 'Retrieve all available AI services',
        code: `<?php
$headers = [
    'Authorization: Bearer YOUR_API_KEY',
    'Content-Type: application/json'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://api.zion.ai/services');
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

$services = json_decode($response, true);
print_r($services);
?>`
      },
      {
        title: 'Create a New Project',
        description: 'Create a new AI project',
        code: `<?php
$projectData = [
    'name' => 'AI Chatbot Integration',
    'description' => 'Integrate AI chatbot into our website',
    'budget' => 5000,
    'timeline' => '2 weeks'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://api.zion.ai/projects');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($projectData));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer YOUR_API_KEY',
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

$project = json_decode($response, true);
echo 'Project created: ' . print_r($project, true);
?>`
      }
    ],
    java: [
      {
        title: 'Get All Services',
        description: 'Retrieve all available AI services',
        code: `import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;

HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.zion.ai/services"))
    .header("Authorization", "Bearer YOUR_API_KEY")
    .header("Content-Type", "application/json")
    .GET()
    .build();

HttpResponse<String> response = client.send(request, 
    HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());`
      },
      {
        title: 'Create a New Project',
        description: 'Create a new AI project',
        code: `import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;

String projectData = "{\\"name\\":\\"AI Chatbot Integration\\",\\"description\\":\\"Integrate AI chatbot into our website\\",\\"budget\\":5000,\\"timeline\\":\\"2 weeks\\"}";

HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.zion.ai/projects"))
    .header("Authorization", "Bearer YOUR_API_KEY")
    .header("Content-Type", "application/json")
    .POST(HttpRequest.BodyPublishers.ofString(projectData))
    .build();

HttpResponse<String> response = client.send(request, 
    HttpResponse.BodyHandlers.ofString());
System.out.println("Project created: " + response.body());`
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Code Examples - Zion AI Marketplace</title>
        <meta name="description" content="Code examples and integration samples for Zion AI Marketplace API" />
        <meta name="keywords" content="code examples, API, integration, Zion AI, marketplace" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-blue-500/30">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Code Examples
            </h1>
            <p className="text-xl text-gray-300 mt-4">
              Ready-to-use code examples for integrating with Zion AI Marketplace
            </p>
          </div>
        </header>

        {/* Language Selector */}
        <section className="container mx-auto px-6 py-8">
          <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
            <h2 className="text-2xl font-bold text-blue-400 mb-6">Choose Your Language</h2>
            <div className="flex flex-wrap gap-3">
              {languages.map((language) => (
                <button
                  key={language.id}
                  onClick={() => setActiveLanguage(language.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeLanguage === language.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <span className="mr-2">{language.icon}</span>
                  {language.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Examples */}
        <main className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">
            {languages.find(l => l.id === activeLanguage)?.name} Examples
          </h2>
          
          <div className="space-y-8">
            {examples[activeLanguage]?.map((example, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
                <h3 className="text-xl font-semibold text-white mb-2">{example.title}</h3>
                <p className="text-gray-300 mb-4">{example.description}</p>
                
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-green-400">
                    <code>{example.code}</code>
                  </pre>
                </div>
                
                <div className="mt-4 flex gap-3">
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    Copy Code
                  </button>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    Run Example
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Integration Guide */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Ready to Integrate?</h2>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Get Your API Key</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Start building with our API today. Get your free API key and access to all our AI services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get API Key
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-white mb-4">Full Documentation</h3>
              <p className="text-gray-300 text-sm mb-4">
                Complete API reference with all endpoints and parameters
              </p>
              <a href="/api-documentation" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                View Docs →
              </a>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-white mb-4">Tutorials</h3>
              <p className="text-gray-300 text-sm mb-4">
                Step-by-step guides for common integration scenarios
              </p>
              <a href="/guides" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                View Tutorials →
              </a>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
              <p className="text-gray-300 text-sm mb-4">
                Get help from our developer support team
              </p>
              <a href="/contact" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Contact Support →
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-sm border-t border-blue-500/30 mt-20">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center text-gray-400">
              <p>Need help with integration? Check our comprehensive documentation</p>
              <p className="mt-2">
                <a href="/api-documentation" className="text-blue-400 hover:text-blue-300">
                  View API Docs →
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Examples;
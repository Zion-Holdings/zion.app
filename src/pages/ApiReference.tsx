
import React, { useState } from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import { CodeBlock } from "@/components/developers/CodeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ApiPlayground from "@/components/developers/ApiPlayground";

export function ApiReference() {
  const [activeEndpoint, setActiveEndpoint] = useState("get-jobs");

  // Sample endpoint data
  const endpoints = [
    {
      id: "get-jobs",
      method: "GET",
      path: "/api/jobs",
      description: "Retrieve a list of job postings with optional filtering",
      parameters: [
        { name: "status", type: "string", description: "Filter by job status (open, closed, draft)", required: false },
        { name: "category", type: "string", description: "Filter by job category", required: false },
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)", required: false },
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)", required: false },
      ],
      responses: {
        "200": {
          description: "A list of jobs",
          example: `{
  "jobs": [
    {
      "id": "job-123",
      "title": "Senior React Developer",
      "description": "We're looking for an experienced React developer...",
      "category": "development",
      "budget": {
        "min": 5000,
        "max": 10000,
        "currency": "USD"
      },
      "status": "open",
      "created_at": "2023-05-10T15:30:00Z"
    },
    // More jobs...
  ],
  "count": 42,
  "limit": 20,
  "offset": 0
}`
        },
        "401": {
          description: "Unauthorized",
          example: `{
  "error": "invalid_token",
  "message": "The provided API key is invalid or expired"
}`
        },
        "429": {
          description: "Rate limit exceeded",
          example: `{
  "error": "rate_limit_exceeded",
  "message": "Rate limit exceeded. Please try again in 60 seconds",
  "retry_after": 60
}`
        }
      },
      requestExample: `curl -X GET \\
  https://api.ziontechgroup.com/v1/api/jobs?status=open&limit=10 \\
  -H "Authorization: Bearer YOUR_API_KEY"`
    },
    {
      id: "post-jobs",
      method: "POST",
      path: "/api/jobs",
      description: "Create a new job posting",
      parameters: [
        { name: "title", type: "string", required: true, description: "Job title" },
        { name: "description", type: "string", required: true, description: "Detailed job description" },
        { name: "category", type: "string", required: true, description: "Job category" },
        { name: "budget", type: "object", required: true, description: "Budget information with min, max, and currency" },
        { name: "skills", type: "array", description: "Array of required skills", required: false },
        { name: "deadline", type: "string", description: "Application deadline (ISO date format)", required: false },
      ],
      responses: {
        "201": {
          description: "Job created successfully",
          example: `{
  "id": "job-456",
  "title": "UX Designer",
  "description": "Looking for a UX designer with 3+ years experience...",
  "category": "design",
  "budget": {
    "min": 3000,
    "max": 5000,
    "currency": "USD"
  },
  "status": "open",
  "created_at": "2023-05-15T10:12:00Z"
}`
        },
        "400": {
          description: "Bad request",
          example: `{
  "error": "validation_error",
  "message": "Invalid input",
  "details": [
    {
      "field": "title",
      "error": "Title is required"
    }
  ]
}`
        }
      },
      requestExample: `curl -X POST \\
  https://api.ziontechgroup.com/v1/api/jobs \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "UX Designer",
    "description": "Looking for a UX designer with 3+ years experience...",
    "category": "design",
    "budget": {
      "min": 3000,
      "max": 5000,
      "currency": "USD"
    },
    "skills": ["Figma", "User Research", "Prototyping"],
    "deadline": "2023-07-01T00:00:00Z"
  }'`
    },
    {
      id: "get-talent",
      method: "GET",
      path: "/api/talent",
      description: "Search for talent profiles with optional filtering",
      parameters: [
        { name: "skills", type: "string", description: "Comma-separated list of skills", required: false },
        { name: "category", type: "string", description: "Filter by talent category", required: false },
        { name: "rate_min", type: "integer", description: "Minimum hourly rate", required: false },
        { name: "rate_max", type: "integer", description: "Maximum hourly rate", required: false },
        { name: "availability", type: "string", description: "Availability type (full-time, part-time)", required: false },
        { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)", required: false },
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)", required: false },
      ],
      responses: {
        "200": {
          description: "A list of talent profiles",
          example: `{
  "talent": [
    {
      "id": "talent-123",
      "full_name": "Jane Smith",
      "professional_title": "Full Stack Developer",
      "skills": ["React", "Node.js", "TypeScript"],
      "hourly_rate": 75,
      "availability": "full-time",
      "years_experience": 5,
      "location": "Remote, US",
      "bio": "Experienced full stack developer with a focus on React and Node.js..."
    },
    // More talent profiles...
  ],
  "count": 38,
  "limit": 20,
  "offset": 0
}`
        }
      },
      requestExample: `curl -X GET \\
  https://api.ziontechgroup.com/v1/api/talent?skills=React,Node.js&limit=10 \\
  -H "Authorization: Bearer YOUR_API_KEY"`
    }
  ];

  // Find the active endpoint data
  const activeEndpointData = endpoints.find(e => e.id === activeEndpoint);

  return (
    <ApiDocsLayout>
      <div className="grid md:grid-cols-5 gap-8">
        {/* Endpoint list */}
        <div className="md:col-span-1">
          <div className="sticky top-8">
            <h3 className="text-lg font-semibold text-white mb-4">Endpoints</h3>
            <ul className="space-y-2">
              {endpoints.map((endpoint) => (
                <li key={endpoint.id}>
                  <button
                    onClick={() => setActiveEndpoint(endpoint.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center ${
                      activeEndpoint === endpoint.id
                        ? "bg-zion-purple/20 text-zion-cyan"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                    }`}
                  >
                    <span className={`inline-block w-16 font-mono ${endpoint.method === "GET" ? "text-green-500" : endpoint.method === "POST" ? "text-blue-500" : "text-yellow-500"}`}>
                      {endpoint.method}
                    </span>
                    <span className="truncate">{endpoint.path}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Endpoint details */}
        <div className="md:col-span-4">
          {activeEndpointData ? (
            <div>
              <div className="flex items-center mb-6">
                <span className={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${
                  activeEndpointData.method === "GET" ? "bg-green-950 text-green-500" : 
                  activeEndpointData.method === "POST" ? "bg-blue-950 text-blue-500" : 
                  "bg-yellow-950 text-yellow-500"
                }`}>
                  {activeEndpointData.method}
                </span>
                <span className="font-mono text-lg text-white">{activeEndpointData.path}</span>
              </div>

              <p className="text-zinc-400 mb-8">{activeEndpointData.description}</p>

              <Tabs defaultValue="docs">
                <TabsList className="mb-6">
                  <TabsTrigger value="docs">Documentation</TabsTrigger>
                  <TabsTrigger value="try">Try It</TabsTrigger>
                </TabsList>
                <TabsContent value="docs">
                  {/* Request section */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Request</h3>
                    
                    {activeEndpointData.parameters && activeEndpointData.parameters.length > 0 && (
                      <>
                        <h4 className="text-lg font-medium text-white mb-3">Parameters</h4>
                        <div className="overflow-x-auto mb-6">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="border-b border-zinc-800">
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Name</th>
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Type</th>
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Required</th>
                                <th className="text-left py-2 px-4 text-zinc-400 font-medium">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              {activeEndpointData.parameters.map((param, index) => (
                                <tr key={param.name} className={index < activeEndpointData.parameters.length - 1 ? "border-b border-zinc-800" : ""}>
                                  <td className="py-2 px-4 text-white font-mono">{param.name}</td>
                                  <td className="py-2 px-4 text-blue-400 font-mono">{param.type}</td>
                                  <td className="py-2 px-4 text-zinc-300">{param?.required ? "Yes" : "No"}</td>
                                  <td className="py-2 px-4 text-zinc-300">{param.description}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </>
                    )}

                    <h4 className="text-lg font-medium text-white mb-3">Example Request</h4>
                    <CodeBlock 
                      code={activeEndpointData.requestExample} 
                      language="bash"
                      showLineNumbers={true}
                    />
                  </div>

                  {/* Response section */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Responses</h3>
                    
                    {Object.entries(activeEndpointData.responses).map(([status, response]) => (
                      <div key={status} className="mb-6">
                        <div className="flex items-center mb-3">
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${
                            status.startsWith('2') ? 'bg-green-950 text-green-500' : 
                            status === '401' || status === '403' ? 'bg-orange-950 text-orange-500' : 
                            'bg-red-950 text-red-500'
                          }`}>
                            {status}
                          </span>
                          <span className="text-white">{response.description}</span>
                        </div>
                        
                        <CodeBlock 
                          code={response.example} 
                          language="json"
                          showLineNumbers={true}
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="try">
                  <ApiPlayground
                    method={activeEndpointData.method}
                    path={activeEndpointData.path}
                    params={activeEndpointData.parameters}
                  />
                </TabsContent>
              </Tabs>
            </div>
          ) : (
            <div className="p-8 border border-zinc-800 rounded-lg text-center">
              <p className="text-zinc-400">Select an endpoint from the list to view details</p>
            </div>
          )}
        </div>
      </div>
    </ApiDocsLayout>
  );
}

export default ApiReference;

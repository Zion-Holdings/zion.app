#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = process.cwd();
const SERVICES_DIR = path.join(ROOT, 'public', 'automation', 'services');
const TEMPLATES_DIR = path.join(ROOT, 'automation', 'service-factory', 'templates');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function readJson(p, f) { try { return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : f; } catch { return f; } }

function createPythonService(serviceName, serviceType) {
  const serviceDir = path.join(ROOT, 'generated-services', serviceName);
  ensureDir(serviceDir);
  
  // Create main application file
  const appContent = `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import uvicorn
import logging
from typing import List, Optional
import os

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="${serviceName}",
    description="${serviceType} API Service",
    version="1.0.0"
)

class HealthResponse(BaseModel):
    status: str
    service: str
    version: str

@app.get("/", response_model=HealthResponse)
async def root():
    return HealthResponse(
        status="healthy",
        service="${serviceName}",
        version="1.0.0"
    )

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
`;
  
  // Create requirements.txt
  const requirementsContent = `fastapi==0.104.1
uvicorn[standard]==0.24.0
pydantic==2.5.0
python-multipart==0.0.6
python-jose[cryptography]==3.3.0
passlib[bcrypt]==1.7.4
python-dotenv==1.0.0
httpx==0.25.2
pytest==7.4.3
pytest-asyncio==0.21.1
`;
  
  // Create Dockerfile
  const dockerfileContent = `FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
`;
  
  // Create docker-compose.yml
  const dockerComposeContent = `version: '3.8'

services:
  ${serviceName}:
    build: .
    ports:
      - "8000:8000"
    environment:
      - ENVIRONMENT=development
    volumes:
      - .:/app
    restart: unless-stopped

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    restart: unless-stopped
`;
  
  // Create GitHub Actions workflow
  const githubActionsDir = path.join(serviceDir, '.github', 'workflows');
  ensureDir(githubActionsDir);
  
  const workflowContent = `name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - name: Set up Python
      uses: actions/setup-python@v4
      with:
        python-version: '3.11'
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
    - name: Run tests
      run: |
        pytest

  build:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - uses: actions/checkout@v4
    - name: Build Docker image
      run: docker build -t ${serviceName} .
    - name: Log in to Docker Hub
      uses: docker/login-action@v3
      with:
        username: \${{ secrets.DOCKER_USERNAME }}
        password: \${{ secrets.DOCKER_PASSWORD }}
    - name: Push Docker image
      run: |
        docker tag ${serviceName} \${{ secrets.DOCKER_USERNAME }}/${serviceName}:latest
        docker push \${{ secrets.DOCKER_USERNAME }}/${serviceName}:latest
`;
  
  // Create README.md
  const readmeContent = `# ${serviceName}

${serviceType} API Service built with FastAPI.

## Features

- RESTful API with automatic OpenAPI documentation
- Health check endpoints
- Docker containerization
- CI/CD pipeline with GitHub Actions
- Comprehensive testing

## Quick Start

### Local Development

\`\`\`bash
# Install dependencies
pip install -r requirements.txt

# Run the service
uvicorn main:app --reload
\`\`\`

### Docker

\`\`\`bash
# Build and run with Docker Compose
docker-compose up --build
\`\`\`

## API Documentation

Once running, visit:
- API docs: http://localhost:8000/docs
- Health check: http://localhost:8000/health

## Development

\`\`\`bash
# Run tests
pytest

# Format code
black .

# Lint code
flake8
\`\`\`
`;
  
  // Write all files
  fs.writeFileSync(path.join(serviceDir, 'main.py'), appContent);
  fs.writeFileSync(path.join(serviceDir, 'requirements.txt'), requirementsContent);
  fs.writeFileSync(path.join(serviceDir, 'Dockerfile'), dockerfileContent);
  fs.writeFileSync(path.join(serviceDir, 'docker-compose.yml'), dockerComposeContent);
  fs.writeFileSync(path.join(githubActionsDir, 'ci-cd.yml'), workflowContent);
  fs.writeFileSync(path.join(serviceDir, 'README.md'), readmeContent);
  
  return serviceDir;
}

function createNodeService(serviceName, serviceType) {
  const serviceDir = path.join(ROOT, 'generated-services', serviceName);
  ensureDir(serviceDir);
  
  // Create package.json
  const packageJson = {
    name: serviceName,
    version: "1.0.0",
    description: `${serviceType} API Service`,
    main: "src/index.js",
    scripts: {
      "start": "node src/index.js",
      "dev": "nodemon src/index.js",
      "test": "jest",
      "lint": "eslint src/",
      "format": "prettier --write src/"
    },
    dependencies: {
      "express": "^4.18.2",
      "cors": "^2.8.5",
      "helmet": "^7.1.0",
      "morgan": "^1.10.0",
      "dotenv": "^16.3.1"
    },
    devDependencies: {
      "nodemon": "^3.0.2",
      "jest": "^29.7.0",
      "eslint": "^8.55.0",
      "prettier": "^3.1.1"
    }
  };
  
  // Create main application file
  const appContent = `const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    status: 'healthy',
    service: '${serviceName}',
    version: '1.0.0'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(\`${serviceName} service running on port \${PORT}\`);
});
`;
  
  // Create Dockerfile
  const dockerfileContent = `FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
`;
  
  // Create docker-compose.yml
  const dockerComposeContent = `version: '3.8'

services:
  ${serviceName}:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - PORT=3000
    volumes:
      - .:/app
      - /app/node_modules
    restart: unless-stopped
`;
  
  // Write all files
  fs.writeFileSync(path.join(serviceDir, 'package.json'), JSON.stringify(packageJson, null, 2));
  fs.writeFileSync(path.join(serviceDir, 'src/index.js'), appContent);
  fs.writeFileSync(path.join(serviceDir, 'Dockerfile'), dockerfileContent);
  fs.writeFileSync(path.join(serviceDir, 'docker-compose.yml'), dockerComposeContent);
  
  return serviceDir;
}

function main() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.log('Usage: node service-scaffolder.cjs <service-name> <service-type> [language]');
    console.log('Example: node service-scaffolder.cjs ai-analytics "AI Analytics Platform" python');
    process.exit(1);
  }
  
  const serviceName = args[0];
  const serviceType = args[1];
  const language = args[2] || 'python';
  
  console.log(\`🚀 Creating ${language} service: ${serviceName}\`);
  console.log(\`📝 Service Type: ${serviceType}\`);
  
  let serviceDir;
  
  try {
    if (language === 'python') {
      serviceDir = createPythonService(serviceName, serviceType);
    } else if (language === 'node' || language === 'javascript') {
      serviceDir = createNodeService(serviceName, serviceType);
    } else {
      console.error(\`Unsupported language: ${language}\`);
      process.exit(1);
    }
    
    console.log(\`✅ Service created successfully!\`);
    console.log(\`📁 Location: ${serviceDir}\`);
    console.log(\`🔧 Next steps:\`);
    console.log(\`   1. cd ${serviceDir}\`);
    console.log(\`   2. Review and customize the generated files\`);
    console.log(\`   3. Run the service locally or with Docker\`);
    
  } catch (error) {
    console.error('Failed to create service:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { createPythonService, createNodeService };
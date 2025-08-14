#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = process.cwd();
const GENERATED_SERVICES_DIR = path.join(ROOT, 'generated-services');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

class MVPGenerator {
  constructor() {
    this.templates = this.loadTemplates();
  }

  loadTemplates() {
    return {
      python: {
        mainFile: 'main.py',
        requirementsFile: 'requirements.txt',
        testFile: 'test_main.py',
        dockerfile: 'Dockerfile',
        dockerCompose: 'docker-compose.yml',
        githubActions: '.github/workflows/ci-cd.yml',
        readme: 'README.md',
        gitignore: '.gitignore'
      },
      nodejs: {
        mainFile: 'src/index.js',
        packageFile: 'package.json',
        testFile: 'tests/index.test.js',
        dockerfile: 'Dockerfile',
        dockerCompose: 'docker-compose.yml',
        githubActions: '.github/workflows/ci-cd.yml',
        readme: 'README.md',
        gitignore: '.gitignore'
      },
      go: {
        mainFile: 'main.go',
        goModFile: 'go.mod',
        testFile: 'main_test.go',
        dockerfile: 'Dockerfile',
        dockerCompose: 'docker-compose.yml',
        githubActions: '.github/workflows/ci-cd.yml',
        readme: 'README.md',
        gitignore: '.gitignore'
      }
    };
  }

  async generateMVP(serviceName, serviceType, language = 'python', options = {}) {
    console.log(`🚀 Generating MVP for ${serviceName}...`);
    console.log(`📝 Type: ${serviceType}`);
    console.log(`💻 Language: ${language}`);
    
    const startTime = Date.now();
    
    try {
      // 1. Create project structure
      const projectDir = await this.createProjectStructure(serviceName, language);
      
      // 2. Generate source code
      await this.generateSourceCode(serviceName, serviceType, language, projectDir, options);
      
      // 3. Create configuration files
      await this.createConfigFiles(serviceName, language, projectDir, options);
      
      // 4. Set up CI/CD pipeline
      await this.setupCICD(serviceName, language, projectDir);
      
      // 5. Initialize git repository
      await this.initializeGit(projectDir);
      
      const duration = ((Date.now() - startTime) / 1000).toFixed(1);
      console.log(`✅ MVP generated in ${duration} seconds!`);
      console.log(`📁 Project location: ${projectDir}`);
      
      return projectDir;
      
    } catch (error) {
      console.error(`❌ MVP generation failed: ${error.message}`);
      throw error;
    }
  }

  async createProjectStructure(serviceName, language) {
    const projectDir = path.join(GENERATED_SERVICES_DIR, serviceName);
    ensureDir(projectDir);
    
    // Create directory structure
    const dirs = ['src', 'tests', 'docs', 'scripts', 'config'];
    dirs.forEach(dir => ensureDir(path.join(projectDir, dir)));
    
    // Create language-specific directories
    if (language === 'nodejs') {
      ensureDir(path.join(projectDir, 'src'));
    }
    
    console.log(`📁 Project structure created: ${projectDir}`);
    return projectDir;
  }

  async generateSourceCode(serviceName, serviceType, language, projectDir, options) {
    console.log(`💻 Generating source code...`);
    
    switch (language) {
      case 'python':
        await this.generatePythonCode(serviceName, serviceType, projectDir, options);
        break;
      case 'nodejs':
        await this.generateNodeJSCode(serviceName, serviceType, projectDir, options);
        break;
      case 'go':
        await this.generateGoCode(serviceName, serviceType, projectDir, options);
        break;
      default:
        throw new Error(`Unsupported language: ${language}`);
    }
  }

  async generatePythonCode(serviceName, serviceType, projectDir, options) {
    const mainContent = `from fastapi import FastAPI, HTTPException
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

class PredictionRequest(BaseModel):
    data: List[float]
    model_version: Optional[str] = "latest"

class PredictionResponse(BaseModel):
    prediction: float
    confidence: float
    model_version: str

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

@app.post("/predict", response_model=PredictionResponse)
async def predict(request: PredictionRequest):
    try:
        # Mock prediction logic - replace with actual ML model
        prediction = sum(request.data) / len(request.data)
        confidence = 0.85
        
        return PredictionResponse(
            prediction=prediction,
            confidence=confidence,
            model_version=request.model_version
        )
    except Exception as e:
        logger.error(f"Prediction failed: {e}")
        raise HTTPException(status_code=500, detail="Prediction failed")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
`;

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
numpy==1.24.3
scikit-learn==1.3.0
pandas==2.0.3
`;

    const testContent = `import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"
    assert data["service"] == "${serviceName}"

def test_health():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "healthy"

def test_predict():
    request_data = {"data": [1.0, 2.0, 3.0], "model_version": "test"}
    response = client.post("/predict", json=request_data)
    assert response.status_code == 200
    data = response.json()
    assert "prediction" in data
    assert "confidence" in data
    assert "model_version" in data
`;

    fs.writeFileSync(path.join(projectDir, 'main.py'), mainContent);
    fs.writeFileSync(path.join(projectDir, 'requirements.txt'), requirementsContent);
    fs.writeFileSync(path.join(projectDir, 'tests/test_main.py'), testContent);
  }

  async generateNodeJSCode(serviceName, serviceType, projectDir, options) {
    const packageJson = {
      name: serviceName,
      version: "1.0.0",
      description: serviceType,
      main: "src/index.js",
      scripts: {
        start: "node src/index.js",
        dev: "nodemon src/index.js",
        test: "jest",
        lint: "eslint src/",
        build: "npm run test && npm run lint"
      },
      dependencies: {
        express: "^4.18.2",
        cors: "^2.8.5",
        helmet: "^7.1.0",
        morgan: "^1.10.0",
        dotenv: "^16.3.1",
        joi: "^17.11.0"
      },
      devDependencies: {
        nodemon: "^3.0.2",
        jest: "^29.7.0",
        eslint: "^8.55.0",
        supertest: "^6.3.3"
      }
    };

    const mainContent = `const express = require('express');
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

app.post('/predict', (req, res) => {
  try {
    const { data, modelVersion = 'latest' } = req.body;
    
    if (!Array.isArray(data)) {
      return res.status(400).json({ error: 'Data must be an array' });
    }
    
    // Mock prediction logic - replace with actual ML model
    const prediction = data.reduce((sum, val) => sum + val, 0) / data.length;
    const confidence = 0.85;
    
    res.json({
      prediction,
      confidence,
      model_version: modelVersion
    });
  } catch (error) {
    res.status(500).json({ error: 'Prediction failed' });
  }
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`${serviceName} service running on port ${PORT}`);
});
`;

    const testContent = `const request = require('supertest');
const app = require('../src/index');

describe('${serviceName} API', () => {
  test('GET / returns health status', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
    expect(response.body.service).toBe('${serviceName}');
  });

  test('GET /health returns health check', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
  });

  test('POST /predict returns prediction', async () => {
    const response = await request(app)
      .post('/predict')
      .send({ data: [1, 2, 3], modelVersion: 'test' });
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('prediction');
    expect(response.body).toHaveProperty('confidence');
    expect(response.body).toHaveProperty('model_version');
  });
});
`;

    fs.writeFileSync(path.join(projectDir, 'package.json'), JSON.stringify(packageJson, null, 2));
    fs.writeFileSync(path.join(projectDir, 'src/index.js'), mainContent);
    fs.writeFileSync(path.join(projectDir, 'tests/index.test.js'), testContent);
  }

  async generateGoCode(serviceName, serviceType, projectDir, options) {
    const goModContent = `module ${serviceName}

go 1.21

require (
    github.com/gin-gonic/gin v1.9.1
    github.com/gin-contrib/cors v1.4.0
    github.com/joho/godotenv v1.4.0
)
`;

    const mainContent = `package main

import (
    "log"
    "net/http"
    "os"
    "strconv"

    "github.com/gin-gonic/gin"
    "github.com/gin-contrib/cors"
    "github.com/joho/godotenv"
)

type HealthResponse struct {
    Status  string \`json:"status"\`
    Service string \`json:"service"\`
    Version string \`json:"version"\`
}

type PredictionRequest struct {
    Data        []float64 \`json:"data"\`
    ModelVersion string   \`json:"model_version"\`
}

type PredictionResponse struct {
    Prediction   float64 \`json:"prediction"\`
    Confidence   float64 \`json:"confidence"\`
    ModelVersion string  \`json:"model_version"\`
}

func main() {
    if err := godotenv.Load(); err != nil {
        log.Println("No .env file found")
    }

    port := os.Getenv("PORT")
    if port == "" {
        port = "8080"
    }

    r := gin.Default()

    // CORS middleware
    r.Use(cors.Default())

    // Routes
    r.GET("/", func(c *gin.Context) {
        c.JSON(http.StatusOK, HealthResponse{
            Status:  "healthy",
            Service: "${serviceName}",
            Version: "1.0.0",
        })
    })

    r.GET("/health", func(c *gin.Context) {
        c.JSON(http.StatusOK, gin.H{"status": "healthy"})
    })

    r.POST("/predict", func(c *gin.Context) {
        var req PredictionRequest
        if err := c.ShouldBindJSON(&req); err != nil {
            c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
            return
        }

        if len(req.Data) == 0 {
            c.JSON(http.StatusBadRequest, gin.H{"error": "Data cannot be empty"})
            return
        }

        // Mock prediction logic - replace with actual ML model
        var sum float64
        for _, val := range req.Data {
            sum += val
        }
        prediction := sum / float64(len(req.Data))
        confidence := 0.85

        if req.ModelVersion == "" {
            req.ModelVersion = "latest"
        }

        c.JSON(http.StatusOK, PredictionResponse{
            Prediction:   prediction,
            Confidence:   confidence,
            ModelVersion: req.ModelVersion,
        })
    })

    log.Printf("${serviceName} service running on port %s", port)
    r.Run(":" + port)
}
`;

    const testContent = `package main

import (
    "bytes"
    "encoding/json"
    "net/http"
    "net/http/httptest"
    "testing"

    "github.com/gin-gonic/gin"
    "github.com/stretchr/testify/assert"
)

func TestHealthEndpoint(t *testing.T) {
    gin.SetMode(gin.TestMode)
    r := gin.Default()
    
    r.GET("/", func(c *gin.Context) {
        c.JSON(http.StatusOK, HealthResponse{
            Status:  "healthy",
            Service: "${serviceName}",
            Version: "1.0.0",
        })
    })

    w := httptest.NewRecorder()
    req, _ := http.NewRequest("GET", "/", nil)
    r.ServeHTTP(w, req)

    assert.Equal(t, http.StatusOK, w.Code)
    
    var response HealthResponse
    err := json.Unmarshal(w.Body.Bytes(), &response)
    assert.NoError(t, err)
    assert.Equal(t, "healthy", response.Status)
    assert.Equal(t, "${serviceName}", response.Service)
}
`;

    fs.writeFileSync(path.join(projectDir, 'go.mod'), goModContent);
    fs.writeFileSync(path.join(projectDir, 'main.go'), mainContent);
    fs.writeFileSync(path.join(projectDir, 'main_test.go'), testContent);
  }

  async createConfigFiles(serviceName, language, projectDir, options) {
    console.log(`⚙️  Creating configuration files...`);
    
    // Create Dockerfile
    const dockerfile = this.generateDockerfile(serviceName, language);
    fs.writeFileSync(path.join(projectDir, 'Dockerfile'), dockerfile);
    
    // Create docker-compose.yml
    const dockerCompose = this.generateDockerCompose(serviceName, language);
    fs.writeFileSync(path.join(projectDir, 'docker-compose.yml'), dockerCompose);
    
    // Create .gitignore
    const gitignore = this.generateGitignore(language);
    fs.writeFileSync(path.join(projectDir, '.gitignore'), gitignore);
    
    // Create README.md
    const readme = this.generateReadme(serviceName, language);
    fs.writeFileSync(path.join(projectDir, 'README.md'), readme);
    
    // Create .env file
    const envContent = this.generateEnvFile(serviceName, language);
    fs.writeFileSync(path.join(projectDir, '.env'), envContent);
  }

  generateDockerfile(serviceName, language) {
    switch (language) {
      case 'python':
        return `FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`;
        
      case 'nodejs':
        return `FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]`;
        
      case 'go':
        return `FROM golang:1.21-alpine AS builder

WORKDIR /app
COPY . .
RUN go mod download
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /app/main .
EXPOSE 8080
CMD ["./main"]`;
        
      default:
        throw new Error(`Unsupported language: ${language}`);
    }
  }

  generateDockerCompose(serviceName, language) {
    const port = language === 'python' ? 8000 : language === 'nodejs' ? 3000 : 8080;
    
    return `version: '3.8'

services:
  ${serviceName}:
    build: .
    ports:
      - "${port}:${port}"
    environment:
      - NODE_ENV=development
      - PORT=${port}
    volumes:
      - .:/app
      - /app/node_modules
    restart: unless-stopped
    networks:
      - ${serviceName}-network

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    networks:
      - ${serviceName}-network
    restart: unless-stopped

networks:
  ${serviceName}-network:
    driver: bridge`;
  }

  generateGitignore(language) {
    const baseGitignore = `# Dependencies
node_modules/
__pycache__/
*.pyc
*.pyo
*.pyd
.Python
env/
venv/
.env

# Build outputs
dist/
build/
*.egg-info/
*.so
*.dll
*.dylib

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
logs/

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# Dependency directories
jspm_packages/

# Optional npm cache directory
.npm

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env`;

    return baseGitignore;
  }

  generateReadme(serviceName, language) {
    const languageName = language === 'python' ? 'Python' : language === 'nodejs' ? 'Node.js' : 'Go';
    const port = language === 'python' ? 8000 : language === 'nodejs' ? 3000 : 8080;
    
    return `# ${serviceName}

A ${languageName} service with automated deployment and monitoring.

## Features

- RESTful API with automatic documentation
- Health check endpoints
- Docker containerization
- CI/CD pipeline with GitHub Actions
- Comprehensive testing
- Environment configuration

## Quick Start

### Local Development

\`\`\`bash
# Install dependencies
${language === 'python' ? 'pip install -r requirements.txt' : language === 'nodejs' ? 'npm install' : 'go mod download'}

# Run the service
${language === 'python' ? 'uvicorn main:app --reload' : language === 'nodejs' ? 'npm run dev' : 'go run main.go'}
\`\`\`

### Docker

\`\`\`bash
# Build and run with Docker Compose
docker-compose up --build
\`\`\`

## API Documentation

Once running, visit:
- API docs: http://localhost:${port}/docs (if available)
- Health check: http://localhost:${port}/health
- Root endpoint: http://localhost:${port}/

## Development

\`\`\`bash
# Run tests
${language === 'python' ? 'pytest' : language === 'nodejs' ? 'npm test' : 'go test'}

# Lint code
${language === 'nodejs' ? 'npm run lint' : '# Use appropriate linter for your language'}

# Build for production
${language === 'python' ? 'pip install -r requirements.txt' : language === 'nodejs' ? 'npm run build' : 'go build -o ${serviceName} .'}
\`\`\`

## Environment Variables

Copy \`.env.example\` to \`.env\` and configure:

\`\`\`bash
PORT=${port}
NODE_ENV=development
# Add other environment variables as needed
\`\`\`

## Deployment

This service includes:
- Docker containerization
- GitHub Actions CI/CD pipeline
- Health check endpoints
- Environment configuration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

MIT License - see LICENSE file for details
`;
  }

  generateEnvFile(serviceName, language) {
    const port = language === 'python' ? 8000 : language === 'nodejs' ? 3000 : 8080;
    
    return `# Service Configuration
PORT=${port}
NODE_ENV=development
SERVICE_NAME=${serviceName}

# Database Configuration (if needed)
# DATABASE_URL=postgresql://user:password@localhost:5432/${serviceName}

# Redis Configuration (if needed)
# REDIS_URL=redis://localhost:6379

# API Keys (if needed)
# OPENAI_API_KEY=your-api-key-here

# Logging
LOG_LEVEL=INFO
`;
  }

  async setupCICD(serviceName, language, projectDir) {
    console.log(`🔧 Setting up CI/CD pipeline...`);
    
    const githubDir = path.join(projectDir, '.github', 'workflows');
    ensureDir(githubDir);
    
    const workflowContent = this.generateGitHubActions(serviceName, language);
    fs.writeFileSync(path.join(githubDir, 'ci-cd.yml'), workflowContent);
    
    console.log(`✅ CI/CD pipeline configured`);
  }

  generateGitHubActions(serviceName, language) {
    switch (language) {
      case 'python':
        return `name: CI/CD Pipeline

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
        docker push \${{ secrets.DOCKER_USERNAME }}/${serviceName}:latest`;
        
      case 'nodejs':
        return `name: CI/CD Pipeline

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
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
    - name: Install dependencies
      run: npm ci
    - name: Run tests
      run: npm test

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
        docker push \${{ secrets.DOCKER_USERNAME }}/${serviceName}:latest`;
        
      case 'go':
        return `name: CI/CD Pipeline

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
    - name: Set up Go
      uses: actions/setup-go@v4
      with:
        go-version: '1.21'
    - name: Install dependencies
      run: go mod download
    - name: Run tests
      run: go test -v

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
        docker push \${{ secrets.DOCKER_USERNAME }}/${serviceName}:latest`;
        
      default:
        throw new Error(`Unsupported language: ${language}`);
    }
  }

  async initializeGit(projectDir) {
    console.log(`📝 Initializing git repository...`);
    
    try {
      execSync('git init', { cwd: projectDir, stdio: 'pipe' });
      execSync('git add .', { cwd: projectDir, stdio: 'pipe' });
      execSync('git commit -m "Initial commit: MVP generated by Service Factory"', { cwd: projectDir, stdio: 'pipe' });
      console.log(`✅ Git repository initialized`);
    } catch (error) {
      console.log(`⚠️  Git initialization skipped: ${error.message}`);
    }
  }
}

// CLI interface
if (require.main === module) {
  const generator = new MVPGenerator();
  
  const serviceName = process.argv[2];
  const serviceType = process.argv[3];
  const language = process.argv[4] || 'python';
  
  if (!serviceName || !serviceType) {
    console.log('Usage: node mvp-generator.cjs <service-name> <service-type> [language]');
    console.log('Example: node mvp-generator.cjs my-ai-service "AI Analytics Platform" python');
    console.log('Supported languages: python, nodejs, go');
    process.exit(1);
  }
  
  generator.generateMVP(serviceName, serviceType, language)
    .then(projectDir => {
      console.log(`\n🎉 MVP generation complete!`);
      console.log(`📁 Project created at: ${projectDir}`);
      console.log(`\n🔧 Next steps:`);
      console.log(`   1. cd ${projectDir}`);
      console.log(`   2. Review the generated files`);
      console.log(`   3. Customize for your specific needs`);
      console.log(`   4. Run the service locally or with Docker`);
    })
    .catch(error => {
      console.error(`❌ MVP generation failed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = MVPGenerator;
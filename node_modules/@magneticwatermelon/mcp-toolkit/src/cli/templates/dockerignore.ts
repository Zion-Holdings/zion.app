export function generateDockerignore(): string {
  return `# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build outputs (will be generated inside container)
dist/
build/

# Development files
.env.local
.env.development
.env.staging
.env.test*

# Git
.git/
.gitignore

# Editor directories and files
.vscode/
.idea/
*.swp
*.swo
*~

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Logs
*.log
logs/

# Runtime data
pids/
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/
.nyc_output/

# Testing
.coverage/
test-results/

# Documentation
docs/
*.md
!README.md

# Docker
Dockerfile*
.dockerignore
docker-compose*.yml

# Misc
.cache/
.tmp/
.temp/
`;
}

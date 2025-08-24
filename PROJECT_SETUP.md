# Project Setup Guide

## Prerequisites

- Node.js >= 20.18.1
- npm >= 10.0.0
- Git

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zion.app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run export` - Export static site

### Code Quality
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run fix:all` - Fix linting issues automatically

### Build & Deployment
- `npm run build:heal` - Smart build with auto-recovery
- `npm run build:smart` - Intelligent build orchestration
- `npm run build:monitor` - Continuous build monitoring

### Automation
- `npm run autonomous` - Launch autonomous systems
- `npm run redundancy:start` - Start redundancy systems
- `npm run orchestrator:start` - Start automation orchestrator

## Project Structure

```
zion.app/
├── pages/                 # Next.js pages
├── styles/                # Global styles and Tailwind CSS
├── automation/            # Automation scripts and systems
├── scripts/               # Utility scripts
├── public/                # Static assets
├── netlify/              # Netlify functions
└── automation/            # Automation and redundancy systems
```

## Configuration Files

- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration
- `next.config.js` - Next.js configuration
- `.env.example` - Environment variables template

## Key Features

- **Next.js 14** with App Router
- **Tailwind CSS 4** for styling
- **TypeScript** for type safety
- **Automated redundancy systems**
- **PM2 process management**
- **Netlify functions integration**
- **Comprehensive automation**

## Development Workflow

1. **Feature Development**
   - Create feature branch from main
   - Implement changes
   - Run tests and linting
   - Submit pull request

2. **Code Quality**
   - ESLint for code linting
   - TypeScript for type checking
   - Pre-commit hooks for quality gates

3. **Build Process**
   - Automated health checks
   - Smart build orchestration
   - Auto-recovery mechanisms

## Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   npm run build:heal
   npm run build:recovery
   ```

2. **Dependency Issues**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScript Errors**
   ```bash
   npm run type-check
   npm run fix:all
   ```

### Getting Help

- Check the automation logs: `npm run pm2:logs`
- Review system status: `npm run redundancy:status`
- Check build health: `npm run build:health-check`

## Contributing

1. Follow the existing code style
2. Add tests for new features
3. Update documentation as needed
4. Ensure all checks pass before submitting

## License

This project is proprietary software. All rights reserved.
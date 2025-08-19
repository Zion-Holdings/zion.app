# Developer Guide

## Getting Started

### Prerequisites
- Node.js >= 20.18.1
- npm >= 10.0.0
- Git
- PM2 (for production processes)

### Installation
```bash
git clone https://github.com/Zion-Holdings/zion.app.git
cd zion.app
npm install
```

### Development Setup
```bash
# Start development server
npm run dev

# Run linting
npm run lint

# Type checking
npm run type-check

# Build the project
npm run build
```

## Project Structure

### Core Directories
- `pages/` - Next.js pages and routing
- `components/` - Reusable UI components
- `automation/` - Cloud automation scripts
- `scripts/` - Utility and build scripts
- `styles/` - CSS and styling files

### Key Files
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `next.config.js` - Next.js configuration
- `ecosystem.pm2.cjs` - PM2 process management

## Development Workflow

### Code Quality
- ESLint for code linting
- Prettier for code formatting
- Husky for git hooks
- TypeScript for type safety

### Testing
- Playwright for end-to-end testing
- Jest for unit testing
- Automated testing in CI/CD pipeline

### Automation
- GitHub Actions for CI/CD
- PM2 for process management
- Automated dependency updates
- Content generation automation

## Contributing

### Code Standards
1. Follow TypeScript best practices
2. Use functional components with hooks
3. Implement proper error handling
4. Add comprehensive documentation
5. Write meaningful commit messages

### Pull Request Process
1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request
5. Ensure CI checks pass

## Deployment

### Local Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### PM2 Management
```bash
# Start all processes
npm run pm2:start

# Check status
npm run pm2:status

# View logs
npm run pm2:logs

# Restart processes
npm run pm2:restart
```

## Troubleshooting

### Common Issues
- **Build failures**: Run `npm run build:heal`
- **Dependency issues**: Run `npm run deps:maintain`
- **Process crashes**: Check PM2 logs with `npm run pm2:logs`

### Performance Optimization
- Use Next.js Image component for images
- Implement proper caching strategies
- Monitor bundle sizes
- Use dynamic imports for code splitting

## Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/)

### Community
- GitHub Issues for bug reports
- GitHub Discussions for questions
- Pull Requests for contributions

## Support

For additional support or questions:
- Check existing documentation
- Review GitHub Issues
- Contact the development team
- Join community discussions
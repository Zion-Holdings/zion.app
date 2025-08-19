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

### Development Environment
```bash
# Start development server
npm run dev

# Run with enhanced memory allocation
NODE_OPTIONS="--max-old-space-size=4096" npm run dev
```

## Project Structure

### Core Directories
- `pages/` - Next.js pages and routing
- `components/` - Reusable UI components
- `automation/` - Cloud automation scripts
- `scripts/` - Utility and build scripts
- `styles/` - CSS and styling files

### Key Files
- `ecosystem.pm2.cjs` - PM2 process management
- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration

## Development Workflow

### Code Quality
```bash
# Lint and fix code
npm run lint
npm run fix:all

# Type checking
npm run type-check

# Build validation
npm run build:validate
```

### Testing
```bash
# Run tests
npm test

# Run specific test suites
npm run test:unit
npm run test:integration
```

### Building
```bash
# Smart build with auto-fix
npm run build:smart

# Production build
npm run build

# Export static files
npm run export
```

## Automation System

### Starting Automation
```bash
# Start all automation systems
npm run autonomous

# Start specific automation
npm run mcp:start
npm run google-docs:start
```

### Monitoring
```bash
# Check automation status
npm run autonomous:status
npm run mcp:status

# View logs
npm run pm2:logs
```

## Contributing

### Code Standards
- Follow ESLint configuration
- Use TypeScript for new files
- Follow existing naming conventions
- Add JSDoc comments for complex functions

### Pull Request Process
1. Create feature branch from `main`
2. Make changes following code standards
3. Run tests and linting
4. Submit PR with clear description
5. Ensure CI passes

### Commit Convention
```
type(scope): description

feat(automation): add new monitoring script
fix(ui): resolve button alignment issue
docs(readme): update installation steps
```

## Troubleshooting

### Common Issues

#### Build Failures
```bash
# Try smart build recovery
npm run build:recovery

# Check build health
npm run build:health-check
```

#### Memory Issues
```bash
# Increase Node.js memory
export NODE_OPTIONS="--max-old-space-size=8192"
```

#### PM2 Issues
```bash
# Restart PM2 processes
npm run pm2:restart

# Check PM2 status
npm run pm2:status
```

### Getting Help
- Check existing documentation
- Review automation logs
- Open GitHub issue with detailed description
- Include error logs and system information

## Performance Optimization

### Build Optimization
- Use `npm run build:smart` for intelligent builds
- Monitor build performance with `npm run build:monitor`
- Implement incremental builds for large projects

### Runtime Optimization
- Enable PM2 clustering for Node.js processes
- Use CDN for static assets
- Implement proper caching strategies

## Security

### Security Scanning
```bash
# Run security audit
npm run security:scan

# Check dependencies
npm audit
```

### Best Practices
- Keep dependencies updated
- Use environment variables for secrets
- Implement proper authentication
- Regular security audits

## Deployment

### Production Deployment
```bash
# Build for production
npm run build

# Start production server
npm run start

# Use PM2 for process management
npm run pm2:start
```

### Environment Configuration
- Set `NODE_ENV=production`
- Configure database connections
- Set up monitoring and logging
- Enable HTTPS and security headers

## Monitoring and Maintenance

### Health Checks
```bash
# Run health checks
npm run build:health-check

# Monitor automation systems
npm run autonomous:status
```

### Log Management
- PM2 log rotation is configured
- Logs stored in `automation/logs/`
- Monitor log sizes and rotation

## Advanced Features

### Custom Automation
- Extend automation system in `automation/` directory
- Create new PM2 ecosystem files
- Implement custom monitoring scripts

### Integration
- MCP (Model Context Protocol) integration
- Google Docs automation
- LinkedIn marketing automation
- GitHub Actions workflows

## Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Community
- GitHub Issues and Discussions
- Project Wiki
- Contributing Guidelines

---

*This guide is maintained by the development team. For questions or improvements, please open an issue or submit a PR.*
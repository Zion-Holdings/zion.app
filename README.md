# Zion Tech Group - AI Marketplace Platform

A modern, accessible, and performant AI marketplace platform built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 13+, TypeScript, and Tailwind CSS
- **Accessibility First**: WCAG compliant components with ARIA support
- **Performance Optimized**: Bundle optimization, image optimization, and code splitting
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Testing Ready**: Jest and React Testing Library setup
- **Code Quality**: ESLint, Prettier, and TypeScript for code consistency

## 🛠️ Tech Stack

- **Framework**: Next.js 13+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Testing**: Jest + React Testing Library
- **Code Quality**: ESLint + Prettier
- **Deployment**: Netlify

## 📋 Prerequisites

- Node.js >= 20.18.1
- npm >= 10.0.0

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <repository-url>
cd zion-tech-group
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Testing
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage

### Code Quality
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run analyze` - Analyze bundle size

### Automation
- `npm run pm2:start` - Start PM2 processes
- `npm run pm2:stop` - Stop PM2 processes
- `npm run pm2:restart` - Restart PM2 processes
- `npm run pm2:status` - Check PM2 status
- `npm run pm2:logs` - View PM2 logs

## 🧪 Testing

The project includes a comprehensive testing setup:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure
- `__tests__/` - Test files
- `jest.config.js` - Jest configuration
- `jest.setup.js` - Jest setup and mocks

## 🎨 Code Quality

### ESLint
The project uses ESLint with Next.js configuration for code quality.

### Prettier
Code formatting is handled by Prettier with a consistent configuration.

### TypeScript
Full TypeScript support with strict type checking.

## 🚀 Deployment

### Netlify
The project is configured for deployment on Netlify with:
- Automatic builds on push to main branch
- Next.js plugin for optimal performance
- Environment variable management

### Build Process
```bash
npm run build
```

## 📁 Project Structure

```
zion-tech-group/
├── components/          # React components
├── pages/              # Next.js pages
├── public/             # Static assets
├── styles/             # Global styles
├── __tests__/          # Test files
├── automation/          # Automation scripts
├── scripts/            # Utility scripts
├── docs/               # Documentation
└── config/             # Configuration files
```

## 🔧 Configuration Files

- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `jest.config.js` - Jest configuration
- `.prettierrc` - Prettier configuration
- `package.json` - Dependencies and scripts

## 🌟 Key Components

### AccessibilityEnhancer
A comprehensive accessibility wrapper component that provides:
- ARIA attribute support
- Keyboard navigation
- Focus management
- Screen reader compatibility

## 📚 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is proprietary software owned by Zion Tech Group.

## 🤝 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ by Zion Tech Group**

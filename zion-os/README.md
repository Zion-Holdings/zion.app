# Zion OS - Sovereign AI-Powered Digital Economies

Launch sovereign AI-powered digital economies with one click. Unified deployment protocol for Zion ecosystems.

## 🚀 Features

- **One-Click Deployment**: Launch complete digital economy instances in minutes
- **Modular Architecture**: Choose from 15+ core features and optional add-ons
- **Multi-Governance**: Support for Admin, DAO-lite, and Full DAO governance models
- **Vertical Specialization**: Pre-configured templates for Healthcare, Education, Legal, and Government sectors
- **Token Systems**: Shared ZION$ or local token options
- **Regional Support**: Multi-language and multi-currency capabilities
- **Advanced Add-ons**: Payment gateways, AI moderation, sovereign treasuries, and more

## 🏗️ Architecture

- **Frontend**: Next.js 14 with TypeScript and Tailwind CSS
- **Database**: SQLite with Prisma ORM
- **Authentication**: NextAuth.js with JWT
- **Styling**: Modern glass morphism design with responsive layouts
- **State Management**: React hooks with server-side rendering

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zion-os
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   NODE_ENV=development
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   JWT_SECRET="your-jwt-secret"
   ENCRYPTION_KEY="your-32-char-encryption-key"
   OPENAI_API_KEY="your-openai-api-key"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations

## 📁 Project Structure

```
zion-os/
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── admin/          # Admin dashboard
│   │   ├── multiverse/     # Launch wizard
│   │   ├── api/            # API routes
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable components
│   │   └── ui/            # UI components
│   └── lib/               # Utilities and configurations
├── prisma/                # Database schema and migrations
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## 🎨 Design System

- **Color Palette**: Modern dark theme with blue/purple accents
- **Typography**: Inter font family for optimal readability
- **Components**: Glass morphism effects with hover animations
- **Responsive**: Mobile-first design with breakpoint optimization
- **Accessibility**: High contrast ratios and semantic HTML

## 🔧 Configuration

### Core Features
- Marketplace (Jobs, Talent, Projects)
- ZionGPT Core
- Resume Builder + Proposal AI
- Token system + rewards
- On-chain contract builder
- KYC/AML + ID verification
- DAO proposal voting
- Incubator + Grants
- Zion Academy
- API access for partners
- Regional/institutional dashboards
- White-label vendor plugin
- Web3 login + DID
- Multi-currency support

### Governance Types
- **Admin**: Centralized control
- **DAO-lite**: Basic voting mechanisms
- **Full DAO**: Complete decentralized governance

### Verticals
- **General**: Multi-purpose platform
- **Healthcare**: Medical and wellness focus
- **Education**: Learning and training
- **Legal**: Legal services and compliance
- **Government**: Public sector applications

## 🚀 Deployment

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm run start
```

### Environment Variables
Ensure all required environment variables are set in production:
- `DATABASE_URL`: Production database connection
- `NEXTAUTH_SECRET`: Strong secret for authentication
- `JWT_SECRET`: JWT signing secret
- `ENCRYPTION_KEY`: 32-character encryption key

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- **Documentation**: Check the docs folder for detailed guides
- **Issues**: Report bugs and request features via GitHub Issues
- **Discussions**: Join community discussions in GitHub Discussions

## 🔮 Roadmap

- [ ] Multi-tenant architecture
- [ ] Advanced analytics dashboard
- [ ] API rate limiting and monitoring
- [ ] Automated testing suite
- [ ] Performance optimization
- [ ] Mobile app development
- [ ] Integration marketplace
- [ ] Advanced AI features

---

Built with ❤️ by the Zion Tech Group team

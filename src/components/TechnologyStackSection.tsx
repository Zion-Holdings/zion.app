import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Cpu, 
  Network, 
  ArrowRight, 
  CheckCircle,
  Star,
  TrendingUp,
  Layers,
  GitBranch,
  Terminal,
  Monitor,
  Server,
  Lock,
  Brain
} from 'lucide-react';

const frontendTechnologies = [
  {
    name: "React",
    category: "Frontend Framework",
    logo: "/logos/react.svg",
    description: "Modern component-based UI library for building interactive user interfaces",
    version: "18.x",
    expertise: "Expert",
    projects: 150,
    rating: 5,
    features: ["Hooks", "Context API", "Suspense", "Concurrent Features"],
    alternatives: ["Vue.js", "Angular", "Svelte"]
  },
  {
    name: "Next.js",
    category: "Full-Stack Framework",
    logo: "/logos/nextjs.svg",
    description: "React framework for production with server-side rendering and static generation",
    version: "14.x",
    expertise: "Expert",
    projects: 120,
    rating: 5,
    features: ["SSR/SSG", "API Routes", "Image Optimization", "Middleware"],
    alternatives: ["Nuxt.js", "Gatsby", "Remix"]
  },
  {
    name: "TypeScript",
    category: "Programming Language",
    logo: "/logos/typescript.svg",
    description: "Typed superset of JavaScript for building scalable applications",
    version: "5.x",
    expertise: "Expert",
    projects: 200,
    rating: 5,
    features: ["Static Typing", "Interfaces", "Generics", "Decorators"],
    alternatives: ["JavaScript", "Flow", "Dart"]
  },
  {
    name: "Tailwind CSS",
    category: "CSS Framework",
    logo: "/logos/tailwind.svg",
    description: "Utility-first CSS framework for rapid UI development",
    version: "3.x",
    expertise: "Expert",
    projects: 180,
    rating: 5,
    features: ["Utility Classes", "Responsive Design", "Dark Mode", "Customization"],
    alternatives: ["Bootstrap", "Material-UI", "Chakra UI"]
  }
];

const backendTechnologies = [
  {
    name: "Node.js",
    category: "Runtime Environment",
    logo: "/logos/nodejs.svg",
    description: "JavaScript runtime for building scalable server-side applications",
    version: "20.x",
    expertise: "Expert",
    projects: 160,
    rating: 5,
    features: ["Event-driven", "Non-blocking I/O", "NPM Ecosystem", "Microservices"],
    alternatives: ["Python", "Java", "Go", "C#"]
  },
  {
    name: "Python",
    category: "Programming Language",
    logo: "/logos/python.svg",
    description: "High-level programming language for AI, ML, and backend development",
    version: "3.11+",
    expertise: "Expert",
    projects: 140,
    rating: 5,
    features: ["AI/ML Libraries", "Web Frameworks", "Data Science", "Automation"],
    alternatives: ["Node.js", "Java", "Go", "Rust"]
  },
  {
    name: "PostgreSQL",
    category: "Database",
    logo: "/logos/postgresql.svg",
    description: "Advanced open-source relational database with ACID compliance",
    version: "15.x",
    expertise: "Expert",
    projects: 130,
    rating: 5,
    features: ["ACID Compliance", "JSON Support", "Extensions", "Partitioning"],
    alternatives: ["MySQL", "MongoDB", "Redis", "SQLite"]
  },
  {
    name: "Redis",
    category: "In-Memory Database",
    logo: "/logos/redis.svg",
    description: "High-performance in-memory data structure store",
    version: "7.x",
    expertise: "Expert",
    projects: 110,
    rating: 5,
    features: ["Caching", "Session Storage", "Real-time", "Pub/Sub"],
    alternatives: ["Memcached", "Hazelcast", "Apache Ignite"]
  }
];

const cloudTechnologies = [
  {
    name: "AWS",
    category: "Cloud Platform",
    logo: "/logos/aws.svg",
    description: "Comprehensive cloud computing platform with 200+ services",
    version: "Latest",
    expertise: "Expert",
    projects: 180,
    rating: 5,
    features: ["EC2", "Lambda", "S3", "RDS", "CloudFormation"],
    alternatives: ["Azure", "Google Cloud", "DigitalOcean", "Heroku"]
  },
  {
    name: "Docker",
    category: "Containerization",
    logo: "/logos/docker.svg",
    description: "Platform for developing, shipping, and running applications in containers",
    version: "24.x",
    expertise: "Expert",
    projects: 160,
    rating: 5,
    features: ["Containerization", "Orchestration", "Microservices", "DevOps"],
    alternatives: ["Podman", "LXC", "rkt", "Kubernetes"]
  },
  {
    name: "Kubernetes",
    category: "Container Orchestration",
    logo: "/logos/kubernetes.svg",
    description: "Open-source container orchestration platform for automating deployment",
    version: "1.28+",
    expertise: "Expert",
    projects: 120,
    rating: 5,
    features: ["Auto-scaling", "Load Balancing", "Service Discovery", "Rolling Updates"],
    alternatives: ["Docker Swarm", "Nomad", "OpenShift", "Rancher"]
  },
  {
    name: "Terraform",
    category: "Infrastructure as Code",
    logo: "/logos/terraform.svg",
    description: "Infrastructure as code tool for building, changing, and versioning infrastructure",
    version: "1.5+",
    expertise: "Expert",
    projects: 100,
    rating: 5,
    features: ["IaC", "Multi-cloud", "State Management", "Modules"],
    alternatives: ["CloudFormation", "Pulumi", "Ansible", "Chef"]
  }
];

const aiTechnologies = [
  {
    name: "TensorFlow",
    category: "Machine Learning",
    logo: "/logos/tensorflow.svg",
    description: "Open-source machine learning framework for research and production",
    version: "2.15+",
    expertise: "Expert",
    projects: 80,
    rating: 5,
    features: ["Deep Learning", "Neural Networks", "GPU Support", "Model Serving"],
    alternatives: ["PyTorch", "Scikit-learn", "Keras", "MXNet"]
  },
  {
    name: "OpenAI",
    category: "AI Services",
    logo: "/logos/openai.svg",
    description: "Advanced AI models and APIs for natural language processing",
    version: "Latest",
    expertise: "Expert",
    projects: 60,
    rating: 5,
    features: ["GPT Models", "DALL-E", "Whisper", "Embeddings"],
    alternatives: ["Anthropic", "Google AI", "Azure OpenAI", "Hugging Face"]
  },
  {
    name: "LangChain",
    category: "AI Framework",
    logo: "/logos/langchain.svg",
    description: "Framework for developing applications with large language models",
    version: "0.1+",
    expertise: "Expert",
    projects: 40,
    rating: 5,
    features: ["LLM Integration", "Chains", "Agents", "Memory"],
    alternatives: ["Semantic Kernel", "AutoGPT", "LlamaIndex", "Haystack"]
  },
  {
    name: "Hugging Face",
    category: "AI Platform",
    logo: "/logos/huggingface.svg",
    description: "Platform for machine learning models, datasets, and applications",
    version: "Latest",
    expertise: "Expert",
    projects: 50,
    rating: 5,
    features: ["Model Hub", "Transformers", "Datasets", "Spaces"],
    alternatives: ["ModelScope", "Replicate", "Gradio", "Streamlit"]
  }
];

const developmentTools = [
  {
    name: "Git",
    category: "Version Control",
    logo: "/logos/git.svg",
    description: "Distributed version control system for tracking changes in source code",
    version: "2.40+",
    expertise: "Expert",
    projects: 300,
    rating: 5,
    features: ["Branching", "Merging", "Stashing", "Rebasing"],
    alternatives: ["SVN", "Mercurial", "Perforce", "GitHub Desktop"]
  },
  {
    name: "VS Code",
    category: "Code Editor",
    logo: "/logos/vscode.svg",
    description: "Lightweight but powerful source code editor with extensive extensions",
    version: "1.80+",
    expertise: "Expert",
    projects: 250,
    rating: 5,
    features: ["IntelliSense", "Debugging", "Extensions", "Git Integration"],
    alternatives: ["WebStorm", "Sublime Text", "Atom", "Vim"]
  },
  {
    name: "Postman",
    category: "API Development",
    logo: "/logos/postman.svg",
    description: "Platform for building and testing APIs with comprehensive tools",
    version: "Latest",
    expertise: "Expert",
    projects: 180,
    rating: 5,
    features: ["API Testing", "Collections", "Mock Servers", "Documentation"],
    alternatives: ["Insomnia", "Thunder Client", "Hoppscotch", "Swagger"]
  },
  {
    name: "Jest",
    category: "Testing Framework",
    logo: "/logos/jest.svg",
    description: "JavaScript testing framework with a focus on simplicity and support",
    version: "29.x",
    expertise: "Expert",
    projects: 200,
    rating: 5,
    features: ["Unit Testing", "Mocking", "Coverage", "Snapshot Testing"],
    alternatives: ["Vitest", "Mocha", "Jasmine", "Cypress"]
  }
];

const technologyStats = [
  { icon: <Code className="w-6 h-6" />, value: "50+", label: "Technologies" },
  { icon: <Layers className="w-6 h-6" />, value: "15+", label: "Categories" },
  { icon: <Star className="w-6 h-6" />, value: "4.9/5", label: "Expertise Rating" },
  { icon: <TrendingUp className="w-6 h-6" />, value: "1000+", label: "Projects Delivered" },
  { icon: <GitBranch className="w-6 h-6" />, value: "24/7", label: "Support Available" },
  { icon: <Zap className="w-6 h-6" />, value: "99.9%", label: "Uptime Guarantee" }
];

export function TechnologyStackSection() {
  const [selectedTech, setSelectedTech] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("frontend");

  const categories = [
    { id: "frontend", name: "Frontend", icon: <Monitor className="w-5 h-5" />, tech: frontendTechnologies },
    { id: "backend", name: "Backend", icon: <Server className="w-5 h-5" />, tech: backendTechnologies },
    { id: "cloud", name: "Cloud & DevOps", icon: <Cloud className="w-5 h-5" />, tech: cloudTechnologies },
    { id: "ai", name: "AI & Machine Learning", icon: <Brain className="w-5 h-5" />, tech: aiTechnologies },
    { id: "tools", name: "Development Tools", icon: <Terminal className="w-5 h-5" />, tech: developmentTools }
  ];

  const currentTechnologies = categories.find(cat => cat.id === selectedCategory)?.tech || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-purple via-zion-slate-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Technology <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Discover our comprehensive technology stack that powers innovative solutions across 
            frontend, backend, cloud, AI, and development tools. Built for scale, performance, and reliability.
          </p>

          {/* Technology stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {technologyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20"
              >
                <div className="text-zion-cyan mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-zion-slate-light text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Navigation */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-dark/40 text-zion-slate-light hover:bg-zion-blue-dark/60 hover:text-white border border-zion-blue-light/30'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Technology Grid */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {currentTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative"
              >
                <div 
                  className="h-full p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20 group cursor-pointer"
                  onClick={() => setSelectedTech(selectedTech === index ? null : index)}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zion-cyan to-zion-purple flex items-center justify-center">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                          {tech.name}
                        </h4>
                        <div className="text-zion-cyan text-sm">{tech.category}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-zion-purple-light text-xs">v{tech.version}</div>
                      <div className="text-zion-slate-light text-xs">{tech.expertise}</div>
                    </div>
                  </div>

                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                    {tech.description}
                  </p>

                  {/* Quick stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{tech.projects}</div>
                      <div className="text-zion-slate-light text-xs">Projects</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{tech.rating}/5</div>
                      <div className="text-zion-slate-light text-xs">Rating</div>
                    </div>
                  </div>

                  {/* Features preview */}
                  <div className="mb-4">
                    <div className="text-zion-cyan font-semibold text-sm mb-2">Key Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {tech.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                          {feature}
                        </span>
                      ))}
                      {tech.features.length > 2 && (
                        <span className="text-zion-cyan/60 text-xs">
                          +{tech.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-purple-light font-medium text-sm group-hover:text-zion-purple transition-colors">
                      View Technology Details
                    </span>
                    <ArrowRight className="w-4 h-4 text-zion-purple-light group-hover:text-zion-purple group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {selectedTech === index && (
                      <motion.div 
                        className="mt-6 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30"
                        initial={{ opacity: 0, height: 0, y: 10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* All Features */}
                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-2">All Features:</h5>
                          <div className="flex flex-wrap gap-1">
                            {tech.features.map((feature, idx) => (
                              <span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Alternatives */}
                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-2">Alternatives:</h5>
                          <div className="text-zion-slate-light/80 text-xs">
                            {tech.alternatives.join(", ")}
                          </div>
                        </div>

                        {/* Expertise Badge */}
                        <div className="text-center p-2 rounded-lg bg-zion-cyan/20 border border-zion-cyan/30">
                          <div className="text-zion-cyan font-bold text-sm">{tech.expertise} Level</div>
                          <div className="text-zion-slate-light text-xs">Proven in {tech.projects} projects</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-6 bg-zion-blue-dark rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Build with Our Tech Stack?
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Leverage our expertise in cutting-edge technologies to build scalable, 
                performant, and innovative solutions that drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                  Start Your Project
                </button>
                <button className="px-8 py-3 bg-zion-blue-light/20 hover:bg-zion-blue-light/30 text-zion-cyan border border-zion-cyan/30 hover:border-zion-cyan/50 rounded-xl font-medium transition-all duration-300">
                  View Technology Portfolio
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
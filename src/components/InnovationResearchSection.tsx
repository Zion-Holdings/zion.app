import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb, 
  TestTube, 
  Microscope, 
  Rocket, 
  Brain, 
  Atom, 
  Zap, 
  Target, 
  Award, 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
  Star,
  Globe,
  Shield,
  Database,
  Cpu,
  Network
} from 'lucide-react';

const researchAreas = [
  {
    id: 1,
    title: "Artificial Intelligence & Machine Learning",
    icon: <Brain className="w-8 h-8" />,
    color: "from-zion-purple to-zion-purple-dark",
    description: "Advanced AI research in computer vision, natural language processing, and autonomous systems",
    projects: 25,
    researchers: 18,
    publications: 12,
    patents: 8,
    funding: "$2.5M",
    status: "Active",
    highlights: [
      "Computer Vision Breakthroughs",
      "NLP Model Optimization",
      "Autonomous Systems Research",
      "AI Ethics & Governance"
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Custom Frameworks"],
    partners: ["MIT", "Stanford", "Google Research", "Microsoft Research"]
  },
  {
    id: 2,
    title: "Quantum Computing & Cryptography",
    icon: <Atom className="w-8 h-8" />,
    color: "from-zion-cyan to-zion-blue",
    description: "Pioneering research in quantum algorithms, quantum-safe cryptography, and quantum machine learning",
    projects: 18,
    researchers: 12,
    publications: 8,
    patents: 5,
    funding: "$1.8M",
    status: "Active",
    highlights: [
      "Quantum Algorithm Development",
      "Post-Quantum Cryptography",
      "Quantum Machine Learning",
      "Quantum Error Correction"
    ],
    technologies: ["Qiskit", "Cirq", "Custom Quantum Simulators", "Cryptographic Libraries"],
    partners: ["IBM Quantum", "Google Quantum", "MIT Lincoln Lab", "NIST"]
  },
  {
    id: 3,
    title: "Blockchain & Distributed Systems",
    icon: <Network className="w-8 h-8" />,
    color: "from-zion-cyan-light to-zion-cyan",
    description: "Research in blockchain scalability, consensus mechanisms, and decentralized applications",
    projects: 22,
    researchers: 15,
    publications: 10,
    patents: 6,
    funding: "$2.1M",
    status: "Active",
    highlights: [
      "Scalability Solutions",
      "Consensus Mechanisms",
      "DeFi Protocols",
      "Cross-Chain Interoperability"
    ],
    technologies: ["Ethereum", "Polkadot", "Solana", "Custom Blockchains"],
    partners: ["Ethereum Foundation", "Polkadot Network", "Cardano", "Chainlink"]
  },
  {
    id: 4,
    title: "Cybersecurity & Privacy",
    icon: <Shield className="w-8 h-8" />,
    color: "from-zion-purple-light to-zion-purple",
    description: "Advanced research in threat detection, privacy-preserving technologies, and secure systems",
    projects: 20,
    researchers: 14,
    publications: 9,
    patents: 7,
    funding: "$1.9M",
    status: "Active",
    highlights: [
      "Threat Intelligence",
      "Zero-Knowledge Proofs",
      "Secure Multi-Party Computation",
      "Privacy-Preserving ML"
    ],
    technologies: ["Custom Security Tools", "Privacy Frameworks", "Threat Detection", "Encryption"],
    partners: ["DARPA", "NSA", "CISA", "Academic Institutions"]
  },
  {
    id: 5,
    title: "Edge Computing & IoT",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-zion-cyan to-zion-purple",
    description: "Research in edge computing architectures, IoT security, and distributed intelligence",
    projects: 16,
    researchers: 11,
    publications: 7,
    patents: 4,
    funding: "$1.5M",
    status: "Active",
    highlights: [
      "Edge AI Deployment",
      "IoT Security Protocols",
      "Distributed Computing",
      "Real-time Processing"
    ],
    technologies: ["Kubernetes", "Docker", "Custom Edge Runtime", "IoT Frameworks"],
    partners: ["Intel", "ARM", "Qualcomm", "Industrial Partners"]
  },
  {
    id: 6,
    title: "Sustainable Technology",
    icon: <Globe className="w-8 h-8" />,
    color: "from-zion-purple to-zion-cyan",
    description: "Research in green computing, renewable energy systems, and sustainable AI",
    projects: 14,
    researchers: 9,
    publications: 6,
    patents: 3,
    funding: "$1.2M",
    status: "Active",
    highlights: [
      "Green AI Algorithms",
      "Energy-Efficient Computing",
      "Renewable Energy Integration",
      "Carbon Footprint Reduction"
    ],
    technologies: ["Energy Monitoring", "Green Computing", "Renewable Systems", "Sustainability Tools"],
    partners: ["DOE", "EPA", "Academic Institutions", "Green Tech Companies"]
  }
];

const innovationStats = [
  { icon: <Lightbulb className="w-6 h-6" />, value: "120+", label: "Research Projects" },
  { icon: <Users className="w-6 h-6" />, value: "80+", label: "Researchers" },
  { icon: <Award className="w-6 h-6" />, value: "50+", label: "Publications" },
  { icon: <Target className="w-6 h-6" />, value: "30+", label: "Patents Filed" },
  { icon: <TrendingUp className="w-6 h-6" />, value: "$10M+", label: "Research Funding" },
  { icon: <Star className="w-6 h-6" />, value: "15+", label: "Industry Partners" }
];

const researchLabs = [
  {
    name: "AI Research Lab",
    location: "San Francisco",
    focus: "Machine Learning & Computer Vision",
    equipment: "High-performance GPUs, Custom AI Infrastructure",
    projects: 12,
    researchers: 8
  },
  {
    name: "Quantum Computing Lab",
    location: "Boston",
    focus: "Quantum Algorithms & Cryptography",
    equipment: "Quantum Simulators, Cryptographic Testing",
    projects: 8,
    researchers: 6
  },
  {
    name: "Blockchain Innovation Lab",
    location: "London",
    focus: "Distributed Systems & DeFi",
    equipment: "Blockchain Testnets, Smart Contract Testing",
    projects: 10,
    researchers: 7
  },
  {
    name: "Cybersecurity Lab",
    location: "Washington DC",
    focus: "Threat Detection & Privacy",
    equipment: "Security Testing Environment, Privacy Tools",
    projects: 9,
    researchers: 5
  }
];

export function InnovationResearchSection() {
  const [selectedResearch, setSelectedResearch] = useState<number | null>(null);
  const [hoveredLab, setHoveredLab] = useState<number | null>(null);

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
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-purple relative overflow-hidden">
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
            Innovation & <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Research</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            At Zion Tech Group, we push the boundaries of technology through cutting-edge research, 
            innovative solutions, and collaborative partnerships with leading institutions worldwide.
          </p>

          {/* Innovation stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {innovationStats.map((stat, index) => (
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

        {/* Research Areas */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Research <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Areas</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative"
              >
                <div 
                  className="h-full p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20 group cursor-pointer"
                  onClick={() => setSelectedResearch(selectedResearch === area.id ? null : area.id)}
                >
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <div className="text-white">
                        {area.icon}
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {area.title}
                    </h4>
                    <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  {/* Quick stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{area.projects}</div>
                      <div className="text-zion-slate-light text-xs">Projects</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{area.researchers}</div>
                      <div className="text-zion-slate-light text-xs">Researchers</div>
                    </div>
                  </div>

                  {/* Highlights preview */}
                  <div className="mb-4">
                    <div className="text-zion-cyan font-semibold text-sm mb-2">Key Focus Areas:</div>
                    <div className="space-y-1">
                      {area.highlights.slice(0, 2).map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-zion-slate-light/80 text-xs">
                          <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                      {area.highlights.length > 2 && (
                        <div className="text-zion-cyan/60 text-xs">
                          +{area.highlights.length - 2} more areas
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-purple-light font-medium text-sm group-hover:text-zion-purple transition-colors">
                      View Research Details
                    </span>
                    <ArrowRight className="w-4 h-4 text-zion-purple-light group-hover:text-zion-purple group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {selectedResearch === area.id && (
                      <motion.div 
                        className="mt-6 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30"
                        initial={{ opacity: 0, height: 0, y: 10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                            <div className="text-zion-cyan font-bold text-sm">{area.publications}</div>
                            <div className="text-zion-slate-light text-xs">Publications</div>
                          </div>
                          <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                            <div className="text-zion-cyan font-bold text-sm">{area.patents}</div>
                            <div className="text-zion-slate-light text-xs">Patents</div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-2">Technologies:</h5>
                          <div className="flex flex-wrap gap-1">
                            {area.technologies.map((tech, idx) => (
                              <span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-2">Partners:</h5>
                          <div className="text-zion-slate-light/80 text-xs">
                            {area.partners.join(", ")}
                          </div>
                        </div>

                        <div className="text-center p-2 rounded-lg bg-zion-cyan/20 border border-zion-cyan/30">
                          <div className="text-zion-cyan font-bold text-sm">{area.funding}</div>
                          <div className="text-zion-slate-light text-xs">Research Funding</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Research Labs */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Research <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Labs</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchLabs.map((lab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onHoverStart={() => setHoveredLab(index)}
                onHoverEnd={() => setHoveredLab(null)}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-zion-cyan to-zion-purple mb-4 shadow-lg">
                  <TestTube className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2">{lab.name}</h4>
                <div className="text-zion-cyan text-sm mb-2">{lab.location}</div>
                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">{lab.focus}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                    <div className="text-zion-cyan font-bold text-sm">{lab.projects}</div>
                    <div className="text-zion-slate-light text-xs">Projects</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                    <div className="text-zion-cyan font-bold text-sm">{lab.researchers}</div>
                    <div className="text-zion-slate-light text-xs">Researchers</div>
                  </div>
                </div>

                <div className="text-zion-slate-light/80 text-xs">
                  <strong>Equipment:</strong> {lab.equipment}
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
                Join Our Research Community
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Collaborate with leading researchers, access cutting-edge facilities, and contribute to 
                breakthrough technologies that will shape the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                  Research Opportunities
                </button>
                <button className="px-8 py-3 bg-zion-blue-light/20 hover:bg-zion-blue-light/30 text-zion-cyan border border-zion-cyan/30 hover:border-zion-cyan/50 rounded-xl font-medium transition-all duration-300">
                  View Publications
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
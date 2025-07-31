
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
  "services": [
    {
      "id": "ai-development-001",
      "title": "AI Development Services",
      "category": "ai-talent",
      "description": "Expert AI developers specializing in machine learning, deep learning, and AI integration. Our team uses cutting-edge technologies to deliver intelligent solutions.",
      "price": "$150-500/hr",
      "rating": 4.9,
      "provider": "AI Solutions Pro",
      "features": [
        "Machine Learning",
        "Deep Learning",
        "AI Integration",
        "Custom Models"
      ],
      "technologies": [
        "Python",
        "TensorFlow",
        "PyTorch",
        "OpenAI API"
      ],
      "availability": "Available",
      "responseTime": "< 2 hours"
    },
    {
      "id": "cloud-infrastructure-001",
      "title": "Cloud Infrastructure Setup",
      "category": "it-services",
      "description": "Complete cloud infrastructure design and implementation. We specialize in AWS, Azure, and Google Cloud Platform solutions.",
      "price": "$2000-15000",
      "rating": 4.8,
      "provider": "CloudTech Experts",
      "features": [
        "AWS Setup",
        "Azure Configuration",
        "Google Cloud",
        "Security Implementation"
      ],
      "technologies": [
        "AWS",
        "Azure",
        "Google Cloud",
        "Terraform",
        "Docker"
      ],
      "availability": "Available",
      "responseTime": "< 4 hours"
    },
    {
      "id": "blockchain-integration-001",
      "title": "Blockchain Integration",
      "category": "innovation",
      "description": "Secure blockchain solutions for transparent transactions. We implement smart contracts and decentralized applications.",
      "price": "$3000-25000",
      "rating": 4.9,
      "provider": "BlockChain Solutions",
      "features": [
        "Smart Contracts",
        "DApps",
        "DeFi Integration",
        "Security Audits"
      ],
      "technologies": [
        "Ethereum",
        "Solidity",
        "Web3.js",
        "MetaMask"
      ],
      "availability": "Available",
      "responseTime": "< 6 hours"
    },
    {
      "id": "computing-equipment-001",
      "title": "High-Performance Computing Equipment",
      "category": "equipment",
      "description": "Latest GPU clusters and computing hardware for AI workloads. Enterprise-grade equipment for demanding computational tasks.",
      "price": "$5000-50000",
      "rating": 4.7,
      "provider": "TechHardware Plus",
      "features": [
        "GPU Clusters",
        "High-Performance CPUs",
        "Storage Solutions",
        "Networking"
      ],
      "technologies": [
        "NVIDIA GPUs",
        "AMD EPYC",
        "NVMe Storage",
        "InfiniBand"
      ],
      "availability": "In Stock",
      "responseTime": "< 24 hours"
    }
  ],
  "categories": [
    {
      "id": "ai-talent",
      "name": "AI Talent",
      "icon": "🤖",
      "description": "Expert AI developers and data scientists",
      "serviceCount": 45
    },
    {
      "id": "it-services",
      "name": "IT Services",
      "icon": "💻",
      "description": "Comprehensive IT solutions and support",
      "serviceCount": 78
    },
    {
      "id": "equipment",
      "name": "Equipment",
      "icon": "⚙️",
      "description": "High-performance computing hardware",
      "serviceCount": 32
    },
    {
      "id": "innovation",
      "name": "Innovation",
      "icon": "🚀",
      "description": "Cutting-edge technology solutions",
      "serviceCount": 56
    }
  ]
});
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

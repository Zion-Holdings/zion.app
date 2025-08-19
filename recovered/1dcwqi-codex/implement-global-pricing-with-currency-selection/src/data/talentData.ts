
import { TalentProfile } from "@/types/talent";

// Sample talent profiles with realistic data for the talent directory
export const TALENT_PROFILES: TalentProfile[] = [
  {
    id: "t-001",
    user_id: "user-001",
    full_name: "Alexandra Chen",
    professional_title: "Senior AI Engineer & Machine Learning Expert",
    profile_picture_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200",
    bio: "AI specialist with over 8 years of experience in computer vision and natural language processing. I've designed and implemented machine learning solutions for Fortune 500 companies across healthcare, finance, and retail sectors.",
    location: "Boston, MA",
    skills: ["Machine Learning", "TensorFlow", "Python", "Computer Vision", "NLP", "Data Science", "PyTorch", "Deep Learning"],
    hourly_rate: 150,
    years_experience: 8,
    average_rating: 4.9,
    rating_count: 43,
    availability_type: "full_time",
    is_verified: true,
    key_projects: [
      {
        title: "Facial Recognition System",
        description: "Built a state-of-the-art facial recognition system using deep learning for a major retail chain, improving security protocols and reducing losses by 32%."
      },
      {
        title: "Sentiment Analysis API",
        description: "Created an API for real-time sentiment analysis of customer feedback, processing over 50,000 reviews daily with 94% accuracy."
      }
    ]
  },
  {
    id: "t-002",
    user_id: "user-002",
    full_name: "Michael Reynolds",
    professional_title: "DevOps Specialist & Cloud Architect",
    profile_picture_url: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&h=200",
    bio: "Infrastructure automation expert with 10+ years of experience in containerization, CI/CD pipelines, and cloud-native architectures. I specialize in designing and implementing scalable, resilient, and secure cloud infrastructure on AWS, Azure, and GCP.",
    location: "Chicago, IL",
    skills: ["Kubernetes", "Docker", "AWS", "Terraform", "CI/CD", "Azure", "Python", "Infrastructure as Code"],
    hourly_rate: 135,
    years_experience: 10,
    average_rating: 4.8,
    rating_count: 37,
    availability_type: "part_time",
    is_verified: true,
    key_projects: [
      {
        title: "Cloud Migration & Modernization",
        description: "Led migration of a legacy monolithic application to a microservices architecture on AWS, reducing operational costs by 40% and improving deployment frequency."
      },
      {
        title: "DevOps Automation Pipeline",
        description: "Implemented comprehensive CI/CD pipelines using GitHub Actions, reducing deployment time from days to minutes and enabling 20+ deployments per day."
      }
    ]
  },
  {
    id: "t-003",
    user_id: "user-003",
    full_name: "Priya Sharma",
    professional_title: "Data Scientist & Statistical Analyst",
    profile_picture_url: "https://images.unsplash.com/photo-1580489944761-15a19d654955?auto=format&fit=crop&w=200&h=200", 
    bio: "PhD in Statistics with extensive experience in predictive modeling, data visualization, and business intelligence solutions. My work focuses on extracting actionable insights from complex datasets and developing statistical models that drive business decisions.",
    location: "Seattle, WA",
    skills: ["Statistical Analysis", "Python", "R", "Tableau", "SQL", "Machine Learning", "Data Visualization", "Predictive Modeling"],
    hourly_rate: 145,
    years_experience: 7,
    average_rating: 4.9,
    rating_count: 29,
    availability_type: "project",
    is_verified: false,
    key_projects: [
      {
        title: "Customer Segmentation Analysis",
        description: "Conducted advanced customer segmentation for an e-commerce client, leading to targeted marketing campaigns that increased conversion rates by 35%."
      },
      {
        title: "Sales Forecasting Model",
        description: "Developed time series forecasting models to predict seasonal sales patterns, resulting in 22% improvement in inventory management."
      }
    ]
  },
  {
    id: "t-004",
    user_id: "user-004",
    full_name: "James Wilson",
    professional_title: "Cybersecurity Expert & Ethical Hacker",
    profile_picture_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200",
    bio: "CISSP-certified security professional with 10+ years of experience in threat detection, incident response, and security architecture. I specialize in conducting penetration tests, security assessments, and implementing robust security controls across enterprise environments.",
    location: "Austin, TX",
    skills: ["Penetration Testing", "Security Analysis", "CISSP", "Risk Management", "Network Security", "Incident Response", "Security Architecture", "Cloud Security"],
    hourly_rate: 165,
    years_experience: 12,
    average_rating: 4.7,
    rating_count: 31,
    availability_type: "full_time",
    is_verified: true,
    key_projects: [
      {
        title: "Enterprise Security Assessment",
        description: "Conducted comprehensive security assessment for a financial institution, identifying and mitigating 24 critical vulnerabilities before they could be exploited."
      },
      {
        title: "Security Operations Center Design",
        description: "Designed and implemented a 24/7 security operations center for a healthcare provider, ensuring HIPAA compliance and protection of patient data."
      }
    ]
  },
  {
    id: "t-005",
    user_id: "user-005",
    full_name: "David Martinez",
    professional_title: "Full-Stack Developer & React Expert",
    profile_picture_url: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=200&h=200",
    bio: "Full-stack developer with 7+ years of experience specializing in React, Node.js, and modern JavaScript frameworks. I build scalable, responsive, and user-friendly web applications with a focus on performance optimization and clean code.",
    location: "Miami, FL",
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "GraphQL", "Next.js", "Redux", "AWS"],
    hourly_rate: 125,
    years_experience: 7,
    average_rating: 4.8,
    rating_count: 42,
    availability_type: "part_time",
    is_verified: false,
    key_projects: [
      {
        title: "E-Commerce Platform",
        description: "Developed a responsive e-commerce platform using React and Node.js, with features including user authentication, product catalog, shopping cart, and payment integration."
      },
      {
        title: "Real-Time Analytics Dashboard",
        description: "Built a real-time analytics dashboard using React, Socket.io, and D3.js, allowing clients to monitor business metrics with live updates and interactive visualizations."
      }
    ]
  },
  {
    id: "t-006",
    user_id: "user-006",
    full_name: "Sarah Johnson",
    professional_title: "AI Ethics Consultant & Policy Advisor",
    profile_picture_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200",
    bio: "Former tech policy advisor with expertise in AI ethics, governance frameworks, and responsible AI development. I help organizations develop and implement ethical guidelines for AI systems, ensuring fair and transparent use of machine learning technologies.",
    location: "Washington, DC",
    skills: ["AI Ethics", "Policy Development", "Risk Assessment", "Governance", "Responsible AI", "Compliance", "Stakeholder Engagement", "Research"],
    hourly_rate: 180,
    years_experience: 9,
    average_rating: 4.9,
    rating_count: 21,
    availability_type: "project",
    is_verified: true,
    key_projects: [
      {
        title: "Ethical AI Framework",
        description: "Developed a comprehensive ethical AI framework for a Fortune 100 company, establishing guidelines for responsible AI development and governance across their global operations."
      },
      {
        title: "Algorithmic Impact Assessment",
        description: "Conducted algorithmic impact assessments for public sector AI systems, ensuring fairness, transparency, and compliance with emerging regulatory requirements."
      }
    ]
  },
  {
    id: "t-007", 
    user_id: "user-007",
    full_name: "Daniel Kim",
    professional_title: "Computer Vision Engineer & Deep Learning Specialist",
    profile_picture_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200",
    bio: "Computer vision engineer with expertise in developing advanced visual recognition systems using deep learning. My work spans object detection, image classification, and video analysis for applications in retail, manufacturing, and autonomous systems.",
    location: "San Francisco, CA",
    skills: ["Computer Vision", "PyTorch", "TensorFlow", "Object Detection", "Image Processing", "C++", "CUDA", "Edge AI"],
    hourly_rate: 155,
    years_experience: 6,
    average_rating: 4.7,
    rating_count: 26,
    availability_type: "full_time",
    is_verified: true,
    key_projects: [
      {
        title: "Retail Analytics System",
        description: "Built a computer vision system for retail stores that analyzes customer behavior, tracks inventory, and provides real-time insights, increasing conversion rates by 18%."
      },
      {
        title: "Manufacturing Defect Detection",
        description: "Developed an automated visual inspection system that identifies manufacturing defects with 99.7% accuracy, reducing quality control costs by 45%."
      }
    ]
  },
  {
    id: "t-008",
    user_id: "user-008",
    full_name: "Olivia Rodriguez",
    professional_title: "Natural Language Processing Researcher",
    profile_picture_url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&h=200",
    bio: "PhD in Computational Linguistics with 8+ years of experience in NLP research and applications. I specialize in sentiment analysis, text generation, language understanding, and multilingual NLP systems for enterprise applications.",
    location: "Montreal, Canada",
    skills: ["Natural Language Processing", "BERT", "Transformers", "GPT", "Python", "Hugging Face", "Language Models", "Sentiment Analysis"],
    hourly_rate: 160,
    years_experience: 8,
    average_rating: 4.8,
    rating_count: 34,
    availability_type: "part_time",
    is_verified: true,
    key_projects: [
      {
        title: "Multilingual Customer Service AI",
        description: "Developed an NLP system supporting 14 languages for customer service applications, reducing response times by 62% and improving customer satisfaction scores."
      },
      {
        title: "Sentiment Analysis for Social Listening",
        description: "Created advanced sentiment analysis models for brand monitoring across social media platforms with nuanced emotion detection and competitor analysis."
      }
    ]
  },
  {
    id: "t-009",
    user_id: "user-009",
    full_name: "Robert Zhang",
    professional_title: "Quantum Machine Learning Researcher",
    profile_picture_url: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=200&h=200",
    bio: "Quantum computing researcher with focus on quantum machine learning algorithms and applications. My work bridges the gap between quantum computing theory and practical machine learning implementations for complex optimization problems.",
    location: "Toronto, Canada",
    skills: ["Quantum Computing", "Quantum Machine Learning", "Qiskit", "PennyLane", "Linear Algebra", "Python", "TensorFlow Quantum", "Optimization"],
    hourly_rate: 190,
    years_experience: 5,
    average_rating: 4.9,
    rating_count: 17,
    availability_type: "project",
    is_verified: false,
    key_projects: [
      {
        title: "Quantum Portfolio Optimization",
        description: "Implemented quantum algorithms for financial portfolio optimization, achieving a 27% improvement in risk-adjusted returns compared to classical methods."
      },
      {
        title: "Quantum ML for Drug Discovery",
        description: "Applied quantum machine learning techniques to accelerate pharmaceutical drug discovery processes, reducing computational time for molecular simulations by 65%."
      }
    ]
  },
  {
    id: "t-010",
    user_id: "user-010",
    full_name: "Emma Taylor",
    professional_title: "AI Product Manager & Strategy Consultant",
    profile_picture_url: "https://images.unsplash.com/photo-1573497019236-61938a1a2cd2?auto=format&fit=crop&w=200&h=200",
    bio: "Experienced product manager specializing in AI products and services. I bridge the gap between technical AI capabilities and business value, helping organizations define, develop, and deploy impactful machine learning solutions.",
    location: "London, UK",
    skills: ["Product Management", "AI Strategy", "User Research", "Go-to-Market", "Agile", "Analytics", "Stakeholder Management", "Product Roadmap"],
    hourly_rate: 140,
    years_experience: 9,
    average_rating: 4.8,
    rating_count: 39,
    availability_type: "full_time",
    is_verified: true,
    key_projects: [
      {
        title: "AI-Powered CRM Enhancement",
        description: "Led product development for an AI enhancement to a major CRM platform, increasing sales team productivity by 32% and improving lead conversion rates by 28%."
      },
      {
        title: "Predictive Analytics Platform",
        description: "Developed product strategy and roadmap for a B2B predictive analytics platform, growing client base by 215% within 18 months of launch."
      }
    ]
  },
  {
    id: "t-011",
    user_id: "user-011",
    full_name: "Marcus Johnson",
    professional_title: "Reinforcement Learning Engineer",
    profile_picture_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200",
    bio: "Specialist in reinforcement learning with applications in robotics, autonomous systems, and optimization problems. I develop RL algorithms that enable systems to learn optimal behaviors through interaction with their environment.",
    location: "Berlin, Germany",
    skills: ["Reinforcement Learning", "Deep RL", "PyTorch", "TensorFlow", "Robotics", "Simulation", "OpenAI Gym", "Multi-agent Systems"],
    hourly_rate: 150,
    years_experience: 6,
    average_rating: 4.7,
    rating_count: 23,
    availability_type: "part_time",
    is_verified: true,
    key_projects: [
      {
        title: "Autonomous Warehouse Robots",
        description: "Designed reinforcement learning algorithms for a fleet of autonomous warehouse robots, improving picking efficiency by 42% and reducing errors by 67%."
      },
      {
        title: "Energy Optimization System",
        description: "Developed an RL-based system for optimizing energy consumption in large commercial buildings, reducing energy costs by 29% while maintaining comfort levels."
      }
    ]
  },
  {
    id: "t-012",
    user_id: "user-012",
    full_name: "Sophia Lee",
    professional_title: "Healthcare AI Specialist & Medical Imaging Expert",
    profile_picture_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200",
    bio: "Medical imaging specialist with expertise in applying AI to healthcare challenges. I develop deep learning solutions for medical image analysis, diagnostics, and personalized treatment planning in clinical settings.",
    location: "Boston, MA",
    skills: ["Medical Imaging", "Healthcare AI", "Deep Learning", "CNN", "PyTorch", "DICOM", "Clinical Validation", "Regulatory Compliance"],
    hourly_rate: 170,
    years_experience: 8,
    average_rating: 4.9,
    rating_count: 27,
    availability_type: "project",
    is_verified: true,
    key_projects: [
      {
        title: "AI-Assisted Radiology Platform",
        description: "Developed a deep learning system for detecting abnormalities in chest X-rays with 97% sensitivity, reducing radiologist workload by 35% and improving early detection rates."
      },
      {
        title: "Cancer Treatment Response Prediction",
        description: "Created ML models that predict patient response to specific cancer treatments based on medical imaging data, improving treatment selection and patient outcomes."
      }
    ]
  },
  {
    id: "t-013",
    user_id: "user-013",
    full_name: "Isabella Garcia",
    professional_title: "Data Engineer & ETL Specialist",
    profile_picture_url: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=200&h=200",
    bio: "Data engineer with over 6 years of experience building scalable ETL pipelines and data warehouses across cloud platforms.",
    location: "Denver, CO",
    skills: ["ETL", "Python", "SQL", "Airflow", "AWS", "Data Warehousing", "BigQuery", "Spark"],
    hourly_rate: 130,
    years_experience: 6,
    average_rating: 4.7,
    rating_count: 18,
    availability_type: "full_time",
    is_verified: true,
    key_projects: [
      {
        title: "Cloud Data Warehouse Migration",
        description: "Led migration of on-premise data systems to a modern AWS Redshift warehouse reducing query times by 40%."
      },
      {
        title: "Streaming Analytics Pipeline",
        description: "Implemented real-time data ingestion with Kafka and Spark Streaming for ad analytics processing millions of events daily."
      }
    ]
  },
  {
    id: "t-014",
    user_id: "user-014",
    full_name: "Liam Turner",
    professional_title: "UI/UX Designer & Frontend Developer",
    profile_picture_url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&h=200",
    bio: "Creative designer focused on crafting intuitive user experiences and responsive interfaces for web and mobile apps.",
    location: "Portland, OR",
    skills: ["Figma", "React", "CSS", "User Research", "Prototyping", "Accessibility", "Design Systems", "Tailwind"],
    hourly_rate: 120,
    years_experience: 5,
    average_rating: 4.8,
    rating_count: 25,
    availability_type: "part_time",
    is_verified: false,
    key_projects: [
      {
        title: "E-learning Platform Redesign",
        description: "Redesigned UI for an online education startup leading to a 22% increase in user engagement."
      },
      {
        title: "Mobile Banking App",
        description: "Collaborated with developers to implement a clean and accessible interface for a fintech mobile app."
      }
    ]
  },
  {
    id: "t-015",
    user_id: "user-015",
    full_name: "Ethan Patel",
    professional_title: "Blockchain Developer",
    profile_picture_url: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&h=200",
    bio: "Developer specializing in smart contract development and decentralized applications on Ethereum and Solana.",
    location: "Austin, TX",
    skills: ["Solidity", "Rust", "Ethereum", "Web3.js", "Smart Contracts", "Solana", "Truffle", "IPFS"],
    hourly_rate: 150,
    years_experience: 4,
    average_rating: 4.6,
    rating_count: 12,
    availability_type: "project",
    is_verified: true,
    key_projects: [
      {
        title: "NFT Marketplace",
        description: "Built and deployed a full-stack NFT marketplace with custom smart contracts and IPFS storage."
      },
      {
        title: "DeFi Staking Platform",
        description: "Developed staking smart contracts audited for security and handling over $10M in locked value."
      }
    ]
  },
  {
    id: "t-016",
    user_id: "user-016",
    full_name: "Chloe Nguyen",
    professional_title: "Cloud Security Specialist",
    profile_picture_url: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=200&h=200",
    bio: "Certified security professional securing cloud-native infrastructures on AWS and GCP.",
    location: "Seattle, WA",
    skills: ["AWS", "GCP", "Security Auditing", "Terraform", "Kubernetes", "Compliance", "Incident Response", "DevSecOps"],
    hourly_rate: 160,
    years_experience: 7,
    average_rating: 4.9,
    rating_count: 31,
    availability_type: "full_time",
    is_verified: true,
    key_projects: [
      {
        title: "Container Security Initiative",
        description: "Implemented container scanning and runtime security across a fleet of Kubernetes clusters."
      },
      {
        title: "Multi-Cloud Compliance Automation",
        description: "Automated compliance checks for SOC2 and HIPAA across multiple cloud accounts using Terraform and policy-as-code."
      }
    ]
  },
  {
    id: "t-017",
    user_id: "user-017",
    full_name: "Noah Smith",
    professional_title: "Mobile App Developer",
    profile_picture_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200",
    bio: "Full-stack mobile developer with expertise in React Native and native iOS/Android development.",
    location: "New York, NY",
    skills: ["React Native", "iOS", "Android", "TypeScript", "Firebase", "GraphQL", "Redux", "App Store Deployment"],
    hourly_rate: 140,
    years_experience: 6,
    average_rating: 4.7,
    rating_count: 22,
    availability_type: "part_time",
    is_verified: false,
    key_projects: [
      {
        title: "Food Delivery App",
        description: "Developed cross-platform mobile app reaching over 100k downloads and maintaining 4.8 star store rating."
      },
      {
        title: "Fitness Tracking Platform",
        description: "Built Bluetooth-enabled workout tracking with real-time analytics and social features."
      }
    ]
  },
  {
    id: "t-018",
    user_id: "user-018",
    full_name: "Ava Williams",
    professional_title: "Data Analyst & Visualization Expert",
    profile_picture_url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&h=200",
    bio: "Data analyst turning complex datasets into actionable insights with interactive dashboards.",
    location: "Chicago, IL",
    skills: ["Tableau", "SQL", "Python", "Data Visualization", "PowerBI", "Data Cleaning", "Statistics", "Excel"],
    hourly_rate: 125,
    years_experience: 5,
    average_rating: 4.8,
    rating_count: 19,
    availability_type: "project",
    is_verified: true,
    key_projects: [
      {
        title: "Sales KPI Dashboard",
        description: "Created executive dashboards for tracking sales KPIs leading to 15% revenue growth."
      },
      {
        title: "Customer Churn Analysis",
        description: "Performed churn modeling and segmentation to help reduce customer attrition by 10%."
      }
    ]
  },
  {
    id: "t-019",
    user_id: "user-019",
    full_name: "William Chen",
    professional_title: "AI Research Scientist",
    profile_picture_url: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=200&h=200",
    bio: "Researcher exploring cutting-edge machine learning algorithms and publishing in top conferences.",
    location: "Boston, MA",
    skills: ["Deep Learning", "PyTorch", "Research", "Computer Vision", "NLP", "GANs", "Experimentation", "Python"],
    hourly_rate: 155,
    years_experience: 8,
    average_rating: 4.9,
    rating_count: 28,
    availability_type: "full_time",
    is_verified: true,
    key_projects: [
      {
        title: "Generative Adversarial Networks",
        description: "Developed novel GAN architectures for high-resolution image synthesis published at CVPR."
      },
      {
        title: "Multimodal Representation Learning",
        description: "Conducted research on combining vision and language models resulting in state-of-the-art benchmarks."
      }
    ]
  },
  {
    id: "t-020",
    user_id: "user-020",
    full_name: "Grace Lee",
    professional_title: "Technical Writer & Documentation Specialist",
    profile_picture_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200",
    bio: "Technical writer creating clear and concise documentation for developer tools and APIs.",
    location: "Remote",
    skills: ["Technical Writing", "API Docs", "Markdown", "Content Strategy", "Editing", "Developer Experience", "Git", "Docs-as-code"],
    hourly_rate: 110,
    years_experience: 7,
    average_rating: 4.8,
    rating_count: 16,
    availability_type: "project",
    is_verified: false,
    key_projects: [
      {
        title: "Open Source Library Docs",
        description: "Authored comprehensive documentation and tutorials for a popular open source framework."
      },
      {
        title: "API Reference Overhaul",
        description: "Redesigned developer portal and API reference improving onboarding satisfaction scores by 30%."
      }
    ]
  }
];

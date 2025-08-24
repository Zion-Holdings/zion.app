
import { ProfileData } from "@/types/profile";

// Mock talent profiles for development and testing
export const MOCK_TALENTS: ProfileData[] = [
  {
    id: "talent-1",
    name: "Alexandra Chen",
    title: "Senior AI Engineer & Machine Learning Expert",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200",
    coverImageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&h=600",
    bio: "AI specialist with over 8 years of experience in computer vision and natural language processing. I've designed and implemented machine learning solutions for Fortune 500 companies across healthcare, finance, and retail sectors. My expertise lies in developing custom neural network architectures and optimizing models for production environments. I excel at translating complex business problems into effective AI solutions that deliver measurable impact and ROI.",
    location: "Boston, MA",
    rating: 4.9,
    reviewCount: 43,
    aiScore: 97,
    profileType: "talent",
    skills: [
      { name: "Machine Learning", level: 5, endorsements: 38 },
      { name: "TensorFlow", level: 5, endorsements: 32 },
      { name: "Python", level: 5, endorsements: 45 },
      { name: "Computer Vision", level: 4, endorsements: 27 },
      { name: "NLP", level: 4, endorsements: 21 },
      { name: "Data Science", level: 5, endorsements: 39 },
      { name: "PyTorch", level: 4, endorsements: 18 },
      { name: "Deep Learning", level: 5, endorsements: 29 }
    ],
    projects: [
      {
        id: "p1",
        title: "Facial Recognition System",
        description: "Built a state-of-the-art facial recognition system using deep learning for a major retail chain, improving security protocols and reducing losses by 32%.",
        imageUrl: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?auto=format&fit=crop&w=600&h=400",
        tags: ["Computer Vision", "Deep Learning", "Python"],
        date: "Sep 2023"
      },
      {
        id: "p2",
        title: "Sentiment Analysis API",
        description: "Created an API for real-time sentiment analysis of customer feedback, processing over 50,000 reviews daily with 94% accuracy.",
        imageUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=600&h=400",
        tags: ["NLP", "API", "Python"],
        date: "May 2023"
      },
      {
        id: "p3",
        title: "Predictive Maintenance System",
        description: "Developed ML models to predict equipment failures before they occur for a manufacturing client, reducing downtime by 45% and saving approximately $2M annually.",
        imageUrl: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=600&h=400",
        tags: ["Predictive Analytics", "IoT", "Machine Learning"],
        date: "Dec 2022"
      }
    ],
    experience: [
      {
        id: "e1",
        role: "Senior AI Engineer",
        company: "Innovate AI",
        description: "Leading computer vision projects and mentoring junior engineers in deep learning techniques. Developed custom neural network architectures for image recognition and segmentation tasks.",
        startDate: "Mar 2021",
        endDate: "Present",
        current: true
      },
      {
        id: "e2",
        role: "Machine Learning Engineer",
        company: "TechGiant Inc.",
        description: "Developed and deployed ML models for product recommendation systems. Improved conversion rates by 28% through personalized customer experiences.",
        startDate: "Jun 2018",
        endDate: "Feb 2021"
      },
      {
        id: "e3",
        role: "Data Scientist",
        company: "DataCorp",
        description: "Analyzed large datasets to extract business insights and develop predictive models. Created automated reporting systems using Python and visualization tools.",
        startDate: "Aug 2016",
        endDate: "May 2018"
      }
    ],
    availability: {
      status: "available",
      message: "Open to new projects starting immediately. Prefer projects with 3+ month engagement.",
      availableHours: [
        { day: "Monday", hours: "10:00 AM - 6:00 PM" },
        { day: "Tuesday", hours: "10:00 AM - 6:00 PM" },
        { day: "Wednesday", hours: "10:00 AM - 6:00 PM" },
        { day: "Thursday", hours: "10:00 AM - 6:00 PM" },
        { day: "Friday", hours: "10:00 AM - 2:00 PM" }
      ]
    },
    hourlyRate: 150,
    contactEmail: "alexandra.chen@example.com"
  },
  {
    id: "talent-2",
    name: "Michael Reynolds",
    title: "DevOps Specialist & Cloud Architect",
    avatarUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&h=200",
    coverImageUrl: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?auto=format&fit=crop&w=1600&h=600",
    bio: "Infrastructure automation expert with 10+ years of experience in containerization, CI/CD pipelines, and cloud-native architectures. I specialize in designing and implementing scalable, resilient, and secure cloud infrastructure on AWS, Azure, and GCP. My expertise includes Kubernetes orchestration, infrastructure as code, and automating DevOps workflows to improve development velocity and operational efficiency.",
    location: "Chicago, IL",
    rating: 4.8,
    reviewCount: 37,
    aiScore: 92,
    profileType: "talent",
    skills: [
      { name: "Kubernetes", level: 5, endorsements: 28 },
      { name: "Docker", level: 5, endorsements: 31 },
      { name: "AWS", level: 5, endorsements: 35 },
      { name: "Terraform", level: 4, endorsements: 24 },
      { name: "CI/CD", level: 4, endorsements: 21 },
      { name: "Azure", level: 3, endorsements: 18 },
      { name: "Python", level: 3, endorsements: 16 },
      { name: "Infrastructure as Code", level: 5, endorsements: 26 }
    ],
    projects: [
      {
        id: "p1",
        title: "Cloud Migration & Modernization",
        description: "Led migration of a legacy monolithic application to a microservices architecture on AWS, reducing operational costs by 40% and improving deployment frequency.",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&h=400",
        tags: ["AWS", "Kubernetes", "Microservices"],
        date: "Nov 2023"
      },
      {
        id: "p2",
        title: "DevOps Automation Pipeline",
        description: "Implemented comprehensive CI/CD pipelines using GitHub Actions, reducing deployment time from days to minutes and enabling 20+ deployments per day.",
        imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&h=400",
        tags: ["CI/CD", "GitHub Actions", "DevOps"],
        date: "Jul 2023"
      }
    ],
    experience: [
      {
        id: "e1",
        role: "Lead DevOps Engineer",
        company: "CloudScale Solutions",
        description: "Architecting and implementing cloud-native infrastructure for enterprise clients. Leading a team of 5 DevOps engineers in building automated deployment pipelines and infrastructure management systems.",
        startDate: "Jun 2020",
        endDate: "Present",
        current: true
      },
      {
        id: "e2",
        role: "Senior Cloud Architect",
        company: "TechInfra Inc.",
        description: "Designed and implemented multi-cloud infrastructure solutions using AWS, Azure, and GCP. Reduced infrastructure costs by 35% while improving system reliability and performance.",
        startDate: "Feb 2017",
        endDate: "May 2020"
      }
    ],
    availability: {
      status: "limited",
      message: "Limited availability for short-term consulting projects and infrastructure assessments.",
      availableHours: [
        { day: "Monday", hours: "1:00 PM - 5:00 PM" },
        { day: "Wednesday", hours: "1:00 PM - 5:00 PM" },
        { day: "Friday", hours: "1:00 PM - 5:00 PM" }
      ]
    },
    hourlyRate: 135,
    contactEmail: "michael.reynolds@example.com"
  },
  {
    id: "talent-3",
    name: "Priya Sharma",
    title: "Data Scientist & Statistical Analyst",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200",
    coverImageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&h=600",
    bio: "PhD in Statistics with extensive experience in predictive modeling, data visualization, and business intelligence solutions. My work focuses on extracting actionable insights from complex datasets and developing statistical models that drive business decisions. I have particular expertise in time series analysis, A/B testing methodologies, and developing custom BI dashboards for executive teams.",
    location: "Seattle, WA",
    rating: 4.9,
    reviewCount: 29,
    aiScore: 95,
    profileType: "talent",
    skills: [
      { name: "Statistical Analysis", level: 5, endorsements: 22 },
      { name: "Python", level: 4, endorsements: 19 },
      { name: "R", level: 5, endorsements: 25 },
      { name: "Tableau", level: 5, endorsements: 20 },
      { name: "SQL", level: 4, endorsements: 18 },
      { name: "Machine Learning", level: 3, endorsements: 15 },
      { name: "Data Visualization", level: 5, endorsements: 21 },
      { name: "Predictive Modeling", level: 4, endorsements: 17 }
    ],
    projects: [
      {
        id: "p1",
        title: "Customer Segmentation Analysis",
        description: "Conducted advanced customer segmentation for an e-commerce client, leading to targeted marketing campaigns that increased conversion rates by 35%.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400",
        tags: ["Data Science", "Market Analysis", "R"],
        date: "Oct 2023"
      },
      {
        id: "p2",
        title: "Sales Forecasting Model",
        description: "Developed time series forecasting models to predict seasonal sales patterns, resulting in 22% improvement in inventory management.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400",
        tags: ["Time Series", "Forecasting", "Python"],
        date: "Apr 2023"
      },
      {
        id: "p3",
        title: "Executive Dashboard System",
        description: "Created interactive BI dashboards using Tableau to visualize KPIs and metrics for C-suite executives, improving data-driven decision making.",
        imageUrl: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?auto=format&fit=crop&w=600&h=400",
        tags: ["Tableau", "BI", "Data Visualization"],
        date: "Jan 2023"
      }
    ],
    experience: [
      {
        id: "e1",
        role: "Lead Data Scientist",
        company: "Analytics Insight Group",
        description: "Heading the data science team, developing predictive models and analytics solutions for clients across retail, healthcare, and financial services.",
        startDate: "Aug 2021",
        endDate: "Present",
        current: true
      },
      {
        id: "e2",
        role: "Senior Statistical Analyst",
        company: "DataDriven Consulting",
        description: "Conducted statistical analysis and designed experiments to extract insights from complex datasets. Created reporting dashboards and presented findings to executive stakeholders.",
        startDate: "May 2018",
        endDate: "Jul 2021"
      }
    ],
    availability: {
      status: "unavailable",
      nextAvailable: "June 15, 2025",
      message: "Currently committed to a long-term project until mid-June 2025.",
      availableHours: []
    },
    hourlyRate: 145,
    contactEmail: "priya.sharma@example.com"
  },
  {
    id: "talent-4",
    name: "James Wilson",
    title: "Cybersecurity Expert & Ethical Hacker",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200",
    coverImageUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1600&h=600",
    bio: "CISSP-certified security professional with 10+ years of experience in threat detection, incident response, and security architecture. I specialize in conducting penetration tests, security assessments, and implementing robust security controls across enterprise environments. My background includes securing critical infrastructure, responding to major security incidents, and training teams on security best practices.",
    location: "Austin, TX",
    rating: 4.7,
    reviewCount: 31,
    aiScore: 91,
    profileType: "talent",
    skills: [
      { name: "Penetration Testing", level: 5, endorsements: 23 },
      { name: "Security Analysis", level: 5, endorsements: 20 },
      { name: "CISSP", level: 5, endorsements: 19 },
      { name: "Risk Management", level: 4, endorsements: 15 },
      { name: "Network Security", level: 4, endorsements: 17 },
      { name: "Incident Response", level: 5, endorsements: 21 },
      { name: "Security Architecture", level: 4, endorsements: 16 },
      { name: "Cloud Security", level: 4, endorsements: 14 }
    ],
    projects: [
      {
        id: "p1",
        title: "Enterprise Security Assessment",
        description: "Conducted comprehensive security assessment for a financial institution, identifying and mitigating 24 critical vulnerabilities before they could be exploited.",
        imageUrl: "https://images.unsplash.com/photo-1562813733-b31f1c218a51?auto=format&fit=crop&w=600&h=400",
        tags: ["Security", "Finance", "Assessment"],
        date: "Dec 2023"
      },
      {
        id: "p2",
        title: "Security Operations Center Design",
        description: "Designed and implemented a 24/7 security operations center for a healthcare provider, ensuring HIPAA compliance and protection of patient data.",
        imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&h=400",
        tags: ["SOC", "Healthcare", "HIPAA"],
        date: "Aug 2023"
      }
    ],
    experience: [
      {
        id: "e1",
        role: "Chief Information Security Officer",
        company: "SecureTech Solutions",
        description: "Leading all aspects of information security strategy, governance, and operations. Managing a team of security professionals to protect digital assets and ensure regulatory compliance.",
        startDate: "Oct 2021",
        endDate: "Present",
        current: true
      },
      {
        id: "e2",
        role: "Senior Security Consultant",
        company: "CyberDefense Associates",
        description: "Provided expert security consulting services to clients across various industries. Conducted penetration testing, security audits, and vulnerability assessments.",
        startDate: "Jan 2019",
        endDate: "Sep 2021"
      }
    ],
    availability: {
      status: "available",
      message: "Available for security audits, penetration testing, and security strategy consulting.",
      availableHours: [
        { day: "Monday", hours: "9:00 AM - 5:00 PM" },
        { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
        { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
        { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
        { day: "Friday", hours: "9:00 AM - 5:00 PM" }
      ]
    },
    hourlyRate: 165,
    contactEmail: "james.wilson@example.com"
  },
  {
    id: "talent-5",
    name: "David Martinez",
    title: "Full-Stack Developer & React Expert",
    avatarUrl: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=200&h=200",
    coverImageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&h=600",
    bio: "Full-stack developer with 7+ years of experience specializing in React, Node.js, and modern JavaScript frameworks. I build scalable, responsive, and user-friendly web applications with a focus on performance optimization and clean code. My expertise includes SPA architecture, state management, server-side rendering, and integrating with various APIs and databases.",
    location: "Miami, FL",
    rating: 4.8,
    reviewCount: 42,
    aiScore: 89,
    profileType: "talent",
    skills: [
      { name: "React", level: 5, endorsements: 35 },
      { name: "Node.js", level: 4, endorsements: 30 },
      { name: "TypeScript", level: 5, endorsements: 32 },
      { name: "MongoDB", level: 4, endorsements: 28 },
      { name: "GraphQL", level: 4, endorsements: 25 },
      { name: "Next.js", level: 4, endorsements: 26 },
      { name: "Redux", level: 5, endorsements: 29 },
      { name: "AWS", level: 3, endorsements: 18 }
    ],
    projects: [
      {
        id: "p1",
        title: "E-Commerce Platform",
        description: "Developed a responsive e-commerce platform using React and Node.js, with features including user authentication, product catalog, shopping cart, and payment integration.",
        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&h=400",
        tags: ["React", "Node.js", "E-Commerce"],
        date: "Nov 2023"
      },
      {
        id: "p2",
        title: "Real-Time Analytics Dashboard",
        description: "Built a real-time analytics dashboard using React, Socket.io, and D3.js, allowing clients to monitor business metrics with live updates and interactive visualizations.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400",
        tags: ["React", "Analytics", "D3.js"],
        date: "Jul 2023"
      },
      {
        id: "p3",
        title: "SaaS Application",
        description: "Architected and developed a SaaS project management tool with React, GraphQL, and MongoDB, featuring team collaboration tools, task management, and reporting.",
        imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=600&h=400",
        tags: ["SaaS", "React", "GraphQL"],
        date: "Mar 2023"
      }
    ],
    experience: [
      {
        id: "e1",
        role: "Senior Frontend Developer",
        company: "TechSolutions Inc.",
        description: "Leading frontend development for multiple web applications, implementing modern React patterns, and optimizing application performance.",
        startDate: "May 2021",
        endDate: "Present",
        current: true
      },
      {
        id: "e2",
        role: "Full-Stack Developer",
        company: "WebInnovate",
        description: "Developed full-stack web applications using React, Node.js, and MongoDB. Collaborated closely with designers and product managers to deliver features on schedule.",
        startDate: "Jun 2018",
        endDate: "Apr 2021"
      }
    ],
    availability: {
      status: "limited",
      message: "Available for part-time projects only (up to 20 hours per week).",
      availableHours: [
        { day: "Tuesday", hours: "10:00 AM - 6:00 PM" },
        { day: "Thursday", hours: "10:00 AM - 6:00 PM" },
        { day: "Saturday", hours: "12:00 PM - 4:00 PM" }
      ]
    },
    hourlyRate: 125,
    contactEmail: "david.martinez@example.com"
  }
];

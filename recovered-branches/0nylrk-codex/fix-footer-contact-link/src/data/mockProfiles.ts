
import { ProfileData } from "@/types/profile";

export const MOCK_PROFILES: Record<string, ProfileData> = {
  "service-provider-1": {
    id: "service-provider-1",
    name: "TechSolutions Inc.",
    title: "Enterprise AI Integration Services",
    avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=200&h=200",
    coverImageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&h=600",
    bio: "Specializing in enterprise AI solutions with 10+ years of experience transforming businesses through technology.",
    location: "San Francisco, CA",
    rating: 4.9,
    reviewCount: 124,
    aiScore: 95,
    profileType: "service" as "service" | "talent",
    hourlyRate: 200,
    skills: [
      { name: "AI Integration", level: 5, endorsements: 87 },
      { name: "Machine Learning", level: 5, endorsements: 76 },
      { name: "Cloud Infrastructure", level: 4, endorsements: 62 },
      { name: "Enterprise Solutions", level: 5, endorsements: 93 },
      { name: "Data Engineering", level: 4, endorsements: 54 },
      { name: "API Development", level: 4, endorsements: 48 },
    ],
    projects: [
      {
        id: "p1",
        title: "Healthcare AI Platform",
        description: "Built an AI-powered system for medical diagnostics, reducing diagnosis time by 60%.",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&h=300",
        tags: ["Healthcare", "AI", "Machine Learning"],
        date: "Oct 2023"
      },
      {
        id: "p2",
        title: "Financial Analytics Suite",
        description: "Developed predictive models for investment analysis with 92% accuracy.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&h=300",
        tags: ["Finance", "Analytics", "Python"],
        date: "Jun 2023"
      },
      {
        id: "p3",
        title: "Supply Chain Optimization",
        description: "Implemented ML algorithms to optimize logistics, reducing costs by 28%.",
        imageUrl: "https://images.unsplash.com/photo-1566177229896-4b748c0fc9c6?auto=format&fit=crop&w=500&h=300",
        tags: ["Logistics", "Optimization", "AI"],
        date: "Jan 2023"
      }
    ],
    experience: [
      {
        id: "e1",
        role: "Enterprise AI Solutions Provider",
        company: "TechSolutions Inc.",
        description: "Leading a team of 25 engineers developing cutting-edge AI solutions for Fortune 500 companies, specializing in custom ML models and enterprise integration.",
        startDate: "Jan 2018",
        current: true
      },
      {
        id: "e2",
        role: "AI Research Partner",
        company: "Stanford AI Lab",
        description: "Collaborated with academic researchers to bring theoretical AI advances to practical business applications.",
        startDate: "Mar 2016",
        endDate: "Dec 2017"
      }
    ],
    availability: {
      status: "limited",
      nextAvailable: "Jun 15, 2024",
      message: "Currently booked for the next 3 weeks. Available for new projects starting mid-June.",
      availableHours: [
        { day: "Monday", hours: "9:00 AM - 5:00 PM" },
        { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
        { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
        { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
        { day: "Friday", hours: "9:00 AM - 3:00 PM" }
      ]
    }
  },
  "talent-1": {
    id: "talent-1",
    name: "Alexandra Chen",
    title: "Senior AI Engineer & Machine Learning Expert",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200",
    coverImageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&h=600",
    bio: "AI specialist with expertise in computer vision and natural language processing.",
    location: "Boston, MA",
    rating: 4.9,
    reviewCount: 43,
    aiScore: 97,
    profileType: "talent" as "service" | "talent",
    hourlyRate: 150,
    skills: [
      { name: "Machine Learning", level: 5, endorsements: 38 },
      { name: "TensorFlow", level: 5, endorsements: 32 },
      { name: "Python", level: 5, endorsements: 45 },
      { name: "Computer Vision", level: 4, endorsements: 27 },
      { name: "NLP", level: 4, endorsements: 21 },
      { name: "Data Science", level: 5, endorsements: 39 },
    ],
    projects: [
      {
        id: "p1",
        title: "Facial Recognition System",
        description: "Built a state-of-the-art facial recognition system using deep learning.",
        imageUrl: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?auto=format&fit=crop&w=500&h=300",
        tags: ["Computer Vision", "Deep Learning", "Python"],
        date: "Sep 2023"
      },
      {
        id: "p2",
        title: "Sentiment Analysis API",
        description: "Created an API for real-time sentiment analysis of customer feedback.",
        imageUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=500&h=300",
        tags: ["NLP", "API", "Python"],
        date: "May 2023"
      },
      {
        id: "p3",
        title: "Predictive Maintenance System",
        description: "Developed ML models to predict equipment failures before they occur.",
        imageUrl: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=500&h=300",
        tags: ["Predictive Analytics", "IoT", "Machine Learning"],
        date: "Dec 2022"
      }
    ],
    experience: [
      {
        id: "e1",
        role: "Senior AI Engineer",
        company: "Innovate AI",
        description: "Leading computer vision projects and mentoring junior engineers in deep learning techniques.",
        startDate: "Mar 2021",
        current: true
      },
      {
        id: "e2",
        role: "Machine Learning Engineer",
        company: "TechGiant Inc.",
        description: "Developed and deployed ML models for product recommendation systems.",
        startDate: "Jun 2018",
        endDate: "Feb 2021"
      },
      {
        id: "e3",
        role: "Data Scientist",
        company: "DataCorp",
        description: "Analyzed large datasets to extract business insights and develop predictive models.",
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
    }
  }
};

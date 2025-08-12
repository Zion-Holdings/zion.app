
import React from "react";
import { HelpCategory } from "./types";
import { HelpCircle, CreditCard, Users, Calendar, Briefcase } from 'lucide-react';






export const HELP_CATEGORIES: HelpCategory[] = [
  {
    id: "getting-started",
    name: "Getting Started",
    description: "Learn the basics of using the Zion AI Marketplace",
    icon: <HelpCircle className="h-6 w-6 text-zion-purple" />,
    articles: [
      {
        id: "create-account",
        title: "Creating your account",
        content: "Welcome to Zion AI Marketplace! This guide will walk you through the process of creating and setting up your account.\n\nTo create a new account on Zion AI Marketplace:\n\n1. Click on the 'Sign Up' button in the top-right corner of the homepage\n2. Enter your email address and create a strong password\n3. Select your account type (Client or Talent)\n4. Verify your email address by clicking the link sent to your inbox\n5. Complete your profile information\n\nOnce your account is created, you'll have access to the marketplace and can start browsing or listing services based on your account type.",
        lastUpdated: "2023-11-15",
        tags: ["account", "registration", "setup"]
      },
      {
        id: "complete-profile",
        title: "Completing your profile",
        content: "A complete profile helps you get the most out of Zion AI Marketplace. Follow these steps to set up your profile:\n\n1. Navigate to the Profile section from your dashboard\n2. Upload a professional profile picture\n3. Add your basic information including location and contact details\n4. Write a compelling bio that highlights your expertise or requirements\n5. For talent users: Add your skills, experience, and portfolio items\n6. For client users: Add information about your company or projects\n\nA complete profile increases your visibility on the platform and helps our AI matching system connect you with the right opportunities or talent.",
        lastUpdated: "2023-11-18",
        tags: ["profile", "setup"]
      },
      {
        id: "platform-navigation",
        title: "Navigating the platform",
        content: "The Zion AI Marketplace platform is designed to be intuitive and easy to navigate. Here's a quick overview of the main sections:\n\n• Home: Your personalized dashboard with recommended matches\n• Marketplace: Browse all available services and talent\n• Jobs: View open positions or post new job opportunities\n• Messages: Communicate with clients, talent, or support\n• Profile: Manage your personal or company information\n• Settings: Configure your account preferences and security options\n\nUse the search bar at the top of any page to quickly find specific services, talent, or content. The navigation menu adapts based on your account type to show the most relevant options.",
        lastUpdated: "2023-12-01",
        tags: ["navigation", "interface"]
      }
    ]
  },
  {
    id: "hiring",
    name: "Hiring Process",
    description: "How to find and hire talent on the platform",
    icon: <Briefcase className="h-6 w-6 text-zion-cyan" />,
    articles: [
      {
        id: "post-job",
        title: "Posting a job",
        content: "Posting a job on Zion AI Marketplace is quick and straightforward. Follow these steps to create an effective job posting:\n\n1. Click on the 'Post a Job' button from your dashboard\n2. Fill in the job title, category, and required skills\n3. Write a detailed description of the project or position\n4. Specify your budget range and timeline\n5. Add any specific requirements or qualifications\n6. Review and publish your listing\n\nFor best results, be as specific as possible about your requirements and expectations. Our AI matching system will use this information to connect you with the most qualified talent.",
        lastUpdated: "2023-10-25",
        tags: ["job", "hiring", "recruitment"]
      },
      {
        id: "ai-matching",
        title: "Using AI matching",
        content: "Zion's AI matching system is designed to connect you with the perfect talent for your needs. Here's how to make the most of this feature:\n\n1. Ensure your job posting is detailed and specific\n2. Navigate to the 'AI Matcher' section from your dashboard\n3. Review the automatically generated list of compatible talent\n4. Use filters to refine your search based on skills, experience, or availability\n5. Click on profiles to view detailed information about each candidate\n6. Save promising matches for future reference or reach out directly\n\nOur AI system considers not just skills and experience, but also work style compatibility, communication preferences, and past project success to suggest optimal matches.",
        lastUpdated: "2023-11-05",
        tags: ["ai", "matching", "recruitment"]
      },
      {
        id: "interview-scheduling",
        title: "Scheduling interviews",
        content: "Once you've identified potential talent for your project, scheduling interviews is the next step. Follow this process:\n\n1. From a talent profile, click the 'Schedule Interview' button\n2. Select your preferred date and time from the available slots\n3. Choose between video call, voice call, or text chat\n4. Add any specific topics you'd like to discuss\n5. Send the interview request\n\nThe talent will receive a notification and can confirm the interview or suggest alternative times. All interviews take place through our secure platform, with automatic recording and transcription available for future reference (with consent from both parties).",
        lastUpdated: "2023-11-20",
        tags: ["interview", "hiring", "scheduling"]
      },
      {
        id: "making-offer",
        title: "Making an offer",
        content: "After finding the right talent for your project, it's time to make an offer. Here's how to do it effectively:\n\n1. Navigate to the talent's profile\n2. Click the 'Make Offer' button\n3. Select the project type (fixed price or hourly)\n4. Define the scope of work clearly\n5. Specify the budget and timeline\n6. Set any milestones for payment\n7. Add any specific terms or requirements\n8. Review and send your offer\n\nThe talent will receive your offer and can accept, decline, or negotiate terms. Once both parties agree, our system will generate a simple contract to protect both sides.",
        lastUpdated: "2023-12-05",
        tags: ["offer", "contract", "negotiation"]
      }
    ]
  },
  {
    id: "profile-setup",
    name: "Profile Setup",
    description: "Optimize your profile for better visibility",
    icon: <Users className="h-6 w-6 text-zion-purple" />,
    articles: [
      {
        id: "talent-profile",
        title: "Setting up a talent profile",
        content: "Your profile is your professional identity on the Zion AI Marketplace. Follow these steps to create a profile that stands out:\n\n1. Upload a professional headshot\n2. Create a compelling headline that summarizes your expertise\n3. Write a detailed bio highlighting your experience and specialties\n4. Add your skills, rating your proficiency level for each\n5. Showcase your portfolio with examples of past work\n6. List your education and certifications\n7. Set your availability and preferred working hours\n8. Specify your rate range\n\nCompleteness is important - profiles with all sections filled out receive up to 30% more views and engagement from potential clients.",
        lastUpdated: "2023-10-15",
        tags: ["profile", "talent"]
      },
      {
        id: "client-profile",
        title: "Setting up a client profile",
        content: "A strong client profile helps attract high-quality talent to your projects. Follow these steps to set up your client profile:\n\n1. Add your company logo and brand colors\n2. Write a compelling company description\n3. Specify your industry and main focus areas\n4. Share information about your team size and structure\n5. Describe the types of projects you typically hire for\n6. Add links to your company website and social media\n7. Highlight any notable past projects or achievements\n\nA complete client profile builds trust with potential talent and increases the quality of applications you receive.",
        lastUpdated: "2023-10-20",
        tags: ["profile", "client"]
      },
      {
        id: "portfolio-creation",
        title: "Building an effective portfolio",
        content: "Your portfolio showcases your skills and previous work to potential clients. Here's how to create an impressive portfolio on Zion:\n\n1. Select 4-6 of your best and most relevant projects\n2. For each project, add a compelling title and brief description\n3. Include high-quality visuals (images, videos, or attachments)\n4. Explain your role and specific contributions to each project\n5. Highlight the technologies, tools, or methodologies used\n6. When possible, include metrics or results achieved\n7. Add client testimonials if available\n\nRegularly update your portfolio with new projects and remove outdated examples to keep your profile fresh and relevant.",
        lastUpdated: "2023-11-10",
        tags: ["portfolio", "projects", "showcase"]
      }
    ]
  },
  {
    id: "payments",
    name: "Payments",
    description: "Everything about payments and billing",
    icon: <CreditCard className="h-6 w-6 text-zion-cyan" />,
    articles: [
      {
        id: "payment-methods",
        title: "Accepted payment methods",
        content: "Zion AI Marketplace supports a variety of payment methods to accommodate users worldwide. Currently accepted payment methods include:\n\n• Credit Cards (Visa, Mastercard, American Express, Discover)\n• PayPal\n• Bank Transfers (ACH for US, SEPA for Europe)\n• Wire Transfers for international payments\n• Cryptocurrency (Bitcoin, Ethereum)\n\nTo add or update your payment method:\n1. Go to Settings > Billing & Payments\n2. Select 'Add Payment Method'\n3. Follow the prompts to enter your information\n4. Set your preferred default payment method\n\nAll payment information is securely encrypted and stored in compliance with PCI DSS standards.",
        lastUpdated: "2023-11-01",
        tags: ["payment", "billing", "finance"]
      },
      {
        id: "escrow-system",
        title: "How our escrow system works",
        content: "Zion's escrow system protects both clients and talent by ensuring secure and fair payments. Here's how it works:\n\n1. Client makes a payment into escrow when beginning a project\n2. Funds are held securely by Zion, not released to either party\n3. Talent begins work knowing that funds are secured\n4. Upon milestone or project completion, talent submits deliverables\n5. Client reviews and approves the work\n6. Funds are released from escrow to the talent\n\nIf any disputes arise, our resolution team will review the situation and determine the appropriate distribution of escrowed funds based on contract terms and delivered work.",
        lastUpdated: "2023-11-15",
        tags: ["escrow", "payment", "security"]
      },
      {
        id: "invoice-management",
        title: "Managing invoices and receipts",
        content: "Keeping track of your financial transactions on Zion is simple. Here's how to manage your invoices and receipts:\n\n1. Navigate to Settings > Billing & Payments > Invoices\n2. View a complete history of all transactions\n3. Filter by date range, project, or transaction type\n4. Download individual invoices or receipts as PDF files\n5. Generate financial reports for accounting purposes\n6. Set up automatic forwarding of invoices to your email or accounting system\n\nFor tax purposes, annual statements are also available summarizing all transaction activity for the calendar year. These can be accessed from the same section in January of the following year.",
        lastUpdated: "2023-12-01",
        tags: ["invoice", "receipt", "billing"]
      }
    ]
  },
  {
    id: "disputes",
    name: "Disputes",
    description: "How to handle and resolve contract disputes",
    icon: <Calendar className="h-6 w-6 text-zion-purple" />,
    articles: [
      {
        id: "file-dispute",
        title: "How to file a dispute",
        content: "If you encounter issues with a contract or project, you can use our dispute resolution system. Here's how to file a dispute:\n\n1. Navigate to the project in question from your dashboard\n2. Click the 'Issues' tab and select 'File a Dispute'\n3. Select the dispute category (payment, deliverables, communication, etc.)\n4. Provide a clear description of the issue\n5. Attach any relevant evidence (messages, deliverables, contract details)\n6. Submit your dispute\n\nOnce submitted, the other party will be notified and given 72 hours to respond. Our support team will be automatically notified of all disputes filed.",
        lastUpdated: "2023-11-05",
        tags: ["dispute", "resolution", "conflict"]
      },
      {
        id: "mediation-process",
        title: "The mediation process",
        content: "When disputes can't be resolved directly between parties, our mediation process helps find a fair solution. Here's how mediation works:\n\n1. After a dispute is filed, both parties have 72 hours to attempt direct resolution\n2. If unresolved, a mediator from our support team is assigned to the case\n3. The mediator reviews all details and evidence from both sides\n4. A mediation call is scheduled with all parties (optional but recommended)\n5. The mediator proposes a resolution based on contract terms and platform policies\n6. Both parties can accept the proposed resolution or request escalation\n\nMost disputes are successfully resolved during mediation, avoiding the need for further escalation.",
        lastUpdated: "2023-11-18",
        tags: ["mediation", "dispute", "resolution"]
      },
      {
        id: "dispute-prevention",
        title: "Tips for preventing disputes",
        content: "The best way to handle disputes is to prevent them from happening. Here are some best practices:\n\n1. Always create clear, detailed contracts with specific deliverables\n2. Break large projects into smaller milestones with clear acceptance criteria\n3. Maintain regular communication through the platform's messaging system\n4. Address concerns immediately rather than letting them accumulate\n5. Document all important decisions and changes to the original agreement\n6. Use the platform's time tracking tools for hourly projects\n7. Provide and request feedback throughout the project, not just at the end\n\nBy following these guidelines, you can significantly reduce the risk of disputes and ensure a smooth working relationship.",
        lastUpdated: "2023-12-05",
        tags: ["prevention", "best practices", "communication"]
      }
    ]
  }
];

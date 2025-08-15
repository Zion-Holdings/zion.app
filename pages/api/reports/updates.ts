import { NextApiRequest, NextApiResponse } from 'next';

interface ReportUpdate {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  url: string;
  tags: string[];
  readTime: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get query parameters
    const { category, limit = '10', page = '1' } = req.query;
    
    // Generate sample report data (in production, this would come from a database)
    const sampleReports: ReportUpdate[] = [
      {
        id: 'ai-automation-trends-q4-2024',
        title: 'AI Automation Trends Q4 2024',
        date: '2024-12-15',
        category: 'AI',
        summary: 'Latest developments in autonomous AI systems and cloud automation, including self-healing infrastructure and predictive maintenance.',
        url: '/reports/updates/ai-automation-trends-q4-2024',
        tags: ['AI', 'automation', 'cloud', 'trends'],
        readTime: 8
      },
      {
        id: 'cloud-infrastructure-optimization',
        title: 'Cloud Infrastructure Optimization Guide',
        date: '2024-12-14',
        category: 'Cloud',
        summary: 'Comprehensive guide to optimizing cloud costs, performance, and scalability across major cloud providers.',
        url: '/reports/updates/cloud-infrastructure-optimization',
        tags: ['cloud', 'optimization', 'cost', 'performance'],
        readTime: 12
      },
      {
        id: 'nextjs-performance-optimization',
        title: 'Next.js Performance Optimization',
        date: '2024-12-13',
        category: 'Development',
        summary: 'Advanced techniques for improving Next.js application performance, including bundle optimization and rendering strategies.',
        url: '/reports/updates/nextjs-performance-optimization',
        tags: ['Next.js', 'performance', 'optimization', 'React'],
        readTime: 15
      },
      {
        id: 'ai-market-trends-2024',
        title: 'AI Market Trends and Investment Landscape 2024',
        date: '2024-12-12',
        category: 'Industry',
        summary: 'Analysis of AI market trends, investment patterns, and emerging opportunities in the technology sector.',
        url: '/reports/updates/ai-market-trends-2024',
        tags: ['AI', 'market', 'trends', 'investment'],
        readTime: 10
      },
      {
        id: 'cybersecurity-best-practices',
        title: 'Cybersecurity Best Practices for Cloud Applications',
        date: '2024-12-11',
        category: 'Security',
        summary: 'Essential security practices for protecting cloud applications, including authentication, encryption, and monitoring.',
        url: '/reports/updates/cybersecurity-best-practices',
        tags: ['security', 'cybersecurity', 'cloud', 'best-practices'],
        readTime: 18
      },
      {
        id: 'machine-learning-production',
        title: 'Machine Learning in Production: Deployment Strategies',
        date: '2024-12-10',
        category: 'AI',
        summary: 'Practical strategies for deploying machine learning models in production environments with monitoring and scaling.',
        url: '/reports/updates/machine-learning-production',
        tags: ['ML', 'production', 'deployment', 'monitoring'],
        readTime: 20
      },
      {
        id: 'microservices-architecture',
        title: 'Microservices Architecture: Design Patterns and Best Practices',
        date: '2024-12-09',
        category: 'Architecture',
        summary: 'Comprehensive guide to designing and implementing microservices architecture with real-world examples.',
        url: '/reports/updates/microservices-architecture',
        tags: ['microservices', 'architecture', 'design-patterns'],
        readTime: 25
      },
      {
        id: 'data-analytics-tools',
        title: 'Modern Data Analytics Tools and Platforms',
        date: '2024-12-08',
        category: 'Data',
        summary: 'Overview of cutting-edge data analytics tools, platforms, and technologies for business intelligence.',
        url: '/reports/updates/data-analytics-tools',
        tags: ['data', 'analytics', 'BI', 'tools'],
        readTime: 14
      }
    ];

    // Filter by category if specified
    let filteredReports = sampleReports;
    if (category && typeof category === 'string') {
      filteredReports = sampleReports.filter(
        report => report.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Sort by date (newest first)
    filteredReports.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // Apply pagination
    const limitNum = parseInt(limit as string);
    const pageNum = parseInt(page as string);
    const startIndex = (pageNum - 1) * limitNum;
    const endIndex = startIndex + limitNum;
    const paginatedReports = filteredReports.slice(startIndex, endIndex);

    // Calculate pagination metadata
    const totalReports = filteredReports.length;
    const totalPages = Math.ceil(totalReports / limitNum);
    const hasNextPage = pageNum < totalPages;
    const hasPrevPage = pageNum > 1;

    return res.status(200).json({
      reports: paginatedReports,
      pagination: {
        currentPage: pageNum,
        totalPages,
        totalReports,
        hasNextPage,
        hasPrevPage,
        limit: limitNum
      },
      filters: {
        category: category || null,
        appliedFilters: category ? { category } : {}
      }
    });

  } catch (error) {
    console.error('Error fetching reports:', error);
    return res.status(500).json({ 
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
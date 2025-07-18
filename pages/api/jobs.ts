<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
  salary?: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  category?: string;
  sort: string;
  limit: number;
  postedAt: string;
}

interface JobsResponse {
  jobs: Job[];
  totalFiltered: number;
  limit: number;
  offset: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JobsResponse | { error: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      category,
      sort = 'newest',
      limit = '10',
      offset = '0'
    } = req.query;

    const limitNum = parseInt(limit as string, 10);
    const offsetNum = parseInt(offset as string, 10);

    // Validate parameters
    if (limitNum > 100) {
      return res.status(400).json({ error: 'Limit cannot exceed 100' });
    }

    // Mock data - replace with actual data source
    const mockJobs: Job[] = [
      {
        id: '1',
        title: 'Senior Software Engineer',
        company: 'Tech Corp',
        location: 'San Francisco, CA',
        description: 'We are looking for a senior software engineer...',
        requirements: ['React', 'Node.js', 'TypeScript'],
        salary: '$120k - $180k',
        type: 'full-time',
        category: 'engineering',
        sort: 'newest',
        limit: 10,
        postedAt: '2024-01-15'
      },
      // Add more mock jobs as needed
    ];

    // Filter by category if specified
    let filteredJobs = mockJobs;
    if (category) {
      filteredJobs = mockJobs.filter(job => job.category === category);
    }

    // Sort jobs
    const sortedJobs = [...filteredJobs].sort((a, b) => {
      switch (sort) {
        case 'newest':
          return new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime();
        case 'oldest':
          return new Date(a.postedAt).getTime() - new Date(b.postedAt).getTime();
        default:
          return 0;
      }
    });

    // Paginate results
    const paginatedJobs = sortedJobs.slice(offsetNum, offsetNum + limitNum);

    // Example: const jobs = await fetchJobsFromDataSource();
    // return filterAndSortJobs(jobs, { ...params, limit: limitNum, offset: offsetNum });

    // Add performance and metadata headers
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
    res.setHeader('X-Total-Count', filteredJobs.length.toString());

    const result = {
      jobs: paginatedJobs,
      count: filteredJobs.length,
      limit: limitNum,
      offset: offsetNum,
    };

    return res.status(200).json(result);
  } catch (error) {
    console.error('Jobs API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
=======
import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const Jobs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jobs - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Jobs</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Jobs content will go here */}
        </div>
      </div>
    </>
  );
};

export default Jobs;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae

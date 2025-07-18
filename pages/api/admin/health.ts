<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next;
import { errorReportingDashboard, type HealthData } from '@/utils/errorReportingDashboard;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger;

interface HealthApiResponse {
  health: HealthData;
  success: boolean;
  error?: string;
  timestamp: string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthApiResponse>
) {
  const timestamp = new Date().toISOString();

  try {
    const { method } = req;

    if (method !== 'GET') {
      return res.status(405).json({
        health: {} as HealthData,
        success: false,
        error: 'Method not allowed',
        timestamp
      });

    logInfo('Health check API called');

    const healthData = await errorReportingDashboard.getHealthStatus();

    res.status(200).json({
      health: healthData,
      success: true,
      timestamp
    });
  } catch (error) {
    logErrorToProduction('Health check API error:', error);

    res.status(500).json({
      health: {} as HealthData,
      success: false,
      error: 'Internal server error',
      timestamp
    });


=======
import React from 'react;
import { NextPage } from 'next;
import Head from 'next/head;

const Health: NextPage = () => {
  return (
    <>
      <Head>
        <title>Health - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Health</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Health content will go here */}
        </div>
      </div>
    </>
  );
};

export default Health;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae

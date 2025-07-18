<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger;
import { enhancedErrorCollector } from '@/utils/enhancedErrorCollection;
import { systemHealthMonitor } from '@/utils/systemHealthMonitor;
import { logDashboard } from '@/utils/logDashboard;
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import { enhancedErrorCollector } from '@/utils/enhancedErrorCollection';
import { systemHealthMonitor } from '@/utils/systemHealthMonitor';
import { logDashboard } from '@/utils/logDashboard';
>>>>>>> f10a9a3721b4a88e659d4312a2d38b499e614b6c

interface ErrorMonitoringResponse {
  success: boolean;
  data?: unknown;
  error?: string;
  timestamp: string;

async function handleGet(
  req: NextApiRequest,
  res: NextApiResponse<ErrorMonitoringResponse>,
  action: string
) {
  const timestamp = new Date().toISOString();

  try {
    switch (action) {
      case 'errors':
        const errors = await enhancedErrorCollector.getRecentErrors();
        res.status(200).json({
          success: true,
          data: errors,
          timestamp
        });
        break;

      case 'health':
        const health = await systemHealthMonitor.getStatus();
        res.status(200).json({
          success: true,
          data: health,
          timestamp
        });
        break;

      case 'logs':
        const logs = await logDashboard.getRecentLogs();
        res.status(200).json({
          success: true,
          data: logs,
          timestamp
        });
        break;

      default:
        res.status(400).json({
          success: false,
          error: 'Invalid action',
          timestamp
        });

  } catch (error) {
    logErrorToProduction('Error in GET error monitoring:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      timestamp
    });


async function handlePost(
  req: NextApiRequest,
  res: NextApiResponse<ErrorMonitoringResponse>,
  action: string
) {
  const timestamp = new Date().toISOString();

  try {
    switch (action) {
      case 'clear-errors':
        await enhancedErrorCollector.clearErrors();
        res.status(200).json({
          success: true,
          message: 'Errors cleared successfully',
          timestamp
        });
        break;

      default:
        res.status(400).json({
          success: false,
          error: 'Invalid action',
          timestamp
        });

  } catch (error) {
    logErrorToProduction('Error in POST error monitoring:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      timestamp
    });


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorMonitoringResponse>
) {
  const timestamp = new Date().toISOString();

  try {
    const { method, query } = req;
    const action = (query as Record<string, unknown>).action as string;

    logInfo('Error monitoring API called', { method, action });

    switch (method) {
      case 'GET':
        await handleGet(req, res, action);
        break;

      case 'POST':
        await handlePost(req, res, action);
        break;

      default:
        res.status(405).json({
          success: false,
          error: 'Method not allowed',
          timestamp
        });

  } catch (error) {
    logErrorToProduction('Error monitoring API error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      timestamp
    });
<<<<<<< HEAD


=======
import React from 'react;
import { NextPage } from 'next;
import Head from 'next/head;

const ErrorMonitoring: NextPage = () => {
  return (
    <>
      <Head>
        <title>ErrorMonitoring - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">ErrorMonitoring</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* ErrorMonitoring content will go here */}
        </div>
      </div>
    </>
  );
};

export default ErrorMonitoring;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
=======
  }
}
>>>>>>> f10a9a3721b4a88e659d4312a2d38b499e614b6c

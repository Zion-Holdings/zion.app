<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next;
import fs from 'fs;
import path from 'path;
import { logErrorToProduction } from '@/utils/productionLogger;

interface LogEntry {
  id: string;
  timestamp: string;
  level: 'debug' | 'info' | 'warn' | 'error' | 'critical;
  message: string;
  context?: Record<string, unknown>;

interface LogsResponse {
  success: boolean;
  logs?: LogEntry[];
  error?: string;
  timestamp: string;

function parseLogLine(line: string): LogEntry | null {
  try {
    // Basic log parsing - adjust based on your log format
    const match = line.match(/^\[(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z)\] \[(\w+)\] (.+)$/);
    if (!match) return null;

    const [, timestamp, level, message] = match;
    return {
      id: `${timestamp}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp,
      level: level as LogEntry['level'],
      message: message.trim()
    };
  } catch {
    return null;


async function readLogFile(filePath: string): Promise<LogEntry[]> {
  try {
    if (!fs.existsSync(filePath)) {
      return [];

    const content = await fs.promises.readFile(filePath, 'utf-8');
    const lines = content.split('\n').filter(line => line.trim());
    
    return lines
      .map(parseLogLine)
      .filter((entry): entry is LogEntry => entry !== null)
      .slice(-100); // Get last 100 entries
  } catch (error) {
    logErrorToProduction('Error reading log file:', error);
    return [];


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LogsResponse>
) {
  const timestamp = new Date().toISOString();

  try {
    const { method, query } = req;

    if (method !== 'GET') {
      return res.status(405).json({
        success: false,
        error: 'Method not allowed',
        timestamp
      });

    const logType = (query.type as string) || 'app;`
    const logPath = path.join(process.cwd(), 'logs', `${logType}.log`);

    const logs = await readLogFile(logPath);

    res.status(200).json({
      success: true,
      logs,
      timestamp
    });
  } catch (error) {
    logErrorToProduction('Logs API error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      timestamp
    });


=======
import React from 'react;
import { NextPage } from 'next;
import Head from 'next/head;

const Logs: NextPage = () => {
  return (
    <>
      <Head>
        <title>System Logs - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">System Logs</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Logs content will go here */}
        </div>
      </div>
    </>
  );
};

export default Logs;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
`
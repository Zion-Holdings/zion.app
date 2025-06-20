import { exec } from 'child_process';
import crypto from 'crypto';
import path from 'path';
import { PrismaClient, ErrorAnalysisStatus } from '@prisma/client';
import { captureException } from '../../src/utils/sentry'; // Adjusted path
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';

const prisma = new PrismaClient();
const CODEX_SCRIPT_PATH = path.resolve(process.cwd(), 'scripts/codex-bug-fix.js');

interface ErrorDetails {
  message: string;
  stack: string;
  componentStack?: string;
  url?: string;
  source?: string;
  timestamp: number; // Assuming timestamp is a number (e.g., Date.now())
  userAgent?: string;
}

interface CodexOutput {
  explanation: string;
  suggestedFixCode: string;
  impactAssessment: string;
  model?: string;
}

function generateErrorSignature(errorDetails: Pick<ErrorDetails, 'message' | 'stack'>): string {
  const { message, stack } = errorDetails;
  let signatureData = message || '';
  if (stack) {
    const stackLines = stack.split('\n');
    const significantLines = stackLines.slice(1, 5).map(line => {
      return line.replace(/\(.*\)/, '').replace(/at .*(\/|\\)/, '').trim();
    });
    signatureData += significantLines.join('\n');
  }
  return crypto.createHash('md5').update(signatureData).digest('hex');
}

function formulateCodexPrompt(errorDetails: ErrorDetails, signature: string): string {
  const { message, stack, componentStack, url, source, timestamp } = errorDetails;
  let prompt = `Analyze the following JavaScript error and provide a potential fix.\n`;
  prompt += `Error Signature: ${signature}\n`;
  prompt += `Source: ${source || 'N/A'}\n`;
  prompt += `URL: ${url || 'N/A'}\n`;
  prompt += `Timestamp: ${new Date(timestamp).toISOString()}\n\n`;
  prompt += `Error Message: ${message}\n\n`;

  if (stack) {
    prompt += `Stack Trace:\n${stack}\n\n`;
  } else {
    prompt += `Stack Trace: N/A\n\n`;
  }

  if (componentStack) {
    prompt += `Component Stack:\n${componentStack}\n\n`;
  } else {
    prompt += `Component Stack: N/A\n\n`;
  }

  prompt += `Please provide your analysis as a JSON object with the following fields:\n`;
  prompt += `- "explanation": (string) A concise explanation of the likely cause of this error.\n`;
  prompt += `- "suggestedFixCode": (string) A code snippet for the suggested fix. If no specific code fix is applicable, provide a general approach.\n`;
  prompt += `- "impactAssessment": (string) A brief assessment of potential side effects of the suggested fix, or areas that need careful testing.\n\n`;
  prompt += `Return ONLY the JSON object.`;
  return prompt;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
  }

  console.log('Received error report request');
  const errorDetails = req.body as ErrorDetails; // Type assertion for req.body

  if (!errorDetails || typeof errorDetails !== 'object' || !errorDetails.message || !errorDetails.stack) {
    console.error('Invalid error report: Missing body, message, or stack.', errorDetails);
    res.status(400).json({ error: 'Invalid request body: message and stack are required.' });
    return;
  }

  // Log to Sentry
  const errorForSentry = new Error(errorDetails.message);
  errorForSentry.stack = errorDetails.stack;
  // Pass all errorDetails, and specify source context
  captureException(errorForSentry, { extra: { ...errorDetails, sourceContext: 'pages/api/log-error' } });
  console.log('Error reported to Sentry');

  const errorSignature = generateErrorSignature(errorDetails);
  console.log(`Generated error signature: ${errorSignature}`);

  let dbRecordId: string | undefined; // dbRecord.id is a string
  let formulatedPrompt: string | undefined;

  try {
    let dbRecord = await prisma.errorAnalysisSuggestion.findUnique({
      where: { error_signature: errorSignature },
    });

    if (dbRecord) {
      console.log(`Recurring error found (ID: ${dbRecord.id}, Signature: ${errorSignature}). Updating count.`);
      dbRecord = await prisma.errorAnalysisSuggestion.update({
        where: { error_signature: errorSignature },
        data: {
          occurrence_count: { increment: 1 },
          last_seen_at: new Date(),
        },
      });
    } else {
      console.log(`New error (Signature: ${errorSignature}). Creating record.`);
      dbRecord = await prisma.errorAnalysisSuggestion.create({
        data: {
          error_signature: errorSignature,
          error_message: errorDetails.message,
          stack_trace: errorDetails.stack,
          component_stack: errorDetails.componentStack,
          url: errorDetails.url || '',
          source: errorDetails.source || '',
          user_agent: errorDetails.userAgent,
          status: ErrorAnalysisStatus.NEW,
          first_seen_at: new Date(errorDetails.timestamp),
          occurrence_count: 1,
        },
      });
      console.log(`New error record created (ID: ${dbRecord.id})`);
    }
    dbRecordId = dbRecord.id;

    formulatedPrompt = formulateCodexPrompt(errorDetails, errorSignature);
    console.log(`Formulated Codex prompt (ID: ${dbRecordId}, first 100 chars): ${formulatedPrompt.substring(0, 100)}...`);

    res.status(202).json({ success: true, message: 'Error report received, analysis initiated.', signature: errorSignature, dbId: dbRecordId });

    console.log(`Executing Codex script for DB record ID: ${dbRecordId}`);
    // Ensure prompt is correctly escaped for command line, using base64 is a robust way
    const command = `node "${CODEX_SCRIPT_PATH}" --prompt "${Buffer.from(formulatedPrompt).toString('base64')}"`;

    exec(command, async (execError, stdout, stderr) => {
      if (!dbRecordId) { // Type guard
          console.error("dbRecordId is not defined in exec callback");
          return;
      }
      try {
        if (execError) {
          console.error(`Error executing Codex script (ID: ${dbRecordId}): ${execError.message}`, { stderrPartial: stderr ? stderr.substring(0, 500) : null });
          await prisma.errorAnalysisSuggestion.update({
            where: { id: dbRecordId },
            data: {
              codex_prompt: formulatedPrompt,
              analysis_error: `Exec error: ${execError.message}. Stderr: ${stderr ? stderr.substring(0, 1000) : ''}`,
              status: ErrorAnalysisStatus.ANALYZED,
            },
          });
          return;
        }

        if (stderr) {
          console.warn(`Codex script STDERR (ID: ${dbRecordId}): ${stderr}`);
          let scriptErrorOutput = { error: "Unknown error from script stderr." };
          try {
            scriptErrorOutput = JSON.parse(stderr);
          } catch (parseError: any) {
            console.error(`Failed to parse stderr JSON from Codex script (ID: ${dbRecordId}): ${parseError.message}`);
            scriptErrorOutput.error = `Non-JSON stderr: ${stderr.substring(0,1000)}`;
          }
          await prisma.errorAnalysisSuggestion.update({
            where: { id: dbRecordId },
            data: {
              codex_prompt: formulatedPrompt,
              analysis_error: scriptErrorOutput.error,
              status: ErrorAnalysisStatus.ANALYZED,
            },
          });
          return;
        }

        console.log(`Codex script STDOUT (ID: ${dbRecordId}, first 100 chars): ${stdout.substring(0, 100)}...`);
        let parsedOutput: CodexOutput;
        try {
          parsedOutput = JSON.parse(stdout) as CodexOutput;

          if (!parsedOutput.explanation || !parsedOutput.suggestedFixCode || !parsedOutput.impactAssessment) {
            const missingFields = (['explanation', 'suggestedFixCode', 'impactAssessment'] as (keyof CodexOutput)[]).filter(f => !parsedOutput[f]);
            throw new Error(`Missing required fields in Codex output: ${missingFields.join(', ')}`);
          }

        } catch (parseError: any) {
          console.error(`Failed to parse or validate stdout JSON from Codex script (ID: ${dbRecordId}): ${parseError.message}`, { stdoutPreview: stdout.substring(0,1000) });
          await prisma.errorAnalysisSuggestion.update({
            where: { id: dbRecordId },
            data: {
              codex_prompt: formulatedPrompt,
              analysis_error: `Failed to parse or validate script output: ${parseError.message}. Output preview: ${stdout.substring(0,1000)}`,
              status: ErrorAnalysisStatus.ANALYZED,
            },
          });
          return;
        }

        await prisma.errorAnalysisSuggestion.update({
          where: { id: dbRecordId },
          data: {
            codex_prompt: formulatedPrompt,
            codex_explanation: parsedOutput.explanation,
            codex_suggested_fix_code: parsedOutput.suggestedFixCode,
            codex_impact_assessment: parsedOutput.impactAssessment,
            codex_suggestion: parsedOutput.suggestedFixCode,
            codex_model: parsedOutput.model,
            status: ErrorAnalysisStatus.FIX_SUGGESTED,
            analysis_error: null,
          },
        });
        console.log(`Successfully processed and stored structured Codex suggestion for ID: ${dbRecordId}`);

      } catch (dbUpdateError: any) {
        console.error(`Failed to update DB record ${dbRecordId} after Codex script execution:`, dbUpdateError);
      }
    });

  } catch (error: any) {
    console.error('log-error API critical error during initial processing:', error.message, error.stack);
    const resWithHeaders = res as NextApiResponse & { headersSent?: boolean };
    if (!resWithHeaders.headersSent) {
      resWithHeaders.status(500).json({ error: 'Server error during error processing.' });
    }
  }
}

export default withErrorLogging(handler);

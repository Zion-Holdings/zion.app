const { exec } = require('child_process');
const crypto = require('crypto');
const path = require('path');
const { PrismaClient, ErrorAnalysisStatus } = require('@prisma/client'); // Ensure ErrorAnalysisStatus is imported if you use string literals from it.
const { captureException } = require('../src/utils/sentry');

const prisma = new PrismaClient();
const CODEX_SCRIPT_PATH = path.resolve(process.cwd(), 'scripts/codex-bug-fix.js');

function generateErrorSignature(errorDetails) {
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

function formulateCodexPrompt(errorDetails, signature) {
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

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
  }

  console.log('Received error report request');
  const errorDetails = req.body;

  if (!errorDetails || typeof errorDetails !== 'object' || !errorDetails.message || !errorDetails.stack) {
    console.error('Invalid error report: Missing body, message, or stack.', errorDetails);
    res.status(400).json({ error: 'Invalid request body: message and stack are required.' });
    return;
  }

  // Log to Sentry
  const errorForSentry = new Error(errorDetails.message);
  errorForSentry.stack = errorDetails.stack;
  captureException(errorForSentry, { extra: { ...errorDetails, sourceContext: 'api/log-error' } });
  console.log('Error reported to Sentry');

  const errorSignature = generateErrorSignature(errorDetails);
  console.log(`Generated error signature: ${errorSignature}`);

  let dbRecordId;
  let formulatedPrompt; // Define here to be accessible in exec callback

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
          last_seen_at: new Date(), // Prisma handles @updatedAt
          // Reset status to NEW or ANALYZED if we want to re-analyze recurring issues.
          // For now, let's assume it might get re-analyzed based on current logic.
          // status: ErrorAnalysisStatus.NEW // Optional: reset status
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
          url: errorDetails.url,
          source: errorDetails.source,
          user_agent: errorDetails.userAgent,
          status: ErrorAnalysisStatus.NEW,
          first_seen_at: new Date(errorDetails.timestamp),
          occurrence_count: 1,
        },
      });
      console.log(`New error record created (ID: ${dbRecord.id})`);
    }
    dbRecordId = dbRecord.id;

    // Formulate prompt after DB interaction in case we want to include dbRecord.id or other info
    formulatedPrompt = formulateCodexPrompt(errorDetails, errorSignature);
    console.log(`Formulated Codex prompt (ID: ${dbRecordId}, first 100 chars): ${formulatedPrompt.substring(0, 100)}...`);

    // Respond quickly
    res.status(202).json({ success: true, message: 'Error report received, analysis initiated.', signature: errorSignature, dbId: dbRecordId });

    // Execute Codex script asynchronously
    console.log(`Executing Codex script for DB record ID: ${dbRecordId}`);
    const command = `node "${CODEX_SCRIPT_PATH}" --prompt "${Buffer.from(formulatedPrompt).toString('base64')}"`;

    exec(command, async (execError, stdout, stderr) => {
      try {
        if (execError) {
          console.error(`Error executing Codex script (ID: ${dbRecordId}): ${execError.message}`, { stderrPartial: stderr ? stderr.substring(0, 500) : null });
          await prisma.errorAnalysisSuggestion.update({
            where: { id: dbRecordId },
            data: {
              codex_prompt: formulatedPrompt,
              analysis_error: `Exec error: ${execError.message}. Stderr: ${stderr ? stderr.substring(0, 1000) : ''}`,
              status: ErrorAnalysisStatus.ANALYZED, // Indicates analysis attempted but failed
            },
          });
          return;
        }

        if (stderr) {
          // Codex script should output JSON error to stderr if it fails internally
          console.warn(`Codex script STDERR (ID: ${dbRecordId}): ${stderr}`);
          let scriptErrorOutput = { error: "Unknown error from script stderr." };
          try {
            scriptErrorOutput = JSON.parse(stderr); // Expecting JSON error structure
          } catch (parseError) {
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
        let parsedOutput;
        try {
          parsedOutput = JSON.parse(stdout);

          // Validate required fields
          if (!parsedOutput.explanation || !parsedOutput.suggestedFixCode || !parsedOutput.impactAssessment) {
            const missingFields = ['explanation', 'suggestedFixCode', 'impactAssessment'].filter(f => !parsedOutput[f]);
            // Ensure model is checked if it's considered mandatory, or handle its absence gracefully later
            // For now, only validating the core three.
            throw new Error(`Missing required fields in Codex output: ${missingFields.join(', ')}`);
          }

        } catch (parseError) {
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

        // If parsing and validation succeeded
        await prisma.errorAnalysisSuggestion.update({
          where: { id: dbRecordId },
          data: {
            codex_prompt: formulatedPrompt,
            codex_explanation: parsedOutput.explanation,
            codex_suggested_fix_code: parsedOutput.suggestedFixCode,
            codex_impact_assessment: parsedOutput.impactAssessment,
            codex_suggestion: parsedOutput.suggestedFixCode, // Populating old field as per instruction
            codex_model: parsedOutput.model, // Assuming model is still part of the output, will be null if not
            status: ErrorAnalysisStatus.FIX_SUGGESTED,
            analysis_error: null,
          },
        });
        console.log(`Successfully processed and stored structured Codex suggestion for ID: ${dbRecordId}`);

      } catch (dbUpdateError) {
        console.error(`Failed to update DB record ${dbRecordId} after Codex script execution:`, dbUpdateError);
        // This error won't go to the client, as response is already sent. Log it thoroughly.
      }
    });

  } catch (error) { // Catches errors from initial Prisma interaction or other sync code
    console.error('log-error API critical error during initial processing:', error.message, error.stack);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Server error during error processing.' });
    }
  }
}

module.exports = handler;

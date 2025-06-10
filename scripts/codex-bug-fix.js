#!/usr/bin/env node
import process from 'process';
import arg from 'arg'; // Using 'arg' for argument parsing

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const MODEL_TO_USE = 'gpt-4o'; // Define model to use

function printErrorAndExit(errorMessage, promptContent = null, exitCode = 1) {
  const errorOutput = {
    success: false,
    error: errorMessage,
  };
  if (promptContent) {
    errorOutput.prompt = promptContent;
  }
  console.error(JSON.stringify(errorOutput, null, 2));
  process.exit(exitCode);
}

if (!OPENAI_API_KEY) {
  printErrorAndExit('Missing OPENAI_API_KEY environment variable');
}

let args;
try {
  args = arg({
    '--prompt': String, // --prompt should be a string
    '-p': '--prompt',   // Alias -p for --prompt
  });
} catch (err) {
  printErrorAndExit(`Error parsing arguments: ${err.message}\nUsage: node scripts/codex-bug-fix.js --prompt "<base64_encoded_prompt>"`);
}

const encodedPrompt = args['--prompt'];

if (!encodedPrompt) {
  printErrorAndExit('Usage: node scripts/codex-bug-fix.js --prompt "<base64_encoded_prompt>"\n--prompt argument is required.');
}

let decodedPrompt;
try {
  decodedPrompt = Buffer.from(encodedPrompt, 'base64').toString('utf-8');
  if (!decodedPrompt) {
    throw new Error('Decoded prompt is empty.');
  }
} catch (err) {
  printErrorAndExit(`Error decoding prompt from base64: ${err.message}`, encodedPrompt);
}

async function sendPromptToOpenAI(promptMessage) {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: MODEL_TO_USE,
        messages: [
          { role: 'system', content: 'You are Codex, an expert software engineer that fixes bugs in the Zion Tech Nexus application. Provide concise analysis and suggestions.' },
          { role: 'user', content: promptMessage }
        ],
        temperature: 0.3 // Adjust temperature as needed for creativity vs. precision
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      // Try to parse errorText if it's JSON, otherwise use as is
      let apiError = errorText;
      try {
        apiError = JSON.parse(errorText);
      } catch (e) { /* ignore if not json */ }
      printErrorAndExit(`OpenAI API error: ${response.status} ${response.statusText}`, promptMessage);
    }

    const data = await response.json();

    if (data.choices && data.choices.length > 0 && data.choices[0].message && data.choices[0].message.content) {
      const output = {
        success: true,
        suggestion: data.choices[0].message.content,
        model: data.model || MODEL_TO_USE, // Use model from response if available
      };
      console.log(JSON.stringify(output, null, 2));
    } else {
      printErrorAndExit('OpenAI API response did not contain expected content.', promptMessage);
    }

  } catch (err) {
    // This catches network errors or issues before/after the fetch call itself
    printErrorAndExit(`Error during OpenAI API call: ${err.message}`, promptMessage);
  }
}

sendPromptToOpenAI(decodedPrompt);

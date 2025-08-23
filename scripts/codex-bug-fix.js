#!/usr/bin/env node
import process from 'process';
import { Octokit } from "@octokit/rest";
import fs from 'fs';
import { execSync } from 'child_process';

const {
  GITHUB_TOKEN,
  ISSUE_NUMBER,
  REPO_CONTEXT_JSON,
  ISSUE_TITLE,
  ISSUE_BODY,
  ISSUE_LABELS_JSON
} = process.env;

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const MODEL_TO_USE = 'gpt-4o';

function printErrorAndExit(errorMessage, details = null, exitCode = 1) {
  const errorOutput = {
    success: false,
    error: errorMessage,
  };
  if (details) {
    errorOutput.details = details;
  }
  console.error(JSON.stringify(errorOutput, null, 2));
  process.exit(exitCode);
}

if (!OPENAI_API_KEY) printErrorAndExit('Missing OPENAI_API_KEY environment variable');
if (!GITHUB_TOKEN) printErrorAndExit('Missing GITHUB_TOKEN environment variable');
if (!ISSUE_NUMBER) printErrorAndExit('Missing ISSUE_NUMBER environment variable');
if (!REPO_CONTEXT_JSON) printErrorAndExit('Missing REPO_CONTEXT_JSON environment variable');
if (!ISSUE_TITLE) printErrorAndExit('Missing ISSUE_TITLE environment variable');

let REPO_CONTEXT;
try {
  REPO_CONTEXT = JSON.parse(REPO_CONTEXT_JSON);
} catch (e) {
  printErrorAndExit('Failed to parse REPO_CONTEXT_JSON', { rawValue: REPO_CONTEXT_JSON, error: e.message });
}

let ISSUE_LABELS = [];
if (ISSUE_LABELS_JSON) {
  try {
    ISSUE_LABELS = JSON.parse(ISSUE_LABELS_JSON);
  } catch (e) {
    printErrorAndExit('Failed to parse ISSUE_LABELS_JSON', { rawValue: ISSUE_LABELS_JSON, error: e.message });
  }
}

const octokit = new Octokit({ auth: GITHUB_TOKEN });

function runGitCommand(command) {
  try {
    console.log(`Executing: ${command}`);
    const output = execSync(command, { stdio: 'pipe' }).toString();
    if (output) console.log(output); // Only log if there's output
    return output;
  } catch (error) {
    const errDetails = {
      command,
      stdout: error.stdout ? error.stdout.toString() : null,
      stderr: error.stderr ? error.stderr.toString() : null,
      error: error.message
    };
    printErrorAndExit(`Git command failed: ${command}`, errDetails);
  }
}

async function commentOnIssue(octokitInstance, owner, repo, issueNumber, commentBody) {
  try {
    console.log(`Commenting on issue #${issueNumber}...`);
    await octokitInstance.rest.issues.createComment({
      owner,
      repo,
      issue_number: issueNumber,
      body: commentBody,
    });
    console.log("Successfully commented on issue.");
  } catch (error) {
    console.error(`Failed to comment on issue #${issueNumber}: ${error.message}`);
    // Log the error but don't let it stop the script.
    // The main error (e.g., patch apply failure) is more critical.
  }
}

function extractFilePaths(text) {
  if (!text) return [];
  const stricterRegex = /([\w.-]+\/)*[\w.-]+\.\w+/g;
  const paths = text.match(stricterRegex);
  return paths ? [...new Set(paths)] : [];
}

async function fetchFileContent(octokitInstance, owner, repo, filePath) {
  try {
    const response = await octokitInstance.rest.repos.getContent({
      owner,
      repo,
      path: filePath,
    });
    if (response.data.type === 'file' && response.data.content) {
      return Buffer.from(response.data.content, 'base64').toString('utf-8');
    } else {
      console.warn(`Path ${filePath} is not a file or has no content. Data:`, response.data);
      return null;
    }
  } catch (error) {
    if (error.status === 404) {
      console.warn(`File not found: ${filePath}`);
      return null;
    }
    console.error(`Error fetching file ${filePath}: ${error.message}`);
    throw error;
  }
}

async function sendPromptToOpenAI(promptMessage) {
  console.log("Sending prompt to OpenAI API...");
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
          { role: 'system', content: 'You are Codex, an expert software engineer. Analyze the following issue and code, then provide a code patch in standard diff format to fix the bug. If you cannot provide a patch, explain the reason clearly.' },
          { role: 'user', content: promptMessage }
        ],
        temperature: 0.2
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      let apiError = errorText;
      try {
        apiError = JSON.parse(errorText);
      } catch (e) { /* ignore */ }
      printErrorAndExit(`OpenAI API error: ${response.status} ${response.statusText}`, { errorDetails: apiError });
    }
    const data = await response.json();
    if (data.choices && data.choices.length > 0 && data.choices[0].message && data.choices[0].message.content) {
      return data.choices[0].message.content;
    } else {
      printErrorAndExit('OpenAI API response did not contain expected content.', { responseData: data });
    }
  } catch (err) {
    printErrorAndExit(`Error during OpenAI API call: ${err.message}`, { error: err });
  }
}

function extractPatch(responseText) {
  if (!responseText) return null;
  const diffRegex = /```diff\r?\n([\s\S]*?)\r?\n```/;
  const match = responseText.match(diffRegex);
  if (match && match[1]) {
    return match[1].trim(); // Trim the patch content
  }
  return null;
}

async function main() {
  console.log("Starting codex-bug-fix.js script...");
  const owner = REPO_CONTEXT.owner.login;
  const repo = REPO_CONTEXT.name;

  console.log(`Operating on repository: ${owner}/${repo}`);
  console.log("Issue Number:", ISSUE_NUMBER);
  console.log("Issue Title:", ISSUE_TITLE);

  const filePaths = extractFilePaths(ISSUE_BODY);
  console.log("Extracted file paths:", filePaths);

  const filesContent = [];
  if (filePaths.length > 0) {
    console.log("Fetching content for file paths...");
    for (const filePath of filePaths) {
      if (!filePath) { console.warn("Encountered an undefined/null filePath."); continue; }
      try {
        const content = await fetchFileContent(octokit, owner, repo, filePath.trim());
        if (content !== null) {
          filesContent.push({ path: filePath.trim(), content });
          console.log(`Successfully fetched content for ${filePath.trim()}`);
        } else {
          console.log(`No content returned for ${filePath.trim()}.`);
        }
      } catch (error) {
        console.warn(`Skipping file ${filePath.trim()} due to error: ${error.message}`);
      }
    }
  } else {
    console.log("No file paths found in issue body.");
  }

  let promptForCodex = `Issue Title: ${ISSUE_TITLE}\nIssue Body: ${ISSUE_BODY || "No body provided."}\n\n`;
  if (filesContent.length > 0) {
    promptForCodex += "Relevant file contents:\n";
    for (const file of filesContent) {
      promptForCodex += `--- File: ${file.path} ---\n${file.content}\n--- End of File: ${file.path} ---\n\n`;
    }
  } else {
    promptForCodex += "No files were automatically extracted or fetched.\n";
  }
  promptForCodex += "Based on the issue described and provided files, generate a code patch in standard diff format. Ensure the patch is clearly delimited by \`\`\`diff ... \`\`\` marks. If you cannot generate a patch, explain why. If multiple files need changes, provide separate diffs for each file.";

  console.log("Constructed prompt for OpenAI. Length:", promptForCodex.length);
  const codexResponseContent = await sendPromptToOpenAI(promptForCodex);
  console.log("Raw response from Codex received.");

  const patch = extractPatch(codexResponseContent);

  if (patch) {
    console.log("Extracted patch:\n", patch);

    console.log("Configuring Git user...");
    runGitCommand('git config user.name "github-actions[bot]"');
    runGitCommand('git config user.email "github-actions[bot]@users.noreply.github.com"');

    const branchName = `autofix/issue-${ISSUE_NUMBER}`;
    console.log(`Creating and switching to new branch: ${branchName}`);
    runGitCommand(`git checkout -b ${branchName}`);

    console.log("Applying patch...");
    const patchFilePath = './temp.patch';
    try {
      fs.writeFileSync(patchFilePath, patch);
      runGitCommand(`git apply --whitespace=fix ${patchFilePath}`);
      console.log("Patch applied successfully via git apply.");
    } catch (applyError) {
      // This catch is for fs.writeFileSync or if runGitCommand for git apply throws (which it will on failure)
      if (fs.existsSync(patchFilePath)) fs.unlinkSync(patchFilePath);
      const failureMessage = `Failed to apply the patch suggested by Codex for issue #${ISSUE_NUMBER}.
Error: ${applyError.message}
Patch provided:
\`\`\`diff
${patch}
\`\`\``;
      await commentOnIssue(octokit, owner, repo, ISSUE_NUMBER, failureMessage);
      printErrorAndExit(`Failed to apply patch: ${applyError.message}`, { patchContent: patch }, 1); // Exit with error
    } finally {
        if (fs.existsSync(patchFilePath)) fs.unlinkSync(patchFilePath); // Ensure cleanup
    }

    console.log("Adding changes to staging area...");
    runGitCommand('git add .');

    try {
      execSync('git diff --staged --quiet', { stdio: 'ignore' }); // Use ignore if no output is needed on success
      console.log("No changes were staged after applying the patch. This might mean the patch was empty or did not apply correctly.");
      const noChangeMessage = `Codex suggested a patch for issue #${ISSUE_NUMBER}, but it resulted in no actual changes to the files after \`git apply\`. This could be due to an empty patch, a patch that doesn't alter current file states, or an issue with how the patch was applied.
Patch provided:
\`\`\`diff
${patch}
\`\`\``;
      await commentOnIssue(octokit, owner, repo, ISSUE_NUMBER, noChangeMessage);
      // Exiting gracefully as this isn't a script failure, but an ineffective patch.
      // The workflow should ideally not proceed to PR creation.
      process.exit(0);
    } catch (error) {
      // This error (non-zero exit code from `git diff --staged --quiet`) means there ARE staged changes.
      console.log("Changes staged, proceeding to commit.");
    }

    const commitMessage = `Autofix: ${ISSUE_TITLE}\n\nFixes #${ISSUE_NUMBER}`;
    console.log("Committing changes...");
    const escapedCommitMessage = commitMessage.replace(/"/g, '\\"'); // Escape for command line
    runGitCommand(`git commit -m "${escapedCommitMessage}"`);

    console.log(`Pushing branch ${branchName} to origin...`);
    runGitCommand(`git push origin ${branchName}`); // Removed --force

    console.log(`Successfully created branch ${branchName}, applied patch, committed, and pushed.`);
    console.log(`::set-output name=branch_name::${branchName}`); // Output for workflow

    // Next step in the workflow should be PR creation.
  } else {
    console.log("No diff-formatted patch found in Codex response.");
    const explanation = codexResponseContent || "No specific explanation content found.";
    const explanationMessage = `Codex analysis for issue #${ISSUE_NUMBER}:

${explanation}

No patch was automatically applied.`;
    await commentOnIssue(octokit, owner, repo, ISSUE_NUMBER, explanationMessage);
    console.log("Exiting gracefully as no patch was generated. No branch created.");
    // Ensure no output is set for branch_name here
    process.exit(0); // Successful exit, as AI providing an explanation is a valid outcome.
  }
}

main().catch(error => {
  const details = error instanceof Error ? { name: error.name, message: error.message, stack: error.stack } : { errorInfo: error };
  // Try to comment on the issue with the unhandled error, if possible
  const owner = REPO_CONTEXT ? REPO_CONTEXT.owner.login : null;
  const repo = REPO_CONTEXT ? REPO_CONTEXT.name : null;
  if (owner && repo && ISSUE_NUMBER && octokit) {
    commentOnIssue(octokit, owner, repo, ISSUE_NUMBER,
      `The autofix script encountered an unhandled error:
Name: ${error.name}
Message: ${error.message}
Stack:
\`\`\`
${error.stack}
\`\`\`
Please review the script logs for more details.`)
    .finally(() => {
      printErrorAndExit("Unhandled error in main execution", details);
    });
  } else {
    printErrorAndExit("Unhandled error in main execution (and failed to comment on issue)", details);
  }
});

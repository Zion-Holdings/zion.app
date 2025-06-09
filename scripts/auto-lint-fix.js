#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const GIT_BRANCH_NAME = 'auto/fix-hourly';
const GIT_USER_NAME = 'Auto Linter Bot';
const GIT_USER_EMAIL = 'bot@example.com'; // Replace with a suitable bot email

function executeCommand(command, options = {}) {
  console.log(`Executing: ${command}`);
  try {
    const output = execSync(command, { stdio: 'pipe', encoding: 'utf-8', ...options });
    const trimmedOutput = output.trim();
    if (trimmedOutput) { // Only log if there's actual output
        console.log(trimmedOutput);
    }
    return trimmedOutput;
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    if (error.stderr && error.stderr.toString().trim()) {
      console.error('Stderr:', error.stderr.toString().trim());
    }
    if (error.stdout && error.stdout.toString().trim()) {
      console.error('Stdout:', error.stdout.toString().trim());
    }
    throw error;
  }
}

async function main() {
  console.log('Starting ESLint auto-fix script...');
  console.log(`Project root: ${PROJECT_ROOT}`);

  process.chdir(PROJECT_ROOT);
  console.log(`Current directory: ${process.cwd()}`);

  try {
    console.log('Running ESLint checks and auto-fixing...');
    executeCommand('npm run lint -- --fix');
    console.log('ESLint auto-fixing completed.');
  } catch (error) {
    console.warn('ESLint command finished with an error. This might be due to unfixable issues. Continuing to check for changes.');
  }

  console.log('Detecting changes...');
  const gitStatusOutput = executeCommand('git status --porcelain');
  const changedFiles = gitStatusOutput.split('\n').filter(line => line.trim() !== '').map(line => {
    const parts = line.trim().split(/\s+/);
    return parts[parts.length - 1];
  }).filter(Boolean);

  if (changedFiles.length > 0) {
    console.log('The following files were changed by ESLint:');
    changedFiles.forEach(file => console.log(`- ${file}`));

    console.log('Configuring Git user...');
    executeCommand(`git config user.name "${GIT_USER_NAME}"`);
    executeCommand(`git config user.email "${GIT_USER_EMAIL}"`);

    console.log(`Checking out or creating branch: ${GIT_BRANCH_NAME}...`);
    executeCommand(`git checkout -B ${GIT_BRANCH_NAME}`);

    // It's good practice to ensure the local branch is up-to-date with the remote
    // if it already exists, or reset it if it's meant to be overwritten.
    // However, `checkout -B` already creates or resets the branch.
    // If the remote branch might have changes that should be merged, a different strategy would be needed.
    // For a purely automated overwrite branch, `checkout -B` followed by `push --force` is common.

    console.log('Staging changes...');
    executeCommand('git add .');

    console.log('Committing changes...');
    const commitMessage = `chore: auto-fix ESLint issues\n\nChanged files:\n${changedFiles.map(f => `- ${f}`).join('\n')}`;
    // Use environment variable or temporary file for multi-line commit message if `executeCommand` has issues with it.
    // For execSync, can pass it directly but ensure proper escaping if the message were more complex.
    // A simple way:
    fs.writeFileSync('.gitcommitmessage', commitMessage);
    executeCommand('git commit -F .gitcommitmessage');
    fs.unlinkSync('.gitcommitmessage'); // Clean up

    console.log(`Pushing changes to origin/${GIT_BRANCH_NAME}...`);
    // Using --force as specified in the plan. This will overwrite the remote branch.
    // Ensure this is the desired behavior for this specific branch.
    executeCommand(`git push origin ${GIT_BRANCH_NAME} --force`);

    console.log('Changes committed and pushed successfully.');

  } else {
    console.log('No files were changed by ESLint. No commit needed.');
  }

  console.log('ESLint auto-fix script finished.');
}

main().catch(error => {
  console.error('Script failed overall:', error);
  process.exit(1);
});

#!/usr/bin/env node

const { _execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const GIT_BRANCH_NAME = 'auto/fix-hourly';
const GIT_USER_NAME = process.env.GIT_AUTHOR_NAME || 'GitHub Actions Bot';
const GIT_USER_EMAIL = process.env.GIT_AUTHOR_EMAIL || 'actions-bot@users.noreply.github.com'; // Replace with a suitable bot email

function executeCommand(command, options = {}) {
  console.warn(`Executing: ${command}`);
  try {
    const output = execSync(command, { stdio: 'pipe', encoding: 'utf-8', ...options });
    const trimmedOutput = output.trim();
    if (trimmedOutput) { // Only log if there's actual output
        console.warn(trimmedOutput);
    }
    return trimmedOutput;
  } catch {
    console.'Error occurred'(`Error executing command: ${command}`);
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
  console.warn('Starting ESLint auto-fix script...');
  console.warn(`Project root: ${PROJECT_ROOT}`);

  process.chdir(PROJECT_ROOT);
  console.warn(`Current directory: ${process.cwd()}`);

  try {
    console.warn('Running ESLint checks and auto-fixing...');
    executeCommand('npm run lint-format');
    console.warn('ESLint auto-fixing completed.');
  } catch {
    console.warn('ESLint command finished with an error. This might be due to unfixable issues. Continuing to check for changes.');
  }

  console.warn('Detecting changes...');
  const gitStatusOutput = executeCommand('git status --porcelain');
  const changedFiles = gitStatusOutput.split('\n').filter(line => line.trim() !== '').map(line => {
    const parts = line.trim().split(/\s+/);
    return parts[parts.length - 1];
  }).filter(Boolean);

  if (changedFiles.length > 0) {
    console.warn('The following files were changed by ESLint:');
    changedFiles.forEach(file => console.warn(`- ${file}`));

    console.warn('Configuring Git user...');
    executeCommand(`git config user.name "${GIT_USER_NAME}"`);
    executeCommand(`git config user.email "${GIT_USER_EMAIL}"`);

    console.warn(`Checking out or creating branch: ${GIT_BRANCH_NAME}...`);
    executeCommand(`git checkout -B ${GIT_BRANCH_NAME}`);

    // It's good practice to ensure the local branch is up-to-date with the remote
    // if it already exists, or reset it if it's meant to be overwritten.
    // However, `checkout -B` already creates or resets the branch.
    // If the remote branch might have changes that should be merged, a different strategy would be needed.
    // For a purely automated overwrite branch, `checkout -B` followed by `push --force` is common.

    console.warn('Staging changes...');
    executeCommand('git add .');

    console.warn('Committing changes...');
    const commitMessage = `chore: auto-apply Prettier & ESLint fixes\n\nFiles changed by Prettier and/or ESLint.`;
    // Use environment variable or temporary file for multi-line commit message if `executeCommand` has issues with it.
    // For execSync, can pass it directly but ensure proper escaping if the message were more complex.
    // A simple way:
    fs.writeFileSync('.gitcommitmessage', commitMessage);
    executeCommand('git commit -F .gitcommitmessage');
    fs.unlinkSync('.gitcommitmessage'); // Clean up
    console.warn('Fixes committed locally.');

    let testsPassed = false;
    try {
      console.warn('Running tests (npm test) after applying fixes...');
      executeCommand('npm test');
      testsPassed = true;
      console.warn('Tests passed successfully.');
    } catch {
      console.error('Tests FAILED after applying fixes. Error details logged by executeCommand.');
      // testError object is already logged by executeCommand's catch block if it was thrown from there.
    }

    if (testsPassed) {
      console.warn(`Pushing fixes to origin/${GIT_BRANCH_NAME}...`);
      // Using --force as specified in the plan. This will overwrite the remote branch.
      // Ensure this is the desired behavior for this specific branch.
      executeCommand(`git push origin ${GIT_BRANCH_NAME} --force`);
      console.warn('Fixes committed and pushed successfully.');
    } else {
      console.warn('Reverting the local commit due to test failures...');
      try {
        executeCommand('git reset --hard HEAD~1');
        console.warn('Commit reverted locally.');

        // Attempt to push the branch state *before* the bad commit.
        // This effectively "cleans" the remote branch from the bad commit if it was ever pushed (though in this flow, it hasn't been yet).
        // More importantly, if the branch existed before with other commits, this ensures it's reset to that state.
        // If the branch was newly created by `checkout -B`, this push might create an empty branch or reset it.
        // The key is to ensure the remote branch *also* doesn't have the bad commit.
        console.warn(`Force pushing reverted state (pre-fix commit) to origin/${GIT_BRANCH_NAME}...`);
        executeCommand(`git push origin ${GIT_BRANCH_NAME} --force`);
        console.warn('Reverted state pushed. Branch should not contain the failed changes.');
      } catch {
        console.error('Failed to push the reverted state. The remote branch might still contain the bad commit or be in an inconsistent state.');
        // This is a more problematic scenario. Further manual intervention might be needed.
      }
      console.warn('Automated fixes were reverted due to test failures.');
      // To make the GitHub Action fail, we should throw an error here.
      throw new Error('Automated fixes failed tests and were reverted.');
    }

  } else {
    console.warn('No files were changed by ESLint. No commit needed.');
  }

  console.warn('ESLint auto-fix script finished.');
}

main().catch(error => {
  // Log the error that caused the script to fail (e.g., the one thrown for test failures)
  console.error('Script failed overall:', error.message);
  if (error.stack) {
    console.error(error.stack);
  }
  process.exit(1);
});

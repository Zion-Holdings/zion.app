## Automated Issue Fixing with Codex (`codex-fix.yml`)

This repository uses a GitHub Action (`.github/workflows/codex-fix.yml`) to automatically attempt fixes for issues labeled with `autofix` or `performance`.

### Workflow Overview

1.  **Trigger**: The workflow is triggered when an issue is labeled (or has new labels added) with either `autofix` or `performance`.
2.  **Context Gathering**:
    *   The workflow retrieves the issue title, body, and labels.
    *   It attempts to identify relevant file paths mentioned in the issue body.
    *   The content of these identified files is fetched from the repository.
3.  **Codex Interaction**:
    *   The collected information (issue details + file contents) is used to construct a detailed prompt for the OpenAI Codex model (specifically, `gpt-4o` as of the last update).
    *   The prompt instructs Codex to analyze the issue and provide a code patch in standard `diff` format.
4.  **Patch Application**:
    *   If Codex provides a valid patch:
        *   A new Git branch is created, named `autofix/issue-<issue_number>`.
        *   The patch is applied to this branch.
        *   Changes are committed with a message linking to the original issue.
        *   The new branch is pushed to the repository.
5.  **Pull Request Creation**:
    *   If a branch with a patch is successfully pushed, a Pull Request (PR) is automatically created.
    *   The PR title is prefixed with "Autofix: " followed by the original issue title.
    *   The PR body includes details from the original issue and a link back to it.
    *   The PR is labeled (e.g., `autofix`, `bot`).
6.  **Feedback and Error Handling**:
    *   **Explanations from Codex**: If Codex cannot provide a patch and instead provides an explanation, this explanation is posted as a comment on the original GitHub issue. No PR is created in this case.
    *   **Patch Application Issues**: If a patch is provided but fails to apply cleanly, or results in no actual file changes, a comment detailing this is posted on the issue.
    *   **Script Failures**: If the underlying script encounters an unexpected error, a comment is posted on the issue with a link to the failed workflow run for debugging.

### How to Use

1.  Create a new GitHub issue describing the bug or performance problem.
2.  Be as specific as possible in the issue description. If known, mention the relevant file paths that might need changes.
3.  Add the label `autofix` or `performance` to the issue.
4.  Monitor the issue for comments from the bot or a new Pull Request linked to it.

### Configuration

*   The core logic is in `scripts/codex-bug-fix.js`.
*   The OpenAI model and system prompts can be adjusted in this script.
*   The workflow requires the `OPENAI_API_KEY` secret to be set in the repository settings.

### Automated Error Reporting

In addition to manually creating issues, a separate workflow (`auto-report-codex.yml`) runs tests on each push. If any tests fail, the workflow automatically opens a new GitHub issue labeled `autofix` with a summary of the failures. This feeds directly into the `codex-fix.yml` workflow so Codex can attempt to generate a patch.


# Manual Hotfix Process for AI-Suggested Fixes

## 1. Overview

This document outlines the manual workflow for developers to review, apply, and manage AI-generated suggestions for fixing errors logged by our automated error analysis system. The goal is to leverage AI insights effectively while ensuring code quality and stability through human oversight. These suggestions are stored in the `ErrorAnalysisSuggestion` table in the database.

## 2. Accessing Suggestions

Developers can access AI-generated suggestions by querying the `ErrorAnalysisSuggestion` table.

**Example SQL Query:**

```sql
SELECT
  id,
  error_signature,
  error_message,
  status,
  occurrence_count,
  last_seen_at,
  url,
  source,
  codex_explanation,
  codex_suggested_fix_code,
  codex_impact_assessment,
  codex_prompt -- Important to understand AI context
FROM
  "ErrorAnalysisSuggestion"
WHERE
  status = 'FIX_SUGGESTED' -- Focus on suggestions ready for review
ORDER BY
  occurrence_count DESC, -- Prioritize by most frequent errors
  last_seen_at DESC;     -- Then by most recently seen
```

**Recommended Filtering/Sorting:**

*   `status = 'FIX_SUGGESTED'`: Shows errors that the AI has provided a fix for and are pending review.
*   `occurrence_count DESC`: Helps prioritize errors that are happening most frequently.
*   `last_seen_at DESC`: Useful for looking at the most recent errors.
*   You might also filter by `error_message` or `source` if investigating a specific type of error.

## 3. Reviewing a Suggestion

Careful review of each suggestion is critical before applying any changes.

**Key Fields to Examine:**

*   **Error Details**:
    *   `error_message`: The raw error message.
    *   `stack_trace`: The stack trace associated with the error.
    *   `component_stack` (if available): Component-specific stack trace (e.g., in React).
    *   `url`: The URL where the error occurred.
    *   `source`: The source of the error log (e.g., 'GlobalErrorBoundary', 'window.onerror').
*   **AI Analysis**:
    *   `codex_explanation`: The AI's concise explanation of the likely cause.
    *   `codex_suggested_fix_code`: The actual code snippet suggested by the AI. This could be a diff or a modified function.
    *   `codex_impact_assessment`: The AI's view on potential side effects or areas needing specific testing.
*   **AI Context**:
    *   `codex_prompt`: Review the prompt given to the AI. This helps understand the context the AI had and can indicate if the prompt itself needs refinement for future suggestions.

**Critical Thinking & Validation:**

*   **AI is a Tool**: Remember that AI suggestions are starting points, not infallible solutions. They are generated based on patterns and the information provided in the prompt.
*   **Understand the Why**: Don't just copy-paste the code. Understand why the AI suggested this particular fix and if it truly addresses the root cause.
*   **Consider Edge Cases**: Think about potential edge cases or scenarios the AI might not have considered.
*   **Security Implications**: Always assess if the suggested fix has any security implications.

## 4. Applying a Fix (Hotfix Process)

Follow standard development and Git best practices when applying a fix.

**Standard Procedure:**

1.  **Create a Branch**:
    *   Branch from the appropriate base (e.g., `main`, `develop`, or a specific release branch like `release/v1.2.3`).
    *   Example: `git checkout -b hotfix/error-[signature-or-id]` (e.g., `hotfix/error-abc123def456` or `hotfix/error-suggestion-789`)

2.  **Apply the Code**:
    *   Carefully integrate the `codex_suggested_fix_code` into the relevant file(s).
    *   This may require manual adjustments to fit coding standards, surrounding logic, or to improve the suggestion.

3.  **Thoroughly Test**:
    *   **Unit/Integration Tests**: Run all relevant existing tests. If the affected code lacks coverage, consider adding tests.
        ```bash
        npm test
        # or specific test files
        npm test -- src/components/AffectedComponent.test.js
        ```
    *   **Manual Testing**: Manually verify the functionality in a development or staging environment. Pay close attention to the area where the error occurred.
    *   **Impact Assessment**: Use the `codex_impact_assessment` to guide your testing. Check other parts of the application that might be affected by the change.
    *   **Regression Testing**: Ensure the fix doesn't introduce new issues.

4.  **Commit Changes**:
    *   Use a clear and descriptive commit message. Reference the error signature or the ID of the `ErrorAnalysisSuggestion` record.
    *   Example: `git commit -m "Fix: Resolve TypeError in UserProfile component (Error ID: 789)"`

5.  **Create a Pull Request (PR)**:
    *   Push your branch and create a PR against the base branch it was created from.
    *   In the PR description, link to the `ErrorAnalysisSuggestion` record if possible, or at least include the error signature and a summary of the fix.
    *   Ensure the PR goes through the standard code review process.

## 5. Updating Error Status in Database

Update the status of the `ErrorAnalysisSuggestion` record to reflect its current state in the lifecycle.

**SQL UPDATE Statements (Examples):**

*   **After Review (fix seems viable, PR created):**
    ```sql
    UPDATE "ErrorAnalysisSuggestion"
    SET status = 'REVIEWED'
    WHERE id = 'your_suggestion_id';
    -- or by signature:
    -- WHERE error_signature = 'your_error_signature';
    ```

*   **After Successful Deployment of the Fix:**
    ```sql
    UPDATE "ErrorAnalysisSuggestion"
    SET status = 'FIX_APPLIED'
    WHERE id = 'your_suggestion_id';
    ```

*   **If Suggestion is Incorrect/Not Useful:**
    ```sql
    UPDATE "ErrorAnalysisSuggestion"
    SET status = 'IGNORED'
    WHERE id = 'your_suggestion_id';
    ```

(Replace `your_suggestion_id` or `your_error_signature` with actual values. If using an ORM, use its equivalent update methods.)

## 6. Feedback Loop (Optional but Recommended)

Providing feedback on the quality of suggestions is crucial for improving the AI model and the overall error analysis system.

*   **PR Comments**: When a fix based on an AI suggestion is submitted, reviewers and authors can discuss the AI's accuracy and usefulness in the PR comments.
*   **Documenting Insights**: Note down why a suggestion was particularly good or bad.
    *   Was the `codex_explanation` accurate?
    *   Was the `codex_suggested_fix_code` directly usable, or did it require significant modification?
    *   Did the `codex_impact_assessment` highlight relevant areas?
*   **System Improvement**: This collective feedback can be periodically reviewed to:
    *   Refine the `formulateCodexPrompt` function in `api/log-error.js`.
    *   Adjust the AI model parameters if applicable.
    *   Identify patterns where the AI struggles or excels.

By following this process, we can effectively utilize AI-driven suggestions to accelerate bug fixing while maintaining high standards for code quality and application stability.
```

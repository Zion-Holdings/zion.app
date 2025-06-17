# Automated Error Analysis and Fix Suggestion System

## Overview
This system is designed to automatically capture frontend errors, send them to a dedicated backend service, analyze these errors using OpenAI's Codex models (specifically, models like `gpt-4o`), and store potential fixes or analyses in a database. The goal is to accelerate debugging, provide developers with actionable insights, and reduce the time spent on identifying causes and solutions for frontend issues.

## Error Capturing Workflow

### 1. Frontend Error Sources:
Errors are captured from multiple sources on the client-side to ensure comprehensive coverage:
-   **`GlobalErrorBoundary`**: A React component that wraps the main application (or parts of it) to catch rendering errors and lifecycle issues within the React component tree.
-   **`window.onerror`**: A global event handler that catches general JavaScript errors that are not caught by more specific handlers.
-   **`window.onunhandledrejection`**: A global event handler that catches errors stemming from unhandled promise rejections.
-   **Manual calls to `logError()` utility**: The `src/utils/logError.ts` utility can be invoked manually within the codebase to report errors that might not be automatically caught (e.g., issues in `catch` blocks of application logic).

### 2. Client-Side Reporting:
-   Regardless of the source, all caught errors are ultimately processed by the `sendErrorToBackend` function located in `src/utils/customErrorReporter.ts`.
-   The endpoint used by this function is configurable via the `NEXT_PUBLIC_ERROR_REPORT_ENDPOINT` environment variable. When this variable is unset, reports are skipped (in development it defaults to `http://localhost:3001/webhook/trigger-fix`).
-   This function gathers detailed error information, including:
    -   `message`: The error message.
    -   `stack`: The JavaScript stack trace.
    -   `componentStack`: The React component stack trace (if available, typically from `GlobalErrorBoundary`).
    -   `filename`: File where the error occurred (parsed from stack).
    -   `lineno`: Line number (parsed from stack).
    -   `colno`: Column number (parsed from stack).
    -   `url`: The URL of the page where the error occurred (`window.location.href`).
    -   `userAgent`: The browser's user agent string (`navigator.userAgent`).
    -   `timestamp`: An ISO string of when the error occurred (`new Date().toISOString()`).
    -   `source`: A string indicating how the error was caught (e.g., 'GlobalErrorBoundary', 'window.onerror', 'logError').
-   This consolidated error object is POSTed to the `/api/log-error` backend endpoint by default.
-   You can override the destination by setting the `NEXT_PUBLIC_ERROR_WEBHOOK_URL` environment variable.
-   Concurrently, errors processed by `src/utils/logError.ts` are also sent to Sentry for general error monitoring and aggregation, providing an additional layer of observability.

## Backend Processing (`/api/log-error`)

### 1. Receives Error Data:
The `/api/log-error` endpoint (implemented in `api/log-error.js`) accepts POST requests containing the JSON payload of error details sent from the client.

### 2. Error Signature Generation:
To identify and group unique errors, an MD5 signature is generated. This signature is primarily based on:
-   The error message.
-   The top few significant lines of the stack trace (normalized to remove highly dynamic parts like memory addresses or exact file paths if they vary too much).

### 3. Database Interaction (Prisma - `ErrorAnalysisSuggestion` table):
The backend uses Prisma Client to interact with a PostgreSQL database, specifically the `ErrorAnalysisSuggestion` table.
-   **Prisma Client:** An instance of `PrismaClient` is used for all database operations.
-   **Check for Existing Error:** Upon receiving an error, the system queries the `ErrorAnalysisSuggestion` table using the generated `error_signature` to see if this error has been encountered before.
-   **New Error:** If the `error_signature` is not found:
    -   A new record is created in the `ErrorAnalysisSuggestion` table.
    -   Initial `status` is set to `NEW`.
    -   `occurrence_count` is set to `1`.
    -   All relevant error details (`error_message`, `stack_trace`, `component_stack`, `url`, `source`, `user_agent`, `first_seen_at` using client's timestamp) are stored.
-   **Recurring Error:** If the `error_signature` is found:
    -   The existing record's `occurrence_count` is incremented.
    -   The `last_seen_at` timestamp is automatically updated by Prisma's `@updatedAt` directive.
-   The API then responds with a `202 Accepted` status to the client, including the `dbId` (ID of the record in the database) and the `signature`. This indicates that the error has been received and queued for analysis, but the analysis itself is asynchronous.

### 4. Codex Analysis (Asynchronous):
After the initial database interaction and response to the client:
-   A detailed prompt is formulated using the error details (message, stack, component stack, URL, source, signature, timestamp).
-   The `scripts/codex-bug-fix.js` Node.js script is executed as a separate child process. The prompt is passed to this script as a base64 encoded command-line argument (`--prompt`).

### 5. Storing Codex Result:
The `scripts/codex-bug-fix.js` script communicates with the OpenAI API (e.g., `gpt-4o`). Once it completes (or fails), the main `/api/log-error` process updates the corresponding `ErrorAnalysisSuggestion` record in the database:
-   **On Success:**
    -   `codex_prompt`: The full prompt sent to Codex is stored.
    -   `codex_suggestion`: The suggestion received from Codex (e.g., explanation, code fix) is stored.
    -   `codex_model`: The specific OpenAI model used (e.g., 'gpt-4o') is recorded.
    -   `analysis_error` is cleared (set to `null`).
    -   `status` is updated to `FIX_SUGGESTED`.
-   **On Failure (Codex script error or OpenAI API error):**
    -   `codex_prompt` is stored.
    -   `analysis_error` is populated with details about the failure.
    -   `status` is updated to `ANALYZED` (indicating an analysis attempt was made but did not yield a suggestion).

## Database Model: `ErrorAnalysisSuggestion`

| Field             | Type                    | Attributes & Description                                       |
|-------------------|-------------------------|----------------------------------------------------------------|
| `id`              | `String`                | `@id @default(cuid())` - Primary Key, CUID                     |
| `error_signature` | `String`                | `@unique` - MD5 hash for identifying unique errors.            |
| `error_message`   | `String`                | The error message.                                             |
| `stack_trace`     | `String`                | `@db.Text` - Full JavaScript stack trace.                      |
| `component_stack` | `String?`               | `@db.Text` - React component stack, if available (nullable).   |
| `url`             | `String`                | URL where the error occurred.                                  |
| `source`          | `String`                | Origin of the error (e.g., 'GlobalErrorBoundary', 'window.onerror'). |
| `user_agent`      | `String?`               | `@db.Text` - Browser user agent (nullable).                    |
| `codex_prompt`    | `String?`               | `@db.Text` - The exact prompt sent to Codex (nullable).        |
| `codex_suggestion`| `String?`               | `@db.Text` - The code fix or analysis from Codex (nullable).   |
| `codex_model`     | `String?`               | The OpenAI model used, e.g., 'gpt-4o' (nullable).              |
| `analysis_error`  | `String?`               | `@db.Text` - If the Codex script or analysis process failed (nullable). |
| `status`          | `ErrorAnalysisStatus`   | `@default(NEW)` - Current state of the error analysis.         |
| `first_seen_at`   | `DateTime`              | `@default(now())` - Timestamp of the first occurrence.         |
| `last_seen_at`    | `DateTime`              | `@updatedAt` - Timestamp of the most recent occurrence.        |
| `occurrence_count`| `Int`                   | `@default(1)` - How many times this unique error has occurred. |

### `ErrorAnalysisStatus` Enum
The `status` field in `ErrorAnalysisSuggestion` uses this enum to track the lifecycle of an error's analysis:
-   **`NEW`**: The error has been logged for the first time and is awaiting automated analysis by Codex.
-   **`ANALYZED`**: The Codex analysis was attempted, but it failed to produce a suggestion. The `analysis_error` field may contain details about the failure.
-   **`FIX_SUGGESTED`**: Codex successfully analyzed the error and provided a suggestion, which is stored in `codex_suggestion`.
-   **`REVIEWED`**: A developer has manually reviewed the `codex_suggestion`. This status is set manually through database updates or a potential future UI.
-   **`FIX_APPLIED`**: A fix based on the `codex_suggestion` has been implemented and deployed. This status is set manually.
-   **`IGNORED`**: A developer has reviewed the error or suggestion and deemed it not relevant, a duplicate, or incorrect. This status is set manually.

## Accessing and Using Suggestions
Currently, access to the analyzed errors and suggestions is via direct database queries:
-   Developers can connect to the PostgreSQL database and query the `ErrorAnalysisSuggestion` table.
-   **Prioritization:** Errors can be prioritized by sorting by `last_seen_at DESC` (most recent), `occurrence_count DESC` (most frequent), or a combination.
-   **Finding Fixes:** Filter by `status = 'FIX_SUGGESTED'` to get a list of errors for which Codex has proposed a solution.
-   **Review Process:** When reviewing a suggestion, developers should examine the `error_message`, `stack_trace`, `url`, `source`, and `codex_suggestion`. The `codex_prompt` can also provide context on what information Codex was given.
-   **Manual Status Updates:** After reviewing or acting upon a suggestion, developers should manually update the `status` of the record in the database to `REVIEWED`, `FIX_APPLIED`, or `IGNORED` to track progress and avoid redundant work.

## Future Enhancements (Optional)
-   **Admin UI:** Develop a web interface to view, filter, sort, and manage error suggestions, including updating their status.
-   **Automated Notifications:** Set up alerts (e.g., Slack, email) for new errors that reach a certain `occurrence_count` or for newly `FIX_SUGGESTED` errors.
-   **Selective Re-analysis:** Implement logic in `/api/log-error` to skip sending errors to Codex for re-analysis if they already have a trusted status like `FIX_SUGGESTED`, `REVIEWED`, or `FIX_APPLIED`, unless explicitly requested.
-   **Issue Tracker Integration:** Automatically create tickets in systems like Jira or GitHub Issues for new, high-priority errors or suggestions.
-   **Automated Hotfix Deployment:** A highly advanced and optional feature that would involve automatically generating and deploying fixes for certain classes of errors. This would require robust testing, safety checks, and human oversight.

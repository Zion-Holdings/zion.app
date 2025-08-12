# Setting up Cron Job for Automated ESLint Fixes

This document provides instructions on how to set up a cron job to run the `auto-lint-fix.js` script periodically. This script will automatically lint your project, fix issues, and commit them to the `auto/fix-hourly` branch.

## Prerequisites

Before setting up the cron job, ensure the following are installed and configured in the environment where the cron job will run:

1.  **Node.js and npm:** The script is a Node.js script. Node.js version specified in `package.json` (`>=20`) or a compatible version should be available.
2.  **Git:** Git must be installed and configured.
3.  **Repository Access:** The environment must have access to your Git repository.
    *   If using SSH keys for Git authentication (recommended for cron jobs), ensure the correct SSH key is set up for the user running the cron job and that the key is authorized to push to the repository.
    *   The Git user (configured in the script as "Auto Linter Bot" or via global/local git config) must have permissions to push to the `auto/fix-hourly` branch, potentially with force push rights if the branch is frequently overwritten.
4.  **Project Dependencies:** The project's Node.js dependencies must be installed (run `npm install` in the project root if not already done). The script relies on `eslint` and other devDependencies defined in `package.json`.

## Cron Job Command

The command to execute the script is:

```bash
/usr/bin/node /path/to/your/project/scripts/auto-lint-fix.js
```

**Important:**
*   Replace `/path/to/your/project/` with the absolute path to your project's root directory.
*   It's good practice to use absolute paths for `node` and the script in cron jobs to avoid issues with `PATH` environment variables. You can find the absolute path to Node.js by running `which node`.

## Example Cron Schedule

To run the script hourly (at the beginning of every hour), add the following line to your crontab:

```cron
0 * * * * /usr/bin/node /path/to/your/project/scripts/auto-lint-fix.js >> /path/to/your/project/logs/auto-lint-fix.log 2>&1
```

**Explanation:**

*   `0 * * * *`: This is the cron schedule. It means:
    *   `0`: At minute 0
    *   `*`: Every hour
    *   `*`: Every day of the month
    *   `*`: Every month
    *   `*`: Every day of the week
*   `>> /path/to/your/project/logs/auto-lint-fix.log 2>&1`: This part handles logging.
    *   `>> /path/to/your/project/logs/auto-lint-fix.log`: Appends the standard output (stdout) of the script to the specified log file. Create the `logs` directory if it doesn't exist.
    *   `2>&1`: Redirects the standard error (stderr) to the same location as stdout. This ensures both normal output and errors are captured in the log file.

## Setting up the Cron Job

1.  Open your crontab for editing. Typically, this is done by running:
    ```bash
    crontab -e
    ```
2.  Add the cron job line (from the example above, modified with your actual paths) to the file.
3.  Save and close the file. The cron daemon will automatically pick up the changes.

## Important Considerations

*   **Environment Variables:** Cron jobs often run with a minimal set of environment variables. If your script or any tools it calls (like Git or Node.js tools) depend on specific environment variables (e.g., `SSH_AUTH_SOCK`, `HOME` for Git config), you might need to set them explicitly at the beginning of your cron command or within the script itself if they are not being picked up.
*   **Permissions:** Ensure the user running the cron job has the necessary read/write permissions for the project directory, log files, and to execute the script.
*   **Initial Run & Testing:** After setting up the cron job, it's a good idea to monitor its first few executions to ensure it runs correctly and that changes are committed as expected. Check the log file for any errors. You can temporarily set the cron schedule to run more frequently (e.g., every 5 minutes: `*/5 * * * *`) for testing purposes.
*   **Git Configuration:** The script attempts to set `user.name` and `user.email` for the commits it makes. If the environment running the cron job has global Git configurations, these might be overridden or cause conflicts if not set correctly. Using a dedicated SSH key for the bot user is a clean way to manage Git credentials.
```

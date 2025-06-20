# Project Title (Example - To Be Updated)

This is the main README for the project. Below are details about specific components and utilities.

## URL Performance Monitoring

This project includes a URL/API performance monitoring service located in the `monitoring/` directory. It periodically checks configured endpoints, logs their performance, and can trigger alerts and custom remediation actions if performance degrades. For detailed information, see the [`monitoring/README.md`](./monitoring/README.md) file.

## Monitoring and Automation
- [Configuration File Integrity Monitoring](./docs/config_integrity_monitoring.md)

## Set environment variables (optional):
Copy `.env.example` to `.env` and adjust any values needed for your setup.
Important variables include:
* `DJANGO_API_BASE_URL`, `NEXTJS_API_BASE_URL`, `CUSTOM_SERVER_BASE_URL` –
  base URLs for services you want to monitor (used by the `monitoring/` service).
* `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`,
  `SUPABASE_SERVICE_ROLE_KEY` – credentials required for Supabase
  authentication (used for login).
* `ALERT_WEBHOOK_URL` – a webhook endpoint (Slack, Discord, etc.) for alert
  notifications (used by the `monitoring/` service).
* `LOG_LEVEL` – logging verbosity (`error`, `warn`, `info`, `debug`).


## Running Tests

Run the automated tests using npm:

```bash
npm run test
```

## Generating Test Logs

For offline debugging you can run the test suite and capture the output by using the helper script `scripts/generate-tests-log.sh`.

```bash
bash scripts/generate-tests-log.sh
```

This creates timestamped log files in `logs/tests/` containing the console output and Jest JSON results.


## Performance Budget (Lighthouse CI)

This project uses `@netlify/plugin-lighthouse` to automatically check performance budgets on every Netlify build. This helps ensure that the application remains fast and efficient.

### Current Thresholds

The build will fail if the following thresholds are not met:

*   **Lighthouse Performance Score**: Must be 80 or higher (i.e., `>= 0.8`).
*   **Total JavaScript Bundle Size**: While this plugin doesn't directly enforce a specific JavaScript bundle size in kilobytes, the overall Lighthouse performance score is heavily influenced by script size, execution time, and other related metrics. The target is to keep the total JS bundle size below 250 KB. Significant increases in JavaScript bundle size will likely degrade the performance score and cause the build to fail.

### Lighthouse Reports

HTML reports from the Lighthouse audit are automatically generated and stored as build artifacts in Netlify. You can find them in the `lighthouse-reports` directory of the build output. These reports provide detailed insights into the performance metrics and can help identify areas for improvement.

### Adjusting Thresholds

To adjust the performance thresholds:

1.  Open the `netlify.toml` file in the root of the project.
2.  Locate the `[[plugins]]` section for `package = "@netlify/plugin-lighthouse"`.
3.  Modify the `plugins.inputs.thresholds.performance` value. For example, to set the performance score threshold to 85, change it to `0.85`.
    ```toml
    [[plugins]]
    package = "@netlify/plugin-lighthouse"
      # ... other configurations
      [plugins.inputs.thresholds]
      performance = 0.85 # Adjusted threshold
      # ... other thresholds
    ```
4.  Commit and push the changes to `netlify.toml`. The next Netlify build will use the new thresholds.

Refer to the [official `@netlify/plugin-lighthouse` documentation](https://github.com/netlify/netlify-plugin-lighthouse) for more advanced configuration options.

## Database Schema Check

To check if the local Prisma schema (`prisma/schema.prisma`) is in sync with the schema that would be generated from the current database (as if it were a production environment), run the following command:

```bash
npm run migrate:check
```
This command is also run during the Netlify build process to prevent deployments if a schema drift is detected.

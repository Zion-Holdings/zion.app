# Logging Guidelines

This project uses a custom logger defined in `src/utils/logger.ts`. Avoid using `console.log` directly. Instead, import the logger and use the appropriate log level.

```ts
import { logger } from '@/utils/logger';

logger.debug('debug message');
logger.info('info message');
logger.warn('warning');
logger.error('something failed', error);
```

## Enabling Debug Logs

Debug logs are shown automatically in development. You can force debug output by setting `DEBUG=true` in your `.env.local`.

Errors logged with `logger.error` are forwarded to monitoring services when configured (for example, Sentry) to provide better visibility in production.

## Collecting Logs

To gather logs for troubleshooting or to share with support, run:

```bash
npm run logs:collect
```

This command creates a timestamped archive under `logs/archive/` containing the `logs/` directory and any `*.log` files in the project root.

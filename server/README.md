# Express Server

This Node.js service provides additional REST endpoints and acts as a backend-for-frontend for parts of the application.

## Setup

1. Install dependencies from the project root:
   ```bash
   npm install
   ```
2. Start the service:
   ```bash
   node server/index.js
   ```

The server connects to MongoDB. Configure connection settings via environment variables in `.env` or through your preferred deployment platform.

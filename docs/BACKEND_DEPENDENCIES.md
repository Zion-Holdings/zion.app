# Backend Dependency Management

The repository contains multiple backend services (Django and Express). We recommend isolating dependencies for each environment:

- **Node.js** – Install packages via `npm install` at the repository root. This includes the Next.js application and the Express server under `server/`.
- **Python** – Create a virtual environment in `backend/` and install with `pip install -r backend/requirements.txt`.

Docker configurations are available for production deployments, but local development can be performed with the above commands.

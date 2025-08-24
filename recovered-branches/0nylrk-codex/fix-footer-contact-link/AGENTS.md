
# Zion Tech Nexus Market Instructions

## Package Managers

This project supports multiple package managers. You can use any of the following:

- `./setup.sh npm` - Use npm as your package manager (default)
- `./setup.sh pnpm` - Use pnpm as your package manager
- `./setup.sh yarn` - Use yarn as your package manager
- `./setup.sh bun` - Use bun as your package manager

> **IMPORTANT**: This project is primarily configured for npm. If you encounter errors with pnpm such as "This project is configured to use npm", try using npm instead.

## Network Requirements

This project requires internet access to download and install dependencies. The core dependencies that are needed include:

- react
- react-dom
- react-router-dom
- lucide-react
- @tanstack/react-query
- Various other packages

Without network connectivity, the build process will fail with errors about missing modules.

## Running the Project

After running the setup script with your preferred package manager, you can:

- Run tests with `<package-manager> run test` (e.g., `npm run test`)
- Start development server with `<package-manager> run dev` (e.g., `npm run dev`)

## Troubleshooting

If you see errors about missing modules:

1. Ensure you have internet connectivity
2. Try running setup with npm: `./setup.sh npm`
3. If using a proxy, configure npm with the proxy settings:
   ```
   npm config set proxy http://proxy-server:port
   npm config set https-proxy http://proxy-server:port
   ```

After resolving connectivity issues, run `./setup.sh npm` again to install dependencies.


# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/3fad5ec6-2b6e-4163-b266-afac8f1ced32

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/3fad5ec6-2b6e-4163-b266-afac8f1ced32) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Run the setup script with your preferred package manager (npm, pnpm, yarn, or bun)
./setup.sh npm  # Default and most compatible option

# If you're using OpenAI Codex environments, a convenience script is available:
./.codex/setup.sh  # Installs dependencies using npm

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev  # Use the same package manager you specified in setup.sh
```

> **IMPORTANT**: This project requires internet access to install dependencies. Without network connectivity, the build process will fail with errors about missing modules like 'react', 'react-router-dom', and 'lucide-react'.

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/3fad5ec6-2b6e-4163-b266-afac8f1ced32) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Integrations

See [docs/Integrations.md](docs/Integrations.md) for information on the Zion Assistant browser extension and Slack bot.
Payment environment variables are documented in [docs/Payments.md](docs/Payments.md).

## Troubleshooting

### Network Issues

If you see errors related to missing modules like 'react', 'react-dom', or 'lucide-react', your environment may not have internet access to download these dependencies. Options to resolve this:

1. Ensure you have internet connectivity
2. Configure proxy settings if needed: `npm config set proxy http://your-proxy:port`
3. Use a pre-downloaded `node_modules` directory if available

### Package Manager Issues

If you encounter errors running `bun install` (for example, integrity check failures), delete any `bun.lockb` file and run `npm install` instead. This project relies on npm and is not guaranteed to work with Bun. Adding `bun.lockb` to `.gitignore` ensures Bun isn't accidentally used.

For pnpm errors showing "This project is configured to use npm", use `./setup.sh npm` instead as the project may have npm-specific configurations.

If you see a warning about `rimraf@3.0.2` being deprecated, install the latest
version of `rimraf`:

```sh
npm install rimraf@^5 --save-dev
```

This updates the dependency to a supported v5 release.

To prevent memory leaks from the deprecated `inflight` package, the project pins
`glob` to version `10.4.5` via the `resolutions` field in `package.json`. Run
`npm install` to ensure this version is installed.

To suppress npm warnings about `@humanwhocodes/config-array`, the `resolutions`
block maps it to `@eslint/config-array`. Run `npm install` to apply this
override.

### Whitelabel Tenant Errors

If the app logs **"Error loading tenant"** during startup, the request to the
Supabase edge function that provides whitelabel settings failed. Confirm that
`VITE_SUPABASE_URL`/`VITE_SUPABASE_ANON_KEY` (or the Next.js style
`NEXT_PUBLIC_SUPABASE_URL`/`NEXT_PUBLIC_SUPABASE_ANON_KEY`) are set in your
environment and that you have network connectivity. The tenant hook will retry
a few times before giving up.

### Translation Service

Automatic translations rely on OpenAI. Set `VITE_OPENAI_API_KEY` (or
`NEXT_PUBLIC_OPENAI_API_KEY`) to allow the client to contact the API directly
when the Supabase function is unavailable.

## Testing

Run unit tests with:

```sh
npm run test
```

To watch tests during development:

```sh
npm run test:watch
```

### End-to-End Tests

Open Cypress for interactive debugging:

```sh
npm run cypress:open
```

Run the Cypress suite headlessly:

```sh
npm run cypress:run
```

### Coverage Report

After running `npm run test`, open `coverage/lcov-report/index.html` in your
browser to view detailed coverage information.

When tests run on GitHub Actions, the workflow uploads the `coverage` directory
using `actions/upload-artifact@v4`. Visit a workflow run and download the
`coverage-report` artifact to retrieve the generated HTML coverage report.

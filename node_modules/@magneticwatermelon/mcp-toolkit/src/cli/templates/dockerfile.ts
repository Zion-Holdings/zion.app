export function generateDockerfile(
  projectName: string,
  options?: {
    port?: number;
  }
): string {
  const port = options?.port || 8080;

  return `# Use the official Bun image as base
# See all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# Install dependencies into temp directory
# This will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock* bun.lockb* /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# Install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lock* bun.lockb* /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# Copy node_modules from temp directory
# Then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# Build the project
ENV NODE_ENV=production
RUN bun run build

# Copy production dependencies and source code into final image
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/dist ./dist
COPY --from=prerelease /usr/src/app/package.json .

# Copy environment configuration files if they exist
COPY --from=prerelease /usr/src/app/.env.config.json* ./
COPY --from=prerelease /usr/src/app/.env.example* ./

# Set environment variables
ENV NODE_ENV=production
ENV PORT=${port}

# Expose port for HTTP server
EXPOSE ${port}

# Health check for HTTP server
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \\
  CMD bun -e "fetch('http://localhost:${port}/health').then(() => process.exit(0)).catch(() => process.exit(1))"

# Run the app as the bun user (built into the image)
USER bun

# Start the application
ENTRYPOINT ["bun", "run", "dist/index.js"]
`;
}

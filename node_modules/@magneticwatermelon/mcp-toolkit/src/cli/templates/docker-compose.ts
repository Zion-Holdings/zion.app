export function generateDockerCompose(
  projectName: string,
  options?: {
    port?: number;
  }
): string {
  const port = options?.port || 8080;

  return `version: '3.8'

services:
  ${projectName}:
    build: .
    ports:
      - "${port}:${port}"
    env_file:
      - .env.local
    environment:
      - NODE_ENV=production
      - PORT=${port}
    restart: unless-stopped
    
    # Uncomment to mount local files for development
    # volumes:
    #   - ./src:/app/src
    #   - ./dist:/app/dist
    
    # Resource limits (optional)
    deploy:
      resources:
        limits:
          memory: 512M
          cpus: '0.5'
        reservations:
          memory: 256M
          cpus: '0.25'
`;
}

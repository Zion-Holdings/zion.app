# Dockerfile for Zion Tech Nexus Market
# Build stage
FROM node:20 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:20-slim AS runner
WORKDIR /app
COPY --from=builder /app .
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npx", "next", "start", "-p", "3000"]

# DevNet Dockerfile
FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --prefer-offline --no-audit --no-fund
COPY . .

ENV DEVNET=1
ENV PORT=3000
EXPOSE 3000

# For quick iterations we run Next dev; switch to build/start for prod-like
CMD ["sh", "-c", "npm run dev"]
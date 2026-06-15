# ============================================
# Stage 1: Dependencies Installation Stage
# ============================================

# IMPORTANT: Node.js Version Maintenance
# This Dockerfile uses Node.js 24.13.0-slim, which was the latest LTS at the time of writing.
# Regularly update NODE_VERSION to the latest LTS for security and compatibility.
ARG NODE_VERSION=24.13.0-slim
# Pin pnpm to the version that generated pnpm-lock.yaml (lockfileVersion 9.0) for reproducible builds.
ARG PNPM_VERSION=10.33.0

FROM node:${NODE_VERSION} AS dependencies
ARG PNPM_VERSION

WORKDIR /app

# Install pnpm directly via npm. We intentionally avoid corepack: the corepack bundled
# with Node 24 ships stale signature keys and fails to verify the pnpm download
# (`Cannot find matching keyid`), which is what broke the original build.
RUN npm install -g pnpm@${PNPM_VERSION}

# Copy manifest + lockfile first to leverage Docker's layer caching.
COPY package.json pnpm-lock.yaml ./

# Install dependencies with a frozen lockfile; cache the pnpm store across builds.
RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

# ============================================
# Stage 2: Build Next.js application in standalone mode
# ============================================

FROM node:${NODE_VERSION} AS builder
ARG PNPM_VERSION

WORKDIR /app

RUN npm install -g pnpm@${PNPM_VERSION}

# Copy installed dependencies from the previous stage
COPY --from=dependencies /app/node_modules ./node_modules

# Copy application source code
COPY . .

ENV NODE_ENV=production

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED=1

# Build the Next.js application.
# To speed up rebuilds you can cache build artifacts with:
#   --mount=type=cache,target=/app/.next/cache
RUN pnpm build

# ============================================
# Stage 3: Run Next.js application
# ============================================

FROM node:${NODE_VERSION} AS runner

WORKDIR /app

# Set production environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Uncomment to disable telemetry at runtime.
# ENV NEXT_TELEMETRY_DISABLED=1

# Copy production assets
COPY --from=builder --chown=node:node /app/public ./public

# Set the correct permission for the prerender cache
RUN mkdir .next && chown node:node .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

# If you want to persist the build-time fetch cache, uncomment:
# COPY --from=builder --chown=node:node /app/.next/cache ./.next/cache

# Switch to non-root user for security best practices
USER node

# Expose port 3000 to allow HTTP traffic
EXPOSE 3000

# Start the Next.js standalone server
CMD ["node", "server.js"]

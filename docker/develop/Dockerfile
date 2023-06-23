FROM node:18-alpine AS base

WORKDIR /app

COPY package.json ./

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm i

EXPOSE 3000

ENV PORT 3000


CMD ["npm", "run", "dev"]
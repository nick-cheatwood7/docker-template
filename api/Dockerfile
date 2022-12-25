# stage 1: build code
FROM node:18-alpine AS builder
ENV NODE_ENV=development
WORKDIR /usr/app/server

COPY package*.json ./
RUN npm install

COPY ./ ./
RUN npm run build

# stage 2: serve code
FROM node:18-alpine AS runner
ENV NODE_ENV=production
WORKDIR /usr/app/server

COPY package*.json ./
RUN npm install --only=production

COPY --from=builder ./usr/app/server/dist/ ./dist

CMD ["npm", "run", "start"]
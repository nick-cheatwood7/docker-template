# stage 1: build code
FROM node:18-alpine as build
WORKDIR /usr/app
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# stage 2: serve code
FROM node:18-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --only=production

COPY --from=build /usr/app/dist ./dist
# COPY .env .

CMD ["node", "dist/index.js"]
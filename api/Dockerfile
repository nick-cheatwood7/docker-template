FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN rm -rf dist

RUN npm install

# expose ports -- will be proxied by Caddy
# EXPOSE 4000

RUN npm run build

# commands to run at runtime
CMD ["npm", "run", "start"]

# build by running `docker build -t my-app:v1 ./`
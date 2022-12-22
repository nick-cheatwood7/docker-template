FROM node:18-alpine

RUN npm install -g nodemon

# set working directory
WORKDIR /app

COPY package*.json ./

# commands to run at build time
RUN npm install

# copy project files to location
COPY ./ ./

# expose ports
EXPOSE 4000

# commands to run at runtime
CMD ["npm", "run", "dev"]

# build by running `docker build -t my-app:v1 ./`
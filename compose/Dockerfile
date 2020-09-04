# pull official base image
FROM node:14.9.0-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json /app
RUN yarn install --silent

# add app
COPY . /app

# start app
CMD ["yarn", "run", "start"]

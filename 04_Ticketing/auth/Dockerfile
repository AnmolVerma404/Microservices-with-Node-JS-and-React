FROM node:alpine

WORKDIR /app
COPY package.json .
# Only Prod will make sure to install only production dependencies not --save-dev
RUN npm install --only=prod
COPY . .

CMD [ "npm","start" ]
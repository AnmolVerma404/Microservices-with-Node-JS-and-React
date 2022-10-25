# Specify a base image
# FROM 'alpine' -> alpine dosent have node pre installed
# we are using node:alpine to just install necessary npm program in node image
FROM node:alpine
# The next two line have some change due to node version ^15
# Because no work directory is specified node installs in root directory which result in error i.e.
# npm ERR! Tracker "idealTree" already exists
WORKDIR /usr/app
COPY ./ /usr/app
# Install some dependencies
RUN npm install
# Default Command
CMD ["npm","start"]
# Set the base image to the official Node.js one
FROM node

# File Author / Maintainer
MAINTAINER Jacopo Daeli <jacopo.daeli@gmail.com>

# Bundle app source
COPY . /src

# Change working directory
WORKDIR /src

# Install app dependencies
RUN npm install

# Expose port app is running on
EXPOSE 8080

CMD ["node", "--use_strict", index.js"]

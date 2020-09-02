FROM node:14-slim

RUN apt-get update

# Install ps needed by nest start:dev command. This is not needed
# if not slim image is used
RUN apt-get install -y procps hg-fast-export
# Remove dependency list
RUN rm -rf /var/lib/apt/lists/*

# Set to a non-root built-in user `node`
USER node

# Create app directory (with user `node`)
RUN mkdir -p /home/node/app

WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY --chown=node package*.json ./
RUN npm install

# Bundle app source code
COPY --chown=node . .

RUN npm run build

EXPOSE ${PORT}
ENTRYPOINT [ "npm", "run" ]

# stage base
FROM node:bullseye-slim as base

RUN apt-get update && \
    apt-get install curl -y


# stage prod
FROM base as prod

RUN npm i -g ts-node typescript

WORKDIR /app

COPY package.json yarn.lock .

RUN yarn

COPY . .

CMD ts-node server.ts


# stage development
FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye as development

RUN npm i -g nodemon ts-node typescript

WORKDIR /workspace/ms-foo

RUN yarn

CMD nodemon


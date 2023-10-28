# stage base
FROM node:bullseye-slim as base


# stage prod
FROM base

WORKDIR /app

COPY package.json yarn.lock .

RUN yarn

COPY . .

CMD yarn start

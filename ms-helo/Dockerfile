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
FROM base as development

WORKDIR /workspace/ms-helo

RUN npm i -g nodemon ts-node typescript

CMD yarn && nodemon


FROM development AS dev-env

RUN <<EOF
apt-get install git -y
EOF

RUN <<EOF
# for alpine
#addgroup -S docker
#adduser -S --shell /bin/bash --ingroup docker vscode

# for ubuntu
groupadd docker
useradd -m -s /bin/bash -g docker vscode
EOF

# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /

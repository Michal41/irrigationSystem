FROM node:20-alpine

RUN apk add yarn

RUN apk add --update --no-cache make gcc g++ python3
RUN mkdir /app
WORKDIR /app
COPY . /app

RUN yarn install
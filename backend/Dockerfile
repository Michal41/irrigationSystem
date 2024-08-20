FROM node:20-alpine

RUN apk add yarn
RUN mkdir /app
WORKDIR /app
COPY . /app

RUN yarn install
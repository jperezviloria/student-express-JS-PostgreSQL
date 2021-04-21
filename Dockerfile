FROM node:latest as build-step-node

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

COPY . /usr/src/app

RUN npm install

RUN npm run build

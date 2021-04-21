FROM node:latest as build-step

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

COPY . /usr/src/app

RUN npm install

RUN npm run build

EXPOSE 4000

CMD npm run start

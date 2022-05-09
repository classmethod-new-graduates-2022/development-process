FROM node:18

WORKDIR /app

ADD package.json .
ADD package-lock.json .
ADD tsconfig.json .
ADD packages/40-todo-api/package.json packages/40-todo-api/
ADD packages/40-todo-client/package.json packages/40-todo-client/

RUN npm ci

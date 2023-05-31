FROM node:lts-slim

ENV PORT=$PORT

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

CMD ["npm", "run", "start"]


FROM node:lts-slim

ENV API_PORT=${API_PORT}

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

CMD ["npm", "run", "start"]


FROM node:lts-slim
ARG API_PORT=3003

ENV API_PORT=${API_PORT}

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

CMD ["npm", "run", "start"]


FROM node:12

WORKDIR /docker-demo

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["run", "start"]

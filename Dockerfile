FROM node:12

RUN mkdir /docker-demo

WORKDIR /docker-demo

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "start" ]

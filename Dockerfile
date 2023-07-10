FROM  node:19-alpine

COPY package.json /app/

WORKDIR /app


# COPY /app/

RUN npm install

CMD [ "node", "server.js" ]
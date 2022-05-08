FROM node:14.15
EXPOSE 8080
COPY . .
WORKDIR src
RUN npm ci
CMD [ "node", "server.js" ]
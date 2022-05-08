FROM node:16-alpine

WORKDIR /usr/
COPY . /usr/

WORKDIR /usr/src
RUN npm ci

CMD ["npm", "start"]
EXPOSE 3000
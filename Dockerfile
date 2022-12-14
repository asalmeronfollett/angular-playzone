FROM node:16-alpine

WORKDIR /usr/src/app/app-ui

COPY package*.json ./

RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

EXPOSE 4201
EXPOSE 49153

CMD ["npm", "start"]
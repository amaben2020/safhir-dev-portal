FROM node:12
WORKDIR /usr
COPY . .
RUN npm cache clean --force
RUN rm -rf node_modules
RUN npm install
RUN npm install -g env-cmd
EXPOSE 8080
RUN npm run build:__MYENV__ --verbose
CMD npm run start:__MYENV__
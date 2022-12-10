FROM node:14.17.5

WORKDIR /usr/local/app

# skopiuj package.json i package-lock.json do /usr/local
COPY package*.json ./

# zrob npm install, aby zbudować projekt
RUN npm install && npm cache clean --force
ENV PATH=/usr/local/node_modules/.bin:$PATH

COPY src ./src

EXPOSE 8080

# uruchom webserwer
CMD [ "npm", "run", "serve" ]
FROM node:14-buster

WORKDIR /usr/src/app

COPY package*.json ./

# 本番用は --only=production を付与する
RUN npm install

COPY . .

EXPOSE 3000
CMD ["node", "bundle.js"]
FROM node:12.14.1-alpine
WORKDIR /frontend
COPY package.json /frontend
RUN npm install
COPY . /frontend
EXPOSE 8000
CMD ["npm", "start"]


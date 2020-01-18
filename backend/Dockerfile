FROM node:12.14.1-alpine
WORKDIR /backend
COPY package.json /backend
ENV BACKEND_PORT=9000
RUN npm install
COPY . /backend
EXPOSE 9000
CMD ["npm", "run", "dev"]

# build environment
FROM node:9.5 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
ADD package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.0 -g --silent
ADD . /usr/src/app
RUN npm run build

EXPOSE 4000
CMD ["npm", "run", "start-server"]

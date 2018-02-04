FROM node:8.5.0-alpine as build
COPY . .
RUN npm install
RUN npm run build

FROM node:8.5.0-alpine as release
COPY --from=build /build ./build
RUN npm install -g serve
EXPOSE 4000
CMD [ "serve", "-p", "4000","-s", "build" ]

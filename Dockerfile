FROM node:12.13.1-alpine AS build
RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers autoconf automake make nasm python git && \
  npm install --quiet node-gyp -g
WORKDIR /build
COPY ./src/package.json /build/
RUN npm install --production

FROM node:12.13.1-alpine
RUN apk add tzdata
ENV TZ "America/Guayaquil"
RUN mkdir /server
RUN addgroup -S -g 1680 developers 2> /dev/null && \
    adduser -S -u 1680 -D -H -h /usr/lib/developers -s /sbin/nologin -G developers -g developers developers 2>/dev/null
COPY --from=build /build/node_modules /server/node_modules
COPY ./src/ /server
#RUN npm run migrate-prod
WORKDIR "/server"
USER developers
EXPOSE 8000
CMD npm run start
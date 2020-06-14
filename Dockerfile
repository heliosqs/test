FROM node:12.13.1-alpine AS build
WORKDIR /build
COPY ./src/ /build/
RUN npm install --production
RUN npm run build

FROM node:12.13.1-alpine
RUN apk add tzdata
ENV TZ "America/Guayaquil"
RUN mkdir /server
RUN addgroup -S -g 1680 developers 2> /dev/null && \
    adduser -S -u 1680 -D -H -h /usr/lib/developers -s /sbin/nologin -G developers -g developers developers 2>/dev/null
COPY --from=build /build/dist/ /server/dist
COPY --from=build /build/config/ /server/config
COPY --from=build /build/node_modules/ /server/node_modules
COPY --from=build /build/package.json /server/
WORKDIR "/server"
USER developers
EXPOSE 8000
CMD npm run start
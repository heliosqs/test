FROM node:12.13.1-alpine AS build
RUN apk add tzdata
ENV TZ "America/Guayaquil"
RUN addgroup -S -g 1680 developers 2> /dev/null && \
    adduser -S -u 1680 -D -H -h /usr/lib/developers -s /sbin/nologin -G developers -g developers developers 2>/dev/null
WORKDIR /build
COPY ./src/ /build/
RUN npm install
RUN npm run build
RUN npm uninstall --save-dev
USER developers
EXPOSE 8000
CMD npm run start
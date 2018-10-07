FROM keymetrics/pm2:latest-alpine

ENV NODE_ENV "production"
ARG APP_ENV="production"

# Bundle APP files
COPY app app/
COPY package.json .
COPY pm2.json .

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

CMD [ "pm2-runtime", "start", "pm2.json" ]

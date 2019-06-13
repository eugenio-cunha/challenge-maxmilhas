FROM node:8.16.0-alpine

ENV HOME='/usr/src/app'

EXPOSE 3000

WORKDIR $HOME
COPY ./ $HOME

RUN npm install --only=prod \
    && npm rebuild --quiet 

CMD [ "npm", "start" ]

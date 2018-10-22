FROM node:8.9.1

RUN cd /var && mkdir ts && cd ts

ADD ./package.json .

RUN npm install

ADD ./ .

#RUN npm rebuild node-sass --force

RUN npm run build

RUN cd assets/build/javascript && ls
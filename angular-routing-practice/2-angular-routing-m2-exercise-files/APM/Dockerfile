FROM node:latest
LABEL author="Sudeep Patel"

ENV NODE_ENV=production
ENV PORT=3000

COPY . /var/www
WORKDIR /var/www

RUN npm install

VOLUME ["/var/www", "/logs"]
    
# EXPOSE 3000
EXPOSE  $PORT

ENTRYPOINT ["npm","start"]



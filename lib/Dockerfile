# -  /Crazy237/

FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  npm i pm2 -g && \
  
RUN git clone https://github.com/crazy237/Serizawa-Md /root/Serizawa-Md
WORKDIR /root/Serizawa-Md/

COPY package.json .

COPY . .
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm","start","yarn" ]
  
# -  /Crazy237/

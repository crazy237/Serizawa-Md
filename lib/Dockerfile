# -  /Crazy237/

FROM node:lts-buster
RUN git clone https://github.com/crazy237/Serizawa-Md /root/Serizawa-Md
WORKDIR /root/Serizawa-Md/
RUN curl -LJO https://raw.githubusercontent.com/crazy237/Serizawa-Md/main/package.json
RUN npm install npm@latest
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm","start","yarn" ]
  
# -  /Crazy237/

FROM node:14.18-alpine3.12

WORKDIR /usr

COPY package.json ./
COPY tsconfig.json ./
COPY src ./src

# Install all packages
RUN yarn install --only=production
RUN yarn run build

EXPOSE 80

CMD ["yarn", "start"]
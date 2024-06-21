# Build for produciton
FROM node:21-alpine3.18 as build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Production
FROM node:21-alpine3.18

# App env
ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install --production

COPY --from=build /usr/src/app/dist ./dist

CMD ["node", "dist/index.js"]

# Build stage for the server
FROM node:18 as server
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install
COPY server/ .
EXPOSE 5001

# Build stage for the client
FROM node:18 as client
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ .
RUN npm run build

# Production stage
FROM node:18
WORKDIR /app
COPY --from=server /app/server ./
COPY --from=client /app/client/build ./client/build
EXPOSE 5001
CMD ["node", "server.js"] 
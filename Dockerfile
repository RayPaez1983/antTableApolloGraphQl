FROM node:current-alpine

WORKDIR /app
# Cache and Install dependencies
COPY package*.json ./

RUN yarn install
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "yarn", "start" ]
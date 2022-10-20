FROM node:13.12.0-alpine
WORKDIR /react

COPY package.json package-lock.json ./
RUN npm install 
# RUN npm install react-scripts
COPY . .

# Build the project and copy the files
RUN npm run build


EXPOSE 3000
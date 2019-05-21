# Stage 1
FROM node:8.14.1 as react-build
WORKDIR /app
COPY . ./
RUN npm install --progress=false
RUN npm run build

# Stage 2
FROM nginx:alpine
# Copy the ngnix configrations
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
# Copy the build folder of the react app
COPY --from=react-build /app/build /usr/share/nginx/html
# Expose it on port 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
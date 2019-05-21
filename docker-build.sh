#!/bin/sh
npm install --progress=false
npm run build
docker build -f Dockerfile -t nesbilgi/xslt-service-ui .
docker push nesbilgi/xslt-service-ui
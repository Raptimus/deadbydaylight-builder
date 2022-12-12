# deadbydaylight-builder

## To Deploy with Docker

### Build docker image

> $ docker build . -t dbd-front-image --force-rm

### Run container to localhost

> $ docker run -d -p 5173:80 --name dbd-front dbd-front-image

### Show to navigator

Go to http://localhost:5173

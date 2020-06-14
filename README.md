docker build --tag test:1.0 .
docker run --publish 8000:8000 -it --name test05 test:1.0 sh
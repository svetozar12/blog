docker container rm blog-container -f
docker image rm blog-app -f
docker build -t blog-app .
docker run --name blog-container -p 3001:3001 -d blog-app

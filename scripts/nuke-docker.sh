docker-compose down
docker rmi $(docker images -a -q) -f
docker rm $(docker ps -a -q) -f
docker system prune -f
docker volume prune -f
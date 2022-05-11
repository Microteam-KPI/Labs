
eval $(minikube docker-env)
docker build -t service1:0.2 -f services/service1/Dockerfile services/service1
docker build -t service2:0.1 -f services/service2/Dockerfile services/service2
docker build -t service2-migrations:0.1 -f services/service2/migrations/Dockerfile services/service2/migrations/
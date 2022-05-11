
eval $(minikube docker-env)
docker build -t service1:0.1.0 -f services/service1/Dockerfile services/service1
docker build -t service2:0.1.0 -f services/service2/Dockerfile services/service2
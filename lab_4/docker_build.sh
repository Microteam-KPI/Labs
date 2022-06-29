
#!/bin/bash
minikube -p minikube docker-env | source
docker build -t service1:0.1.0 -f services/service1/Dockerfile services/service1
docker build -t service2:0.2.0 -f services/service2/Dockerfile services/service2
docker build -t service2-migrations:0.1.0 -f services/service2/migrations/Dockerfile services/service2/migrations/
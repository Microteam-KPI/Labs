## Before all
  Add to `/etc/hosts`, where 192.168.39.187 is output of `minicube ip`
  ```
  192.168.39.187  kibana.localdomain
  192.168.39.187  grafana.localdomain
  ```

## minicube
  ```
  minikube addons enable metrics-server

  minikube addons enable ingress
  ```

## monitoring
  ```
  kubectl apply -f k8s/monitoring/namespace.yaml

  helm repo add prometheus-community https://prometheus-community.github.io/helm-charts

  helm install --namespace kube-monitoring prometheus prometheus-community/kube-prometheus-stack

  kubectl apply -f k8s/monitoring/ingress.yaml
  ```
  ### Get grafana secrets
  - login: admin
  - password: `kubectl get secret --namespace kube-monitoring prometheus-grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo`


## logging
  ```
  kubectl apply -f k8s/logging/namespace.yaml
  kubectl apply -f k8s/logging/elasticsearch --recursive
  kubectl apply -f k8s/logging/fluend --recursive
  kubectl apply -f k8s/logging/kibana --recursive
  kubectl apply -f k8s/logging/kibana --recursive
  kubectl apply -f k8s/logging/ingress.yaml
  ```

## services
  ```
  bash docker_build.sh
  kubectl apply -f k8s/postgres/ --recursive
  kubectl apply -f k8s/service1/ --recursive
  kubectl apply -f k8s/service2/ --recursive
  kubectl apply -f k8s/ingress.yaml
  ```

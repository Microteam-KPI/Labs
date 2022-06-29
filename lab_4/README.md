### Before all
Add to `/etc/hosts`, where 192.168.39.187 is output of `minicube ip`
- 192.168.39.187  kibana.localdomain
- 192.168.39.187  grafana.localdomain

### k8s
- 1. `cd Labs/lab_4`
- 2. `kubectl apply -f k8s/logging/namespace.yaml`
- 3. `kubectl apply -f k8s/logging/elasticsearch --recursive`
- 4. `kubectl apply -f k8s/logging/fluend --recursive`
- 5. `kubectl apply -f k8s/logging/kibana --recursive`
- 6. `kubectl apply -f k8s/logging/ingress.yaml`
- 7. `bash docker_build.sh`
- 8. `kubectl apply -f k8s/postgres/ --recursive`
- 9. `kubectl apply -f k8s/service1/ --recursive`
- 10. `kubectl apply -f k8s/service2/ --recursive`
- 11. `kubectl apply -f k8s/ingress.yaml`
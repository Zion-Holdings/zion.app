# Kubernetes Liveness and Readiness Probes

Use the `/health` endpoint exposed by the Node server to ensure the pod is running and able to connect to the database.

```yaml
livenessProbe:
  httpGet:
    path: /health
    port: 3001
  initialDelaySeconds: 10
  periodSeconds: 15
  failureThreshold: 3

readinessProbe:
  httpGet:
    path: /health
    port: 3001
  initialDelaySeconds: 5
  periodSeconds: 10
  failureThreshold: 3
```

The probes expect a `200` response from `/health`, which returns the application version, process uptime, and MongoDB connection status.

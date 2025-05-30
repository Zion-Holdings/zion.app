# Observability Guide

This project exposes metrics and structured logs that can be collected by Prometheus, Loki and Grafana.

## Logging

Structured JSON logs are configured using `python-json-logger`. Logs are written to STDOUT so that Grafana Agent can forward them to Loki.

## Metrics

The backend uses `prometheus_client` to track:

- **HTTP request latency** via middleware
- **Database query counts**
- **Celery task duration**

Metrics are exposed at `/metrics` and can be scraped by Prometheus.

A staff-only route `/admin/metrics` embeds a Grafana dashboard via an iframe. Set the `GRAFANA_URL` environment variable to the dashboard URL.

## Running with Loki and Prometheus

A convenience compose file `docker-compose.loki-prometheus.yml` runs Loki, Prometheus and Grafana Agent. Start it with:

```bash
docker compose -f docker-compose.loki-prometheus.yml up
```

Ensure `python-json-logger` and `prometheus_client` are installed in your virtual environment and that the Grafana Agent configuration points to your Loki and Prometheus instances.

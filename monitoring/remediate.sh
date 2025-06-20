#!/bin/bash

# Script to handle remediation actions for services
# Arguments:
# $1: serviceName
# $2: problemURL
# $3: latencyValue

SERVICE_NAME="$1"
PROBLEM_URL="$2"
LATENCY_VALUE="$3"

LOG_PREFIX="[remediate.sh]"

echo "$LOG_PREFIX Called for service: '$SERVICE_NAME', URL: '$PROBLEM_URL', Latency: '$LATENCY_VALUE ms'"

# Logic based on serviceName
if [ "$SERVICE_NAME" == "nextjs-service" ]; then
  echo "$LOG_PREFIX Service '$SERVICE_NAME' is Kubernetes managed. Liveness probes should handle restarts. No direct action taken by this script. Manual investigation advised for persistent high latency."
  # Placeholder for K8s specific actions if any in future, e.g., kubectl rollout restart deployment ${serviceName} -n your-namespace
elif [ -n "$SERVICE_NAME" ]; then
  # Attempt PM2 restart for other known services if applicable
  # Check if pm2 is available
  if command -v pm2 &> /dev/null; then
    echo "$LOG_PREFIX Attempting to restart PM2-managed service: '$SERVICE_NAME'"
    pm2 restart "$SERVICE_NAME"
    RESTART_STATUS=$?
    if [ $RESTART_STATUS -eq 0 ]; then
      echo "$LOG_PREFIX Successfully issued PM2 restart command for '$SERVICE_NAME'."
    else
      echo "$LOG_PREFIX Failed to issue PM2 restart command for '$SERVICE_NAME' (PM2 exit code: $RESTART_STATUS). The service might not be managed by PM2 or PM2 is not running."
    fi
  else
    echo "$LOG_PREFIX PM2 command not found. Cannot restart '$SERVICE_NAME'."
  fi
  # Add other remediation actions based on serviceName or problemURL here
  # Example:
  # if [ "$SERVICE_NAME" == "database-service" ]; then
  #   echo "$LOG_PREFIX Attempting to clear cache for database-service..."
  #   # run_cache_clearing_command
  # fi
else
  echo "$LOG_PREFIX No serviceName provided or serviceName is empty. No specific remediation action taken."
fi

echo "$LOG_PREFIX Remediation script execution finished for '$SERVICE_NAME'."

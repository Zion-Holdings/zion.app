#!/bin/bash
curl -s http://localhost:3005/status | jq . 2>/dev/null || echo "Communication system not responding"

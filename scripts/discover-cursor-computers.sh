#!/bin/bash

echo "🔍 Discovering Cursor computers on network..."
echo ""

# Scan local network for Cursor installations
NETWORK=$(ip route | grep default | awk '{print $3}' | cut -d. -f1-3)

echo "Scanning network: $NETWORK.0/24"
echo ""

# Use nmap if available, otherwise use ping
if command -v nmap &> /dev/null; then
    echo "Using nmap for network scan..."
    nmap -sn "$NETWORK.0/24" | grep -E "Nmap scan report" | while read line; do
        IP=$(echo $line | awk '{print $5}')
        HOSTNAME=$(echo $line | awk '{print $6}' | sed 's/[()]//g')
        
        # Check if this host has Cursor running
        if curl -s "http://$IP:3008/status" > /dev/null 2>&1; then
            echo "✅ Found Cursor computer: $HOSTNAME ($IP)"
            curl -s "http://$IP:3008/status" | jq '.computerId' 2>/dev/null || echo "   Computer ID: Unknown"
        fi
    done
else
    echo "Using ping for network scan..."
    for i in {1..254}; do
        IP="$NETWORK.$i"
        if ping -c 1 -W 1 "$IP" > /dev/null 2>&1; then
            if curl -s "http://$IP:3008/status" > /dev/null 2>&1; then
                echo "✅ Found Cursor computer at $IP"
            fi
        fi
    done
fi

echo ""
echo "🔗 To connect to a specific computer:"
echo "   curl http://IP:3008/status"
echo "   curl http://IP:3010/sync"

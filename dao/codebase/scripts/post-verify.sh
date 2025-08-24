#!/usr/bin/env bash
set -euo pipefail
ADDR=$1
shift || true
npx hardhat verify --network ${NETWORK:-sepolia} $ADDR "$@"
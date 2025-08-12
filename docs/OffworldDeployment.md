# Offworld Deployment Guide

This document explains how to run Zion OS in environments with little or no internet connectivity.

## Storage & Sync
- **IPFS** is used for persistent data such as jobs, profiles, proposals and token metadata.
- **OrbitDB** provides peer-to-peer databases for chat messages, DAO vote logs and constitution edits.

## Deploy Script
Run the following after building the application:

```bash
npx deploy-zion-ipfs
```

This uploads the `dist` folder to your configured IPFS node and outputs the resulting CID hash. The CID can be pinned with services like Filecoin, Pinata or Web3.Storage and optionally served through Fleek, Skynet or Spheron.

## P2P Identity
Use DIDs along with ENS or Lens handles for user identification. A future AI-passport module can verify peers without central servers.

## Optional AI Add-on
Offline bundles of ZionGPT and Whisper can be included for voice interfaces. A "Broadcast Manifesto" mode can push updates over a mesh network when connectivity becomes available.

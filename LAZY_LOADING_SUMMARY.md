# Lazy Loading and Code Splitting Improvements

## Overview
Implemented dynamic imports across high-traffic pages to enable better code splitting and faster initial load times.

## Key Changes
- Added `next/dynamic` to load pages like Marketplace, Services, and Equipment only when needed.
- Each updated page exports a dynamically imported component which reduces the bundle size for initial navigation.

These changes leverage Next.js automatic code splitting to improve performance without sacrificing server-side rendering.

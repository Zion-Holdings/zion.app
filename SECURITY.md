# Security Guide

This document outlines recommended security practices for this project, including dependency scanning, CI checks, and production hardening guidelines.

- Use `npm run security:scan` to perform dependency audits and static checks.
- Keep `next.config.js` minimal and disable features not in use.
- Rotate secrets and avoid committing any credentials.
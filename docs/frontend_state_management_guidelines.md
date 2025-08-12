# Frontend State Management Guidelines

This document outlines best practices for managing state in the Zion frontend application.

## Overview

The project uses a combination of **React Query**, **Redux Toolkit**, and the **React Context API**. Each tool serves a specific role and helps keep the codebase maintainable.

- **React Query** is preferred for server state and data fetching logic. It handles caching, background updates and optimistic updates.
- **Redux Toolkit** should be used for complex client‑side state that needs to be accessed across many parts of the application (for example, the shopping cart or advanced auth session details).
- **React Context** is well suited for lightweight global data such as the current theme, basic auth status or wallet connection info.

## Choosing the Right Tool

1. **Is the data fetched from an API and primarily read‑only?** Use React Query.
2. **Does the state require complex updates or business logic?** Consider Redux Toolkit.
3. **Is the data simple and global but not worth the overhead of Redux?** React Context works well.

When in doubt, start with React Query for data from the server, use Context for trivial global state, and reach for Redux Toolkit only when the state management needs outgrow the simpler solutions.


# React Error 419 Explained

When running a production build of React, errors are minified and represented by codes. Error **419** typically indicates that the legacy rendering API `ReactDOM.render` (or `ReactDOM.hydrate`) is being used with React 18 or later. In React 18 these APIs were replaced by `createRoot` and `hydrateRoot`.

## How to Fix

Check your application entry point and replace any usage of:

```ts
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, container);
```

with the modern root API:

```ts
import { createRoot } from 'react-dom/client';
createRoot(container).render(<App />);
```

If your project is using Next.js, this change is handled automatically, so seeing this error likely means a custom script or third-party code is still calling the old `ReactDOM.render` method. Update those calls to use `createRoot` or `hydrateRoot` instead.

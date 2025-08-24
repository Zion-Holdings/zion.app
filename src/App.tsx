import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from "./components/ErrorBoundary";
import { PageLoader } from "./components/ui/loading-spinner";

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Developers = React.lazy(() => import('./pages/Developers'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader text="Loading Zion Tech Group..." />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
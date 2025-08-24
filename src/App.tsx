import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Only import components that exist
const Home = React.lazy(() => import('./pages/Home'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const AboutPage = React.lazy(() => import('./pages/About'));
const NotFoundPage = React.lazy(() => import('./pages/NotFound'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '*', element: <NotFoundPage /> },
];

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
        <Routes>
          {baseRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
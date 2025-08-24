import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Core pages
const Home = React.lazy(() => import('./pages/Home'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/micro-saas-services', element: <MicroSaasServices /> },
];

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-400 mx-auto mb-4"></div>
            <p className="text-blue-100 text-lg">Loading amazing content...</p>
          </div>
        </div>
      }>
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

import React from "react";
import Navigate, { Routes, Route } from "react-router-dom";
import { MobileThemeProvider } from "./theme/MobileThemeProvider";
import { MobileOnboarding } from "./pages/MobileOnboarding";
import { MobileHome } from "./pages/MobileHome";
import { MobileBrowse } from "./pages/MobileBrowse";
import { MobileProjects } from "./pages/MobileProjects";
import { MobileMessages } from "./pages/MobileMessages";
import { MobileResumeBuilder } from "./pages/MobileResumeBuilder";
import { MobileJobPost } from "./pages/MobileJobPost";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from '@/context/CartContext'; // Make sure this import is present

const CartContextTester = () => {
  try {
    const cart = useCart();
    console.log('CartContextTester: useCart() successful', cart);
    // You can render something minimal if you want, or just null
    // For debugging, let's render a small visible element.
    return (
      <div style={{ position: 'fixed', top: '10px', left: '10px', backgroundColor: 'lightgreen', padding: '5px', zIndex: 9999 }}>
        CartContextTester: OK
      </div>
    );
  } catch (error) {
    console.error('CartContextTester: useCart() FAILED!', error);
    // Render an error message if it fails
    return (
      <div style={{ position: 'fixed', top: '10px', left: '10px', backgroundColor: 'red', color: 'white', padding: '5px', zIndex: 9999 }}>
        CartContextTester: FAILED - {(error as Error).message}
      </div>
    );
  }
};

export function MobileApp() {
  const { isAuthenticated } = useAuth();
  
  return (
    <MobileThemeProvider>
      <CartContextTester /> {/* <-- Add the test component here */}
      <Routes>
        <Route path="/onboarding" element={<MobileOnboarding />} />
        <Route 
          path="/" 
          element={
            isAuthenticated ? <MobileHome /> : <Navigate to="/onboarding" />
          } 
        />
        <Route path="/browse" element={<MobileBrowse />} />
        <Route path="/projects" element={<MobileProjects />} />
        <Route path="/inbox" element={<MobileMessages />} />
        <Route path="/resume" element={<MobileResumeBuilder />} />
        <Route path="/post-job" element={<MobileJobPost />} />
        <Route path="/profile" element={<div>Profile page</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MobileThemeProvider>
  );
}

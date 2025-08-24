import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();
<<<<<<< HEAD
  
=======

>>>>>>> d0d58136d327183e53cdbb308d5ed67246f24274
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
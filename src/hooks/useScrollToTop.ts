import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();
<<<<<<< HEAD

=======
  
>>>>>>> cfb04f63b138e721e668a86f56f120d011c10c16
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};